"use client";

import { useState } from "react";

export default function Chat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const ask = async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    setAnswer(data.answer);
  };

  return (
    <div className="p-6">
      <input
        className="border p-2 w-full"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button
        onClick={ask}
        className="mt-2 bg-blue-500 text-white px-4 py-2"
      >
        Ask
      </button>

      <p className="mt-4 whitespace-pre-wrap">{answer}</p>
    </div>
  );
}