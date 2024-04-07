import { CDN_URL } from "../../utils/contants";

const styleResCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCart = ({ resData }) => {
  const { name, cuisines, cloudinaryImageId, avgRating } = resData?.info;
  return (
    <div className="res-card" style={styleResCard}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

export default RestaurantCart;
