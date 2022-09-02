import React, {useEffect, useState} from "react";
import {DashboardData} from "../Components/DashboardData";
import Pagination from "../Components/Pagination";
import axios from "axios";
import {Button} from "@chakra-ui/react";
//{page = 1, limit = 5, orderBy = "asc"}
const getProducts = ({page = 1, limit = 10}) => {
  return axios.get(
    ` https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=${limit}`
  );
};

export const Dashboard = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    getData({page, limit});
  }, [page, limit]);

  const getData = ({page, limit}) => {
    getProducts({page, limit})
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  console.log(data);

  return (
    <div>
      <Button>Go Back</Button>
      {data?.map((elem) => (
        <DashboardData {...elem} key={elem.id} id={elem.id} />
      ))}

      <Pagination current={page} setPage={setPage} />
    </div>
  );
};
