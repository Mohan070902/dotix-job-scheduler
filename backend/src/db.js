console.log("🟡 db.js file loaded");

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection error:");
    console.error(err.message);
    return;
  }
  console.log("✅ MySQL Connected");
});

module.exports = connection;
