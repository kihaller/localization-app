import React, { createContext, useEffect, useState } from "react";
import { fetchPlaces, getCoordinates } from "./utils";

export const LocationContext = createContext();

const LocationContextProvider = (props) => {
  const [places, setPlaces] = useState({
    Bars: [],
    Restaurants: [],
    Gyms: [],
  });

  async function setPlacesForAddress(address) {
    //API Call 1: get coordinates: Geocoding API
    const location = await getCoordinates(address);
    //API Call 2,3,4: fetch places for coordinates: Places Search
    const restaurants = fetchPlaces(location, "restaurant");
    const bars = fetchPlaces(location, "bar");
    const gyms = fetchPlaces(location, "gym");

    setPlaces({
      Restaurants: await restaurants,
      Bars: await bars,
      Gyms: await gyms,
    });
  }

  useEffect(() => {
    setPlacesForAddress("Newport Beach");
  }, []);

  return (
    <LocationContext.Provider value={{ places, setPlacesForAddress }}>
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
