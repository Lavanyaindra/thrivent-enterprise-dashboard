import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">TF</div>
        <div>
          <h3>Thrivent</h3>
          <span>Enterprise Dashboard</span>
        </div>
      </div>

      <nav className="nav">
        <NavLink to="/" end>Dashboard</NavLink>
        <NavLink to="/workspaces">Workspaces</NavLink>
        <NavLink to="/programs">Programs</NavLink>
        <NavLink to="/members">Members</NavLink>
        <NavLink to="/roadmap">Roadmap</NavLink>
      </nav>

      <div className="sidebar-footer">
        <p>Designer Engineer</p>
        <small>Internal Tool</small>
      </div>
    </aside>
  );
}
