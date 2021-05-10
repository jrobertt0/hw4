import 'dotenv/config.js';
import mysql from 'mysql';

const dbHost = process.env.HOST || "localhost";
const user = process.env.USER || "";
const password = process.env.PASSWD || "";

const jConexion = {
    host: dbHost,
    user: user,
    password: password,
    database: "nt",
    port: 3307
}

const con = mysql.createConnection(jConexion);

export function connectDatabase() {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Database connected!");
    });
}

export function getConnection() {
    return con;
}
