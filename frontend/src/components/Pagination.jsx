export default function Pagination({
    totalItems,
    itemsPerPage,
    currentPage,
    setCurrentPage
  }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    if (totalPages <= 1) return null;
  
    return (
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
  
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
  
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    );
  }
  