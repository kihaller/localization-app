import React, { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";

const LocationSearchField = () => {
  const { setPlacesForAddress } = useContext(LocationContext);
  const input = React.createRef();

  return (
    <div className="LocationSearchField">
      <input type="text" placeholder="Search Location" ref={input} />
      <button
        type="submit"
        onClick={() => setPlacesForAddress(input.current.value)}
      >
        Search
      </button>
    </div>
  );
};

export default LocationSearchField;
