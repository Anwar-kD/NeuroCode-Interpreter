"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
axios.get("http://localhost:8000/some-endpoint")
      .then(res => setMessage(res.data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">🧠 NeuroCode Interpreter</h1>
      <p className="mt-4 text-lg">Backend says: {message}</p>
    </div>
  );
}
