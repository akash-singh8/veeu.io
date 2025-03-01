import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

import { prisma } from "@/lib/prisma";

export const POST = async (request: NextRequest) => {
  try {
    const { userId } = getAuth(request);
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { email, firstName, lastName } = await request.json();
    if (!email || !firstName) {
      return NextResponse.json(
        { message: "Invalid request! Include email and firstName." },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already registered!" },
        { status: 200 }
      );
    }

    await prisma.user.create({
      data: { id: userId, email, firstName, lastName },
      select: { id: true },
    });

    return NextResponse.json({ message: "User registered!" }, { status: 201 });
  } catch (err) {
    console.error("Error while registering new user :", err);
    return NextResponse.json(
      { message: "Unable to register new user! Please try again later." },
      { status: 500 }
    );
  }
};
