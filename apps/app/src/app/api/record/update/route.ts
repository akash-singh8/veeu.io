import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

import { prisma } from "@/lib/prisma";

export const PUT = async (request: NextRequest) => {
  try {
    const { userId } = getAuth(request);
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { domain, id, type, name, value } = await request.json();
    if (!domain || !id || (!type && !name && !value)) {
      return NextResponse.json(
        { message: "Invalid request! Include domain, id and field to update." },
        { status: 400 }
      );
    }

    if (type && !["A", "AAAA", "CNAME", "MX", "TXT"].includes(type)) {
      return NextResponse.json(
        { message: "Invalid record type!" },
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

    const updateData: { type?: string; name?: string; value?: string } = {};
    if (type) updateData.type = type.toUpperCase();
    if (name) updateData.name = name;
    if (value) updateData.value = value;

    await prisma.record.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(
      { message: "Record updated successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error while updating record :", err);
    NextResponse.json(
      { message: "Unable to update record! Please try again later." },
      { status: 500 }
    );
  }
};
