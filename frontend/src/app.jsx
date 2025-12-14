import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="w-full max-w-xl p-6 space-y-4">
        <h1 className="text-3xl font-bold">A.A.R.Y.A 2.0</h1>
        <p className="text-slate-400">
          Autonomous AI Emergency Response Agent
        </p>

        <textarea
          className="w-full p-3 rounded bg-slate-800"
          rows={4}
          placeholder="Describe your emergency..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className="w-full bg-red-600 py-2 rounded">
          Send Emergency
        </button>
      </div>
    </div>
  );
}
