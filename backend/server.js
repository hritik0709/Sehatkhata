import sql_db from "./db/sql.js";
import mongo_db from "./db/mongo.js";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.listen( process.env.PORT , () => {
    console.log(`Server is running on port ${process.env.PORT}!`);
});

app.get("/", (req, res) => {
    res.send("<p>Server is running healthy!</p>");
})

sql_db;
console.log("MYSQL database is connected!");

mongo_db;
console.log("MongoDB database is connected!");