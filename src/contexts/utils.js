const google = window.google;

const SERVICE = new google.maps.places.PlacesService(
  document.createElement("div")
);

const GEOCODER = new google.maps.Geocoder();

export function fetchPlaces(location, type) {
  // const location = new google.maps.LatLng(latitude, longitude);

  let request = {
    location: location,
    radius: "2000",
    type: [type],
  };

  return new Promise((resolve, reject) => {
    SERVICE.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        resolve(
          results.slice(0, 5).map((place) => {
            return {
              name: place.name,
              address: place.vicinity,
              rating: place.rating,
              imgUrl: place.photos
                ? place.photos[0].getUrl({ maxWidth: 300, maxHeight: 300 })
                : null,
            };
          })
        );
      } else {
        reject(status);
      }
    });
  });
}

export function getCoordinates(address) {
  return new Promise((resolve, reject) => {
    GEOCODER.geocode({ address }, (results, status) => {
      if (status === "OK") {
        resolve(results[0].geometry.location);
      } else {
        reject(status);
      }
    });
  });
}
