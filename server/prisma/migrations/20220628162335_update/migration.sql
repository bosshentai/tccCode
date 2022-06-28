/*
  Warnings:

  - You are about to drop the column `cni` on the `personal_trainers` table. All the data in the column will be lost.
  - You are about to drop the column `nif` on the `personal_trainers` table. All the data in the column will be lost.
  - Added the required column `CNI` to the `personal_trainers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NIF` to the `personal_trainers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "personal_trainers" DROP COLUMN "cni",
DROP COLUMN "nif",
ADD COLUMN     "CNI" TEXT NOT NULL,
ADD COLUMN     "NIF" TEXT NOT NULL;
