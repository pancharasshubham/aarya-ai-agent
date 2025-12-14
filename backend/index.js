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
