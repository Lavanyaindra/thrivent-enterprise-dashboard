import { useEffect, useState } from "react";
import { getWorkspaces } from "../api/api";
import Pagination from "../components/Pagination";

export default function Workspaces() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    getWorkspaces().then(setData);
  }, []);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <>
      <h2>Workspaces</h2>

      <table className="enterprise-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Owner</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((w) => (
            <tr key={w.id}>
              <td>{w.id}</td>
              <td>{w.name}</td>
              <td>{w.owner}</td>
              <td>{w.status}</td>
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
