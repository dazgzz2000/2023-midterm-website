/*
  Warnings:

  - You are about to drop the `USer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
Drop Table "User";
Drop Table "Post";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" BYTEA,
    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Post" (
  "id" SERIAL NOT NULL,
  "owner" TEXT,
  "text" TEXT,
    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
)
