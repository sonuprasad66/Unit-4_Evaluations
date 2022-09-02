import React from "react";

export default function EmployeeName({name}) {
    console.log(name)
  return <div data-testid="employee-name"> {name} </div>;
}
