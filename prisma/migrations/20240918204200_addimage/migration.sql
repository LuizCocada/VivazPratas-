/*
  Warnings:

  - Added the required column `imageUrl` to the `categorys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "categorys" ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "imageUrl" TEXT NOT NULL;
