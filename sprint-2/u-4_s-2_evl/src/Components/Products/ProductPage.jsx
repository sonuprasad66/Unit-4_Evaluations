import React, {useEffect, useState} from "react";
import {getProducts} from "./api";
import Pagination from "./Pagination";
import ProductList from "./ProductList";

function ProductPage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(8);
  const [orderBy, setOrderBy] = useState("asc");
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    getData({page, orderBy, limit});
  }, [page, orderBy, limit]);

  const getData = ({page, orderBy, limit}) => {
    getProducts({page, orderBy, limit})
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setTotal(res.totalPages);
      })
      .catch((err) => console.log(err));
  };

  console.log(page);
  console.log(limit);
  console.log(orderBy);

  return (
    <div>
      <h1 data-testid="product-page-title">Product Page</h1>
      <button
        data-testid="low-to-high"
        onClick={() => {
          setOrderBy("asc");
        }}
      >
        Sort low to high
      </button>
      <button
        data-testid="high-to-low"
        onClick={() => {
          setOrderBy("desc");
        }}
      >
        Sort high to low
      </button>
      <div>
        <label>Per page</label>
        <select
          data-testid="limit-select"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
      <Pagination current={page} total={total} setPage={setPage} />
      {/* map products */}
      <ProductList Alldata={data} />
    </div>
  );
}

export default ProductPage;
