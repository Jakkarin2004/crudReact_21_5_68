const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json()); // ส่วนเพิ่มข้อมูล
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "webfood",
});

//ดึงข้อมูล
app.get("/", (req, res) => {
  const sql = "SELECT * FROM product";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

//ดึงข้อมูล categories
app.get("/categories", (req, res) => {
  const sql = "SELECT * FROM categories";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

// ดึง product ตาม category id
app.get("/products/:categoryId", (req, res) => {
  const categoryId = req.params.categoryId;
  let sql = `
    SELECT product.*, categories.name AS category_name
    FROM product 
    INNER JOIN categories ON product.categories_id = categories.id
  `;

  // ถ้าเลือกทั้งหมด (categoryId = 0 หรือว่าง) ให้ดึงทั้งหมด
  if (categoryId !== "0") {
    sql += " WHERE categories_id = ?";
  }

  db.query(sql, categoryId !== "0" ? [categoryId] : [], (err, data) => {
    if (err) return res.status(500).json({ error: err });
    return res.json(data);
  });
});



app.listen(8081, () => {
    console.log("listening");
  });