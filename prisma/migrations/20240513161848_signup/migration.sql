-- CreateTable
CREATE TABLE "Signup" (
    "userid" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Confirm_Password" TEXT NOT NULL,

    CONSTRAINT "Signup_pkey" PRIMARY KEY ("userid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Signup_Email_key" ON "Signup"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Signup_Password_key" ON "Signup"("Password");

-- CreateIndex
CREATE UNIQUE INDEX "Signup_Confirm_Password_key" ON "Signup"("Confirm_Password");
