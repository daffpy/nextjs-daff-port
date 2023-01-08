/*
  Warnings:

  - You are about to drop the column `email` on the `guestbook` table. All the data in the column will be lost.
  - Added the required column `discord_discriminator` to the `guestbook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discord_id` to the `guestbook` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "guestbook" DROP COLUMN "email",
ADD COLUMN     "discord_discriminator" VARCHAR(4) NOT NULL,
ADD COLUMN     "discord_id" VARCHAR(256) NOT NULL;
