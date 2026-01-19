import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AnalyticsCard from "../components/AnalyticsCard";
import AccuracyChart from "../components/AccuracyChart";

export default function Analytics() {
  return (
    <>
      <Navbar />

      <div className="page">
        <h2 className="page-title">Analytics Overview</h2>

        {/* TOP METRICS */}
        <div className="analytics-grid">
          <AnalyticsCard title="Total Gestures Detected" value="1,248" />
          <AnalyticsCard title="Average Confidence" value="0.87" />
          <AnalyticsCard title="Most Common Gesture" value="Hello" />
          <AnalyticsCard title="System Status" value="LIVE" accent="#22c55e" />
        </div>

        {/* CONFIDENCE GRAPH */}
        <div className="analytics-section">
          <h3>Recognition Confidence Trend</h3>

          <div className="chart-card">
            <AccuracyChart />
          </div>
        </div>

        {/* EXPLANATION */}
        <div className="analytics-section">
          <h3>System Insights</h3>
          <p>
            The confidence trend graph visualizes the stability of the
            sign language recognition model across multiple sessions.
            Higher confidence values indicate reliable real-time inference
            under controlled conditions.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
