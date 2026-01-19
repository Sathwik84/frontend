import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getSentence } from "../utils/languageMap";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/live")
      .then(res => res.json())
      .then(json => {
        if (json.gesture) {
          setHistory(h => [
            ...h,
            getSentence(json.gesture, "english")
          ]);
        }
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="page">
        <h2>Sentence History</h2>

        {history.length === 0 && <p>No history yet.</p>}

        {history.map((h, i) => (
          <div className="history-item" key={i}>
            {h}
          </div>
        ))}
      </div>
    </>
  );
}
