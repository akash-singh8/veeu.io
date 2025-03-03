import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

import { prisma } from "@/lib/prisma";

export const DELETE = async (request: NextRequest) => {
  try {
    const { userId } = getAuth(request);
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { domain, id } = await request.json();
    if (!domain || !id) {
      return NextResponse.json(
        { message: "Invalid request! Include domain and id" },
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
        { message: "The domain doesn't belong to you!" },
        { status: 403 }
      );
    }

    await prisma.record.delete({ where: { id } });
    return NextResponse.json(
      { message: "Record deleted successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error while deleting record :", err);
    NextResponse.json(
      { message: "Unable to delete record! Please try again later." },
      { status: 500 }
    );
  }
};
