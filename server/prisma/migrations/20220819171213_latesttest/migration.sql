-- DropForeignKey
ALTER TABLE "client_discount" DROP CONSTRAINT "client_discount_discount_id_fkey";

-- AddForeignKey
ALTER TABLE "client_discount" ADD CONSTRAINT "client_discount_discount_id_fkey" FOREIGN KEY ("discount_id") REFERENCES "discounts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
