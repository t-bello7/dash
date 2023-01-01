/*
  Warnings:

  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `image`,
    ADD COLUMN `banner_image` VARCHAR(191) NULL,
    ADD COLUMN `profile_image` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Post` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `authorId` VARCHAR(191) NOT NULL,
    `scheduleAt` DATETIME(3) NOT NULL,
    `image` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BlogTokens` (
    `id` VARCHAR(191) NOT NULL,
    `mediumToken` VARCHAR(191) NOT NULL,
    `DevtoToken` VARCHAR(191) NOT NULL,
    `hashnodeToken` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `BlogTokens_mediumToken_key`(`mediumToken`),
    UNIQUE INDEX `BlogTokens_DevtoToken_key`(`DevtoToken`),
    UNIQUE INDEX `BlogTokens_hashnodeToken_key`(`hashnodeToken`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
