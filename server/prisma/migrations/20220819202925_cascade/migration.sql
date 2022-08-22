-- DropForeignKey
ALTER TABLE "client_discount" DROP CONSTRAINT "client_discount_discount_id_fkey";

-- DropForeignKey
ALTER TABLE "client_personal_trainer" DROP CONSTRAINT "client_personal_trainer_personal_trainer_id_fkey";

-- DropForeignKey
ALTER TABLE "client_training_plan" DROP CONSTRAINT "client_training_plan_training_plan_id_fkey";

-- AddForeignKey
ALTER TABLE "client_personal_trainer" ADD CONSTRAINT "client_personal_trainer_personal_trainer_id_fkey" FOREIGN KEY ("personal_trainer_id") REFERENCES "personal_trainers"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_training_plan" ADD CONSTRAINT "client_training_plan_training_plan_id_fkey" FOREIGN KEY ("training_plan_id") REFERENCES "training_plans"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_discount" ADD CONSTRAINT "client_discount_discount_id_fkey" FOREIGN KEY ("discount_id") REFERENCES "discounts"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
