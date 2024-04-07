import { useState } from "react";

import RestaurantCart from "./RestaurantCart";
import restaurants from "../../utils/mockData";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(restaurants);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterRestaurants = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filterRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCart
            resData={restaurant}
            key={`res-${restaurant.info.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
