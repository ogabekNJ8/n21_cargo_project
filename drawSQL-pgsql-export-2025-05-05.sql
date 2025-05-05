CREATE TABLE "admin"(
    "id" BIGINT NOT NULL,
    "full_name" VARCHAR(255) NOT NULL,
    "user_name" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone_number" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "tg_link" VARCHAR(255) NOT NULL,
    "token" VARCHAR(255) NOT NULL,
    "is_creator" BOOLEAN NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "description" TEXT NOT NULL
);
ALTER TABLE
    "admin" ADD PRIMARY KEY("id");
CREATE TABLE "order"(
    "id" BIGINT NOT NULL,
    "order_unique_id" UUID NOT NULL,
    "client_id" BIGINT NOT NULL,
    "product_link" VARCHAR(255) NOT NULL,
    "quantity" BIGINT NOT NULL,
    "summa" DECIMAL(8, 2) NOT NULL,
    "currency_type_id" BIGINT NOT NULL,
    "truck" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL
);
ALTER TABLE
    "order" ADD PRIMARY KEY("id");
CREATE TABLE "status"(
    "id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL
);
ALTER TABLE
    "status" ADD PRIMARY KEY("id");
CREATE TABLE "currency_type"(
    "id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL
);
ALTER TABLE
    "currency_type" ADD PRIMARY KEY("id");
CREATE TABLE "operation"(
    "id" BIGINT NOT NULL,
    "order_id" BIGINT NOT NULL,
    "status_id" BIGINT NOT NULL,
    "operation_date" TIMESTAMP(0) WITH
        TIME zone NOT NULL,
        "admin_id" BIGINT NOT NULL,
        "description" TEXT NOT NULL
);
ALTER TABLE
    "operation" ADD PRIMARY KEY("id");
CREATE TABLE "Client"(
    "id" BIGINT NOT NULL,
    "full_name" VARCHAR(255) NOT NULL,
    "phone_number" BIGINT NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "email" BIGINT NOT NULL
);
ALTER TABLE
    "Client" ADD PRIMARY KEY("id");
ALTER TABLE
    "operation" ADD CONSTRAINT "operation_status_id_foreign" FOREIGN KEY("status_id") REFERENCES "status"("id");
ALTER TABLE
    "order" ADD CONSTRAINT "order_client_id_foreign" FOREIGN KEY("client_id") REFERENCES "Client"("id");
ALTER TABLE
    "order" ADD CONSTRAINT "order_currency_type_id_foreign" FOREIGN KEY("currency_type_id") REFERENCES "currency_type"("id");
ALTER TABLE
    "operation" ADD CONSTRAINT "operation_order_id_foreign" FOREIGN KEY("order_id") REFERENCES "order"("id");
ALTER TABLE
    "operation" ADD CONSTRAINT "operation_admin_id_foreign" FOREIGN KEY("admin_id") REFERENCES "admin"("id");