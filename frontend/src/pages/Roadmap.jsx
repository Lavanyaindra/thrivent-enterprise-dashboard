import { useEffect, useState } from "react";
import { getRoadmaps } from "../api/api";
import Pagination from "../components/Pagination";

export default function Roadmap() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    getRoadmaps().then(setData);
  }, []);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <>
      <h2>Roadmap</h2>

      <table className="enterprise-table">
        <thead>
          <tr>
            <th>Program</th>
            <th>Quarter</th>
            <th>Milestone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((r) => (
            <tr key={r.id}>
              <td>{r.programId}</td>
              <td>{r.quarter}</td>
              <td>{r.milestone}</td>
              <td>
                <span className={`status ${r.readiness.toLowerCase()}`}>
                  {r.readiness}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        totalItems={data.length}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={page}
        setCurrentPage={setPage}
      />
    </>
  );
}
