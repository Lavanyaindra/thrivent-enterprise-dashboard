import { useEffect, useState } from "react";
import { getMembers } from "../api/api";
import Pagination from "../components/Pagination";

export default function Members() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    getMembers().then(setData);
  }, []);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <>
      <h2>Members</h2>

      <table className="enterprise-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((m) => (
            <tr key={m.id}>
              <td>{m.fullName}</td>
              <td>{m.email}</td>
              <td>{m.role}</td>
              <td>{m.status}</td>
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
