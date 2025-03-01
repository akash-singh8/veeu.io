/*
  Warnings:

  - You are about to drop the column `receiverId` on the `Invite` table. All the data in the column will be lost.
  - You are about to drop the column `senderId` on the `Invite` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `receiverEmail` to the `Invite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderEmail` to the `Invite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Domain" DROP CONSTRAINT "Domain_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Invite" DROP CONSTRAINT "Invite_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "Invite" DROP CONSTRAINT "Invite_senderId_fkey";

-- AlterTable
ALTER TABLE "Invite" DROP COLUMN "receiverId",
DROP COLUMN "senderId",
ADD COLUMN     "receiverEmail" TEXT NOT NULL,
ADD COLUMN     "senderEmail" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ALTER COLUMN "lastName" DROP NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Domain" ADD CONSTRAINT "Domain_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invite" ADD CONSTRAINT "Invite_senderEmail_fkey" FOREIGN KEY ("senderEmail") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invite" ADD CONSTRAINT "Invite_receiverEmail_fkey" FOREIGN KEY ("receiverEmail") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;
