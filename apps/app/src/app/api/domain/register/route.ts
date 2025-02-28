import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

import { prisma } from "@/lib/prisma";

export const POST = async (request: NextRequest) => {
  try {
    const { userId } = getAuth(request);
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { email, domain, date } = await request.json();
    if (!email || !domain || !date) {
      return NextResponse.json(
        { message: "Invalid request! Include email, domain and date." },
        { status: 400 }
      );
    }

    const existingDomain = await prisma.domain.findUnique({
      where: { domain },
      select: { domain: true },
    });
    if (existingDomain) {
      return NextResponse.json(
        { message: "Domain already registered!" },
        { status: 409 }
      );
    }

    await prisma.domain.create({
      data: {
        domain,
        totalQueries: 0,
        responseTime: 0,
        createdAt: new Date(date),
        ownerId: email,
      },
    });
    return NextResponse.json(
      { message: "Domain registered!" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error while registering domain :", err);
    NextResponse.json(
      { message: "Unable to register domain! Please try again later." },
      { status: 500 }
    );
  }
};
