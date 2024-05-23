// let map: google.maps.Map;
// async function initMap(): Promise<void> {

//   const { Map } = await google.maps.importLibrary("maps");
//   map = new Map(document.getElementById("map") as HTMLElement, {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// initMap();
// import { Loader } from "@googlemaps/js-api-loader";

export const googleMaps = function () {
  // let map: google.maps.Map;
  // const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };

  // function initMap(): void {
  //   map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
  //     center,
  //     zoom: 8,
  //   });
  // }

  // initMap();

  // const loader = new Loader({
  //   apiKey: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
  //   version: "weekly",
  // });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let map: google.maps.Map;
const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center,
    zoom: 8,
  });
}
  initMap();
};
