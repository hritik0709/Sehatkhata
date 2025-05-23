import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();


const sql_db = await mysql.createConnection({
    host: process.env.SQL_DATABASE_HOST,
    user: process.env.SQL_DATABASE_USER_NAME,
    password: process.env.SQL_DATABASE_PASSWORD,
    database: process.env.SQL_DATABASE_NAME
})

console.log(await sql_db.execute(`SHOW DATABASES`));

export default sql_db;