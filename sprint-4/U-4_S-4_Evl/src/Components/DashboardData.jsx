import React from "react";

export const DashboardData = ({image, title, price, category}) => {
  console.log(title);
  return (
    <div
      data-testid="product-item"
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
        flexDirection: "column",
      }}
    >
      <img height="100px" src={image} />
      <b>{title}</b>
      <span>₹ {price}</span>
      <div style={{display: "flex"}}>
        <b>{category}</b>
      </div>
    </div>
  );
};
