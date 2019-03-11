CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "admin" BOOLEAN DEFAULT false
);

CREATE TABLE "product_type" (
	"id" SERIAL PRIMARY KEY,
	"product_name" VARCHAR(40) UNIQUE NOT NULL,
	"cost" INTEGER NOT NULL,
	"description" VARCHAR(100)
);

CREATE TABLE "product" (
	"id" SERIAL PRIMARY KEY,
	"date-time" DATE NOT NULL DEFAULT CURRENT_DATE,
	"claimed" BOOLEAN DEFAULT false,
	"printed" BOOLEAN DEFAULT false,
	"product_type_id" INTEGER REFERENCES "product_type"
);

CREATE TABLE "plot" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INTEGER REFERENCES "person",
	"product_id" INTEGER REFERENCES "product"
);

CREATE TABLE "unit_squares" (
	"id" SERIAL PRIMARY KEY,
	"bl_corner_lat" DECIMAL,
	"bl_corner_lon" DECIMAL,
	"plot_id" INTEGER REFERENCES "plot"
);
