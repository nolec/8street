import mysql from "mysql";
import mongoose from "mongoose";
import config from "./config/key";

// const db = mysql.createPool(config.db);
mongoose.connect(config.mongoURL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

export default db;
