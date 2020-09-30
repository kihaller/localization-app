import React from "react";
import placeholderImg from "../images/placeholder.jpg";

const Place = ({ place }) => {
  return (
    <div className="Place">
      <img
        src={place.imgUrl ? place.imgUrl : placeholderImg}
        alt={place.name}
      />
      <div>
        <h3 className="place-heading">{place.name}</h3>
        <p>{place.rating} Stars</p>
        <p>{place.address}</p>
      </div>
    </div>
  );
};

export default Place;
