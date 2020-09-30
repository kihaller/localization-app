import React, { useEffect, useState } from "react";
import LocationSearchField from "./components/LocationSearchField";
import PlacesList from "./components/PlacesList";

import LocationContextProvider from "./contexts/LocationContext";

function App() {
  return (
    <div className="App">
      <LocationContextProvider>
        <LocationSearchField />
        <PlacesList type="Restaurants" />
        <PlacesList type="Bars" />
        <PlacesList type="Gyms" />
      </LocationContextProvider>
    </div>
  );
}

export default App;
