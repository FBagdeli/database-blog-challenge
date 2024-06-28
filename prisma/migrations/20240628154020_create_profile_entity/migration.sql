-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "picture" TEXT,
    "bio" VARCHAR(120),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);
