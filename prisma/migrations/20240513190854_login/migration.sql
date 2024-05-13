/*
  Warnings:

  - You are about to drop the column `Confirm_Password` on the `Signup` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Signup_Confirm_Password_key";

-- AlterTable
ALTER TABLE "Signup" DROP COLUMN "Confirm_Password",
ALTER COLUMN "Email" DROP NOT NULL;
