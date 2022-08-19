-- DropForeignKey
ALTER TABLE "client_training_plan" DROP CONSTRAINT "client_training_plan_training_plan_id_fkey";

-- AddForeignKey
ALTER TABLE "client_training_plan" ADD CONSTRAINT "client_training_plan_training_plan_id_fkey" FOREIGN KEY ("training_plan_id") REFERENCES "training_plans"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
