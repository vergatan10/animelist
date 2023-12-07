/*
  Warnings:

  - You are about to drop the column `anime_mage` on the `collection` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `collection` DROP COLUMN `anime_mage`,
    ADD COLUMN `anime_image` VARCHAR(191) NULL;
