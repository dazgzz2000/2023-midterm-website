/*
  Warnings:

  - You are about to drop the `USer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "USer";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
