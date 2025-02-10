import { createSocket } from "dgram";
import { decode, encode, AUTHORITATIVE_ANSWER } from "dns-packet";
const server = createSocket("udp4");

server.on("error", (err) => {
  console.error("Server error:", err);
  server.close();
});

const db: { [key: string]: { [key: string]: string } } = {
  A: {
    "devakash.in": "76.76.21.21",
    "ns.devakash.in": "3.84.135.102",
    "ns1.devakash.in": "3.84.135.102",
  },
  CNAME: {
    "www.devakash.in": "devakash.in",
  },
};

server.on("message", (msg, remoteInfo) => {
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
