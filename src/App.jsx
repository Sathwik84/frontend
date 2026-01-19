import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import History from "./pages/History";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Dashboard />} />

        {/* App pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}
