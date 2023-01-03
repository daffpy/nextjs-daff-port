-- CreateTable
CREATE TABLE "guestbook" (
    "id" BIGSERIAL NOT NULL,
    "email" VARCHAR(256) NOT NULL,
    "body" VARCHAR(250) NOT NULL,
    "created_by" VARCHAR(256) NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "guestbook_pkey" PRIMARY KEY ("id")
);
