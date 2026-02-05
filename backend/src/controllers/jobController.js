const db = require("../config/db");
const triggerWebhook = require("../services/webhookService");

exports.createJob = async (req, res) => {
  const { taskName, payload, priority } = req.body;

  await db.query(
    "INSERT INTO jobs (taskName, payload, priority, status) VALUES (?, ?, ?, 'pending')",
    [taskName, JSON.stringify(payload), priority]
  );

  res.json({ message: "Job created successfully" });
};

exports.getJobs = async (req, res) => {
  const [jobs] = await db.query("SELECT * FROM jobs");
  res.json(jobs);
};

exports.getJobById = async (req, res) => {
  const [job] = await db.query(
    "SELECT * FROM jobs WHERE id=?",
    [req.params.id]
  );
  res.json(job[0]);
};

exports.runJob = async (req, res) => {
  const jobId = req.params.id;

  await db.query("UPDATE jobs SET status='running' WHERE id=?", [jobId]);

  setTimeout(async () => {
    const [rows] = await db.query("SELECT * FROM jobs WHERE id=?", [jobId]);

    await db.query("UPDATE jobs SET status='completed' WHERE id=?", [jobId]);

    await triggerWebhook(rows[0]);
  }, 3000);

  res.json({ message: "Job is running" });
};
