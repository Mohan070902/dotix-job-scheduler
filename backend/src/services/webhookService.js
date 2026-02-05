const axios = require("axios");

const triggerWebhook = async (job) => {
  try {
    const response = await axios.post(process.env.WEBHOOK_URL, {
      jobId: job.id,
      taskName: job.taskName,
      priority: job.priority,
      payload: job.payload,
      completedAt: new Date(),
    });

    console.log("Webhook success:", response.status);
  } catch (error) {
    console.error("Webhook failed:", error.message);
  }
};

module.exports = triggerWebhook;
