import React, { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";
import Place from "./Place";

const PlacesList = ({ type }) => {
  const { places } = useContext(LocationContext);

  return (
    <div className="PlacesList">
      <h1>Top {type}</h1>
      {places[type].map((place) => (
        <Place place={place} />
      ))}
    </div>
  );
};

export default PlacesList;
