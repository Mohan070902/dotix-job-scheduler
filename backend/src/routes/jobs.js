const express = require("express");
const router = express.Router();
const db = require("../db");

// CREATE JOB
router.post("/", (req, res) => {
  const { taskName, payload, priority } = req.body;

  if (!taskName || !priority) {
    return res.status(400).json({ message: "taskName and priority required" });
  }

  const sql =
    "INSERT INTO jobs (taskName, payload, priority, status) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [taskName, JSON.stringify(payload), priority, "pending"],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ message: "Job created", jobId: result.insertId });
    }
  );
});

module.exports = router;
