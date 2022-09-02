import React, {useEffect, useState} from "react";
import EmployeeName from "./EmployeeName";
import EmployeeSalary from "./EmployeeSalary";

export const Dashboard = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isAsc, setIsAsc] = useState(false);
  const [all, setall] = useState([]);

  const getData = ({page = 1}) => {
    let palanetData = [];
    let promises = [];
    for (let p = page; p <= 7; p++) {
      let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${p}`;

      for (let j = 0; j < 1; j++) {
        promises.push(
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              for (let i = 0; i < data.data.length; i++) {
                palanetData = palanetData.concat(data.data[i]);
              }
            })
        );
      }
    }

    return Promise.all(promises).then(() => {
      // console.log(palanetData);
      setData(palanetData);
    });
  };

  useEffect(() => {
    getData(page);
  }, []);

  useEffect(() => {
    if (!isAsc) {
      const ascdata = data.sort((a, b) => {
        if (a.salary < b.salary) return -1;
        else if (a.salary < b.salary) return 1;
        return 0;
      });

      setData(ascdata);
    } else {
      const ascdata = data.sort((a, b) => {
        if (a.salary < b.salary) return 1;
        else if (a.salary < b.salary) return -1;
        return 0;
      });

      setData(ascdata);
    }
  }, [isAsc]);

  return (
    <div>
      <button
        data-testid="sorting-btn"
        onClick={() => setIsAsc(isAsc ? false : true)}
      >
        {isAsc ? "Bottom 10 Employees" : "Top 10 Employees"}
      </button>

      <div data-testid="employee-data">
        {data?.map((elem, i) => (
          <div key={elem.id}>
            <EmployeeName name={elem.name} />
            <EmployeeSalary salary={elem.salary} />
          </div>
        ))}
      </div>
    </div>
  );
};
