import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export const GET = async (request: NextRequest) => {
  try {
    const { userId } = getAuth(request);
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        domains: {
          include: {
            records: true,
          },
        },
      },
    });

    if (user) {
      return NextResponse.json({ domains: user.domains }, { status: 200 });
    }

    return NextResponse.json({ message: "User not found!" }, { status: 404 });
  } catch (err) {
    console.error("Error while fetching user domains:", err);
    return NextResponse.json(
      { message: "Unable to fetch domains! Please try again later." },
      { status: 500 }
    );
  }
};
