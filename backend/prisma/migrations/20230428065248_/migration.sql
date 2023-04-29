/*
  Warnings:

  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - Made the column `owner` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `text` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "owner" SET NOT NULL,
ALTER COLUMN "text" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "image";
