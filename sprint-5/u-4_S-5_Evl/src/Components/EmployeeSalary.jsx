import React from "react";

export default function EmployeeSalary({salary}) {
  console.log(salary);
  return <div data-testid="employee-salary"> {salary} </div>;
}
