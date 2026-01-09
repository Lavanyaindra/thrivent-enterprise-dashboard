import StatCard from "../components/StatCard";
import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <>
      <h2>Enterprise Overview</h2>

      <div className="dashboard-grid">
        <StatCard title="Workspaces" value="12" />
        <StatCard title="Programs" value="48" />
        <StatCard title="Members" value="186" />
        <StatCard title="Active Roadmaps" value="9" />
      </div>

      <div className="dashboard-note">
        <h4>Leadership Summary</h4>
        <p>
          This dashboard visualizes delivery readiness, financial programs,
          and cross-team alignment across Thrivent’s internal platforms.
        </p>
      </div>
    </>
  );
}
