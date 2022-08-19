-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('MANAGER', 'EMPLOYEE', 'CLIENT', 'PERSONALTRAINER', 'UNKNOW');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('ACTIVE', 'INACTIVE', 'BLOCKED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birth_date" DATE NOT NULL,
    "role" "Roles" NOT NULL DEFAULT 'UNKNOW',
    "phone" TEXT NOT NULL,
    "CNI" TEXT NOT NULL,
    "NIF" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "training_plans" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "training_plans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "discounts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "value" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "discounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personal_trainers" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "personal_trainers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employees" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'INACTIVE',

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "manager" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "manager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client_personal_trainer" (
    "client_id" TEXT NOT NULL,
    "personal_trainer_id" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "client_training_plan" (
    "client_id" TEXT NOT NULL,
    "training_plan_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "client_discount" (
    "client_id" TEXT NOT NULL,
    "discount_id" TEXT NOT NULL
);

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

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "manager_user_id_key" ON "manager"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "client_personal_trainer_client_id_key" ON "client_personal_trainer"("client_id");

-- CreateIndex
CREATE UNIQUE INDEX "client_personal_trainer_personal_trainer_id_key" ON "client_personal_trainer"("personal_trainer_id");

-- CreateIndex
CREATE UNIQUE INDEX "client_training_plan_client_id_key" ON "client_training_plan"("client_id");

-- CreateIndex
CREATE UNIQUE INDEX "client_training_plan_training_plan_id_key" ON "client_training_plan"("training_plan_id");

-- CreateIndex
CREATE UNIQUE INDEX "client_discount_client_id_key" ON "client_discount"("client_id");

-- CreateIndex
CREATE UNIQUE INDEX "client_discount_discount_id_key" ON "client_discount"("discount_id");

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personal_trainers" ADD CONSTRAINT "personal_trainers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manager" ADD CONSTRAINT "manager_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_personal_trainer" ADD CONSTRAINT "client_personal_trainer_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_personal_trainer" ADD CONSTRAINT "client_personal_trainer_personal_trainer_id_fkey" FOREIGN KEY ("personal_trainer_id") REFERENCES "personal_trainers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_training_plan" ADD CONSTRAINT "client_training_plan_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_training_plan" ADD CONSTRAINT "client_training_plan_training_plan_id_fkey" FOREIGN KEY ("training_plan_id") REFERENCES "training_plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_discount" ADD CONSTRAINT "client_discount_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_discount" ADD CONSTRAINT "client_discount_discount_id_fkey" FOREIGN KEY ("discount_id") REFERENCES "discounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payments" ADD CONSTRAINT "payments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
