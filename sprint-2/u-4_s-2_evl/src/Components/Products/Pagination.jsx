function Pagination({current, total, setPage}) {
  const prev = (
    <button
      data-testid="prev-page"
      disabled={current === 1}
      onClick={() => setPage((current) => current - 1)}
    >
      PREV
    </button>
  );
  const currentPage = (
    <button data-testid="current-page" disabled={current}>
      {current}
    </button>
  );
  const next = (
    <button
      data-testid="next-page"
      disabled={current === total}
      onClick={() => setPage((current) => current + 1)}
    >
      NEXT
    </button>
  );
  const totalPagesElem = (
    <div>
      Total Pages: <b data-testid="total-pages">{total}</b>{" "}
    </div>
  );
  return (
    <div data-testid="pagination-container">
      {prev}
      {currentPage}
      {next}
      {totalPagesElem}
    </div>
  );
}

export default Pagination;
