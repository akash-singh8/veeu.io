import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

import { prisma } from "@/lib/prisma";

export const POST = async (request: NextRequest) => {
  try {
    const { userId } = getAuth(request);
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { type, name, value, domain } = await request.json();
    if (
      !type ||
      !["A", "AAAA", "CNAME", "MX", "TXT"].includes(type) ||
      !name ||
      !value ||
      !domain
    ) {
      return NextResponse.json(
        { message: "Invalid request!" },
        { status: 400 }
      );
    }

    // verify domain ownership
    const domainOwnership = await prisma.domain.findUnique({
      where: { domain, ownerId: userId },
      select: { domain: true },
    });

    if (!domainOwnership) {
      return NextResponse.json(
        { message: "The domain doesn't belongs to you!" },
        { status: 403 }
      );
    }

    const newRecord = await prisma.record.create({
      data: {
        name,
        type,
        value,
        domainId: domain,
      },
      select: { id: true },
    });

    return NextResponse.json(
      { recordId: newRecord.id, message: "Record added!" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error while adding record :", err);
    NextResponse.json(
      { message: "Unable to add record! Please try again later." },
      { status: 500 }
    );
  }
};
