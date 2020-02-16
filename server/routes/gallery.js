import express from "express";
import db from "../db";

const gallery = express.Router();

gallery.get("/all", async (req, res) => {
  const sql = "select * from press";
  try {
    db.getConnection((err, con) => {
      if (err) {
        con.release();
        throw err;
      }
      con.query(sql, (err, rows, fields) => {
        if (err) {
          con.release();
          throw err;
        }
        con.release();
        res.send(rows);
      });
    });
  } catch (error) {
    return res.status(501).json({ message: "Server Problem in ALL" });
  }
});

export default gallery;
