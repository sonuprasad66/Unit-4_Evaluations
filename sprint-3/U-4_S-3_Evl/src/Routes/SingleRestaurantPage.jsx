import {useEffect} from "react";

let getData = ({page}) => {
  return fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=10`
  ).then((res) => res.json());
};

function SingleRestaurantPage() {
  useEffect(() => {
    handleFetch();
  });

  let handleFetch = () => {
    getData({page})
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div data-testid="restaurant-container">
      <div>
        <h3 data-testid="restaurant-name"></h3>
      </div>
      <div data-testid="restaurant-type">Type:</div>
      <div data-testid="restaurant-rating">Rating:</div>
      <div data-testid="restaurant-votes">Votes:</div>
      <div data-testid="restaurant-price">Starting Price:</div>
      <div>
        <img data-testid="restaurant-image" width={"100px"} />
      </div>
    </div>
  );
}
export default SingleRestaurantPage;
