-- AlterTable
ALTER TABLE "client_discount" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "client_discount_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "client_training_plan" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "client_training_plan_pkey" PRIMARY KEY ("id");
