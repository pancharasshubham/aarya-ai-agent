import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "A.A.R.Y.A backend running" });
});

app.post("/analyze", (req, res) => {
  const { message } = req.body;

  res.json({
    intent: "unknown",
    severity: "unknown",
    confidence: 0
  });
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Backend running on port ${PORT}`)
);

app.post("/analyze", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message required" });
  }

  const text = message.toLowerCase();

  let intent = "unknown";
  let severity = "low";
  let confidence = 0.4;
  let reason = "No strong emergency signal detected";

  if (
    text.includes("follow") ||
    text.includes("scared") ||
    text.includes("threat")
  ) {
    intent = "personal_threat";
    severity = "high";
    confidence = 0.88;
    reason = "Language indicates personal danger or fear";
  } else if (
    text.includes("injured") ||
    text.includes("accident")
  ) {
    intent = "medical_emergency";
    severity = "medium";
    confidence = 0.75;
    reason = "Possible injury detected";
  }

  res.json({ intent, severity, confidence, reason });
});
