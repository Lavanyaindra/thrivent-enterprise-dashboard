import "../styles/dashboard.css";

export default function StatCard({ title, value }) {
  return (
    <div className="stat-card">
      <span>{title}</span>
      <h3>{value}</h3>
    </div>
  );
}
