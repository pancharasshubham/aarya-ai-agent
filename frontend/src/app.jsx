import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const sendEmergency = async () => {
    const res = await fetch("http://localhost:5000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text }),
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="w-full max-w-xl p-6 space-y-4">
        <h1 className="text-3xl font-bold">A.A.R.Y.A 2.0</h1>

        <textarea
          className="w-full p-3 rounded bg-slate-800"
          rows={4}
          placeholder="Describe your emergency..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={sendEmergency}
          className="w-full bg-red-600 py-2 rounded"
        >
          Send Emergency
        </button>

        {result && (
          <div className="bg-slate-800 p-4 rounded">
            <p><b>Intent:</b> {result.intent}</p>
            <p><b>Severity:</b> {result.severity}</p>
            <p><b>Confidence:</b> {result.confidence}</p>
            <p><b>Reason:</b> {result.reason}</p>
          </div>
        )}
      </div>
    </div>
  );
}
