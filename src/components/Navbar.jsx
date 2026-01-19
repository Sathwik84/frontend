import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "btn active" : "btn";

  return (
    <div className="navbar">
      <div className="nav-left">
        <button className={isActive("/dashboard")} onClick={() => navigate("/dashboard")}>
          Dashboard
        </button>
        <button className={isActive("/analytics")} onClick={() => navigate("/analytics")}>
          Analytics
        </button>
        <button className={isActive("/history")} onClick={() => navigate("/history")}>
          History
        </button>
      </div>

      <div className="nav-center">
        Sign Language to Text & Voice
      </div>

      <div className="nav-right">
        <ThemeToggle />
      </div>
    </div>
  );
}
