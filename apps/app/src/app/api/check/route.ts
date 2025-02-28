import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const domain = searchParams.get("domain");
  const suffix = ".veeu.io";

  if (!domain) {
    return NextResponse.json(
      { message: "Domain parameter is required." },
      { status: 400 }
    );
  }

  // Validate that the domain contains only allowed characters
  const validRegex = /^[a-zA-Z0-9-]+$/;
  const subDomain = domain.slice(0, -suffix.length);

  if (!validRegex.test(subDomain) || !domain.endsWith(suffix)) {
    return NextResponse.json({ message: "Invalid domain!" }, { status: 400 });
  }

  try {
    const existingDomain = await prisma.domain.findUnique({
      where: { domain },
    });
    const isAvailable = !existingDomain;

    return NextResponse.json({ domain, isAvailable });
  } catch (err) {
    console.error("Error while checking domain availability :", err);
    NextResponse.json(
      { message: "Unable to check domain. Server side error!" },
      { status: 500 }
    );
  }
}
