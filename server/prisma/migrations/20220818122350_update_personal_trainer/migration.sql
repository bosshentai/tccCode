-- DropForeignKey
ALTER TABLE "client_personal_trainer" DROP CONSTRAINT "client_personal_trainer_client_id_fkey";

-- DropForeignKey
ALTER TABLE "client_personal_trainer" DROP CONSTRAINT "client_personal_trainer_personal_trainer_id_fkey";

-- AlterTable
ALTER TABLE "client_discount" ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "client_personal_trainer" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "client_personal_trainer_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "client_training_plan" ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "client_personal_trainer" ADD CONSTRAINT "client_personal_trainer_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_personal_trainer" ADD CONSTRAINT "client_personal_trainer_personal_trainer_id_fkey" FOREIGN KEY ("personal_trainer_id") REFERENCES "personal_trainers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
