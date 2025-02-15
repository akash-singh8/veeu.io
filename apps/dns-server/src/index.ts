import { createSocket } from "dgram";
import { decode, encode, AUTHORITATIVE_ANSWER } from "dns-packet";
import { promises as dnsPromises } from "dns";

const server = createSocket("udp4");

server.on("error", (err) => {
  console.error("Server error:", err);
  server.close();
});

const db: { [key: string]: { [key: string]: string } } = {
  A: {
    "veeu.io": "76.76.21.21",
    "ns1.veeu.io": "3.84.135.102",
    "ns2.veeu.io": "3.84.135.102",
  },
  CNAME: {
    "www.veeu.io": "veeu.io",
  },
};

server.on("message", async (msg, remoteInfo) => {
  const incomingReq = decode(msg);
  const dnsQuestions = incomingReq.questions;

  if (!dnsQuestions || dnsQuestions.length === 0) {
    console.warn("No questions in DNS request");
    return;
  }

  const reqDomain = dnsQuestions[0].name.toLowerCase();
  const reqType = dnsQuestions[0].type;

  console.log("----------------------------------------------------");
  console.log("DNS Question : ", dnsQuestions);
  console.log("Remote Info :", remoteInfo);
  console.log("____________________________________________________");

  let response;
  if (["A", "CNAME"].includes(reqType)) {
    response = db[reqType][reqDomain!];
  }

  if (reqType === "A" && !response && db.CNAME[reqDomain]) {
    const cnameDomain = db.CNAME[reqDomain];

    try {
      const addresses = await dnsPromises.resolve4(cnameDomain);
      if (addresses.length > 0) response = addresses[0];
    } catch (error) {
      console.error(`Failed to resolve CNAME record: ${cnameDomain}:`, error);
    }
  }

  if (reqType && response) {
    const ans = encode({
      type: "response",
      id: incomingReq.id,
      flags: AUTHORITATIVE_ANSWER,
      questions: dnsQuestions,
      answers: [
        {
          type: reqType === "A" ? "A" : "CNAME",
          class: "IN",
          name: reqDomain!,
          data: response,
        },
      ],
    });

    server.send(ans, remoteInfo.port, remoteInfo.address);
  } else {
    // Handle non-existent domain
    const nxdomainResponse = encode({
      type: "response",
      id: incomingReq.id,
      flags: 0x8183, // NXDOMAIN flag
      questions: dnsQuestions,
      answers: [],
    });
    server.send(nxdomainResponse, remoteInfo.port, remoteInfo.address);
  }
});

// When the server starts listening, log the address and port information
server.on("listening", () => {
  const address = server.address();
  console.log(`DNS Server is running on ${address.address}:${address.port}`);
});

server.bind(53, () => {});
