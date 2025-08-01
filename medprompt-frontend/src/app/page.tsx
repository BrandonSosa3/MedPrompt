"use client";

import { useState } from "react";

export default function Home() {
  const [response, setResponse] = useState("");

  const callBackend = async () => {
    try {
      const res = await fetch("http://localhost:8000/ping");
      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      setResponse("Error connecting to backend");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">MedPrompt Test</h1>
      <button
        onClick={callBackend}
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
      >
        Call Backend
      </button>
      {response && <p className="mt-4 text-lg">{response}</p>}
    </main>
  );
}

