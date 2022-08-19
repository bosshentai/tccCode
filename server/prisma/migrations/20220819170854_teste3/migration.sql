-- DropForeignKey
ALTER TABLE "client_personal_trainer" DROP CONSTRAINT "client_personal_trainer_client_id_fkey";

-- DropForeignKey
ALTER TABLE "client_personal_trainer" DROP CONSTRAINT "client_personal_trainer_personal_trainer_id_fkey";

-- AddForeignKey
ALTER TABLE "client_personal_trainer" ADD CONSTRAINT "client_personal_trainer_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_personal_trainer" ADD CONSTRAINT "client_personal_trainer_personal_trainer_id_fkey" FOREIGN KEY ("personal_trainer_id") REFERENCES "personal_trainers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
