import dotenv from "dotenv";
dotenv.config();
console.log("개발");
module.exports = {
  db: {
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    port: 3306,
    database: process.env.DATABASE,
    debug: true,
    multipleStatements: true
  }
};
