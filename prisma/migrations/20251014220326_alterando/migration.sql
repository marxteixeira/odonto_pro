-- AlterTable
ALTER TABLE "public"."Subscription" ALTER COLUMN "status" DROP DEFAULT,
ALTER COLUMN "status" SET DATA TYPE TEXT;
