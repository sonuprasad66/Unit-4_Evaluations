import {useEffect, useState} from "react";
import Pagination from "../Components/Pagination";
import RestaurantTable from "../Components/RestaurantTable";

let getData = ({page}) => {
  return fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10`
  ).then((res) => res.json());
};

function Dashboard() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    handleFetch();
  }, [page]);

  let handleFetch = () => {
    getData({page})
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(data);
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token"></b>
        </p>
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
        <RestaurantTable data={data} />
        {/* restaurant table */}
      </div>
      <div data-testid="pagination-container">
        <Pagination
          total={10}
          current={page}
          onChange={(value) => setPage(value)}
        />
      </div>
    </div>
  );
}

export default Dashboard;
