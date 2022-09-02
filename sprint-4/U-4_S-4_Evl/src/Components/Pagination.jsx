import {Button} from "@chakra-ui/react";

function Pagination({current, total, setPage}) {
  const prev = (
    <button
      style={{backgroundcolor: "red", border: "1px solid red", padding: "5px"}}
      disabled={current === 1}
      onClick={() => setPage((current) => current - 1)}
    >
      PREV
    </button>
  );
  //   const currentPage = <Button disabled={current}>{current}</Button>;
  const next = (
    <button
      style={{backgroundcolor: "red", border: "1px solid red", padding: "5px"}}
      disabled={current === total}
      onClick={() => setPage((current) => current + 1)}
    >
      NEXT
    </button>
  );

  let pages = new Array(8).fill(0).map((a, i) => (
    <button
      style={{backgroundcolor: "red", border: "1px solid red", padding: "5px"}}
      onClick={() => setPage(i + 1)}
      disabled={current === i + 1}
    >
      {i + 1}
    </button>
  ));

  return (
    <div>
      {prev}
      {pages}
      {next}
    </div>
  );
}

export default Pagination;
