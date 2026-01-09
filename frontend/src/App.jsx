import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Workspaces from "./pages/Workspaces";
import Programs from "./pages/Programs";
import Members from "./pages/Members";
import Roadmap from "./pages/Roadmap";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/workspaces" element={<Workspaces />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/members" element={<Members />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
