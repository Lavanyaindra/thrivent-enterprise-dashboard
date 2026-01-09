import { useEffect, useState } from "react";
import { getPrograms } from "../api/api";
import Pagination from "../components/Pagination";

export default function Programs() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    getPrograms().then(setData);
  }, []);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginatedData = data.slice(start, start + ITEMS_PER_PAGE);

  return (
    <>
      <h2>Programs</h2>

      <table className="enterprise-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Budget</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.status}</td>
              <td>₹{p.budget?.toLocaleString() || "0"}</td>
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
