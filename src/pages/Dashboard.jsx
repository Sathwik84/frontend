import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getSentence } from "../utils/languageMap";

const BACKEND = "http://localhost:5000";

export default function Dashboard() {
  const [gesture, setGesture] = useState("");
  const [confidence, setConfidence] = useState(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch(`${BACKEND}/live`);
        const json = await res.json();
        setGesture(json.gesture || "");
        setConfidence(json.confidence || 0);
      } catch {}
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const speak = () => {
    const text = getSentence(gesture, "english");
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-IN";

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <>
      <Navbar />

      <div className="page">
        <div className="dashboard-grid">

          {/* CAMERA */}
          <div className="camera-section">
            <img
              src={`${BACKEND}/video`}
              alt="Live Camera"
              className="camera-frame"
            />
          </div>

          {/* SENTENCE PANEL */}
          <div className="sentence-panel">
            <div className="sentence-row highlight">
              <span><b>English</b></span>
              <span>{getSentence(gesture, "english") || "Waiting for gesture…"}</span>
              <button className="play-btn" onClick={speak}>
                ▶
              </button>
            </div>

            <p>
              Confidence: <b>{confidence.toFixed(2)}</b>
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
