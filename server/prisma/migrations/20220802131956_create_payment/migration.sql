-- CreateTable
CREATE TABLE "payments" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "training_plan_name" TEXT,
    "training_plan_value" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "discount_name" TEXT,
    "discount_value" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "personal_trainer_name" TEXT,
    "personal_trainer_value" DOUBLE PRECISION NOT NULL DEFAULT 0.0,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
