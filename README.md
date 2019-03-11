<!-- More needs to be added, This is just a base! -Tiana -->
# Gaard One
Gaard One is a company that sells innovative and modular products for outdoor activities such as hunting and hiking.  Being very passionate about these things, and wishing for future generations to have the same opportunity to participate in these activities, Gaard One recognized the need for access to public land, and has made it their mission to buy one square foot of land for conservation for every dollar spent on their products.  

The goal of this project is to allow customers to directly see the impact their purchase has on furthering conservation efforts.  A user with administrative permissions will be able to print QR codes to attach to product tags, which the customer will then be able to scan to view a parcel of land effectively purchased by them for conservation. 
 
#Prime Group Project
Contributors:

* Tiana Johnson
* Peng Xue Vang
* Cody Troop
* Julie Zembik
* Nicholas Heilman

#Getting Started
Before you get started, make sure you have the following software installed on your computer:

* Node.js
* PostrgeSQL
* Nodemon

From Git Hub repository `https://github.com/gaard-one/gaard-one-group-project`

* Download zip file
* un-zip file 
* in terminal `npm install`
* in terminal `npm run server`
* in terminal `npm run client`
* This will pull the project up through localhost

#Database 
 ```
 
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

 ```

 <!-- More needs to be added, This is just a base! -Tiana -->




