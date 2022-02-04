import mongoose from "mongoose";
import express from "express";
import cors from "cors";

import { usersRouter } from "./routes/user"
import { mealsRouter } from "./routes/meal"
import { restaurantsRouter } from "./routes/restaurant"

import { json } from "body-parser";
import { securityService } from "./services/security";

const appPort = 3500;
const dbPort = 27017;
const dbName = "MoveoSkills"

const localConnString = `mongodb://127.0.0.1:${dbPort}/moveo_skills`;
const ATLAS_ENC_PW = "U2FsdGVkX18xFUh2x9B8B68aPYOW7/F9Q5VWiBCxsyw=";
const connString = `mongodb+srv://MikesMongo:${securityService.decryptString(ATLAS_ENC_PW)}@cluster0.ua8ff.mongodb.net/${dbName}`;

const app = express();
app.use(json());
app.use(cors());

app.use(restaurantsRouter);
app.use(mealsRouter);
app.use(usersRouter);

const db = mongoose.connection;
db.once("open", () => console.log("Connected to Mongo DB"));
db.on("error", console.error.bind("Failed to connect to MongoDB:"));
mongoose.connect(connString);
app.listen(appPort, () => console.log(`[Server Listens (port:${appPort})]`));