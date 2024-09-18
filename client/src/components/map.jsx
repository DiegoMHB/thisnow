import { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";

function Map() {
  const [map, setMap] = useState(null);
  const [coords, setCoords] = useState(null);


  //at monting the component get the position of the device:
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const res = [position.coords.longitude, position.coords.latitude];
        setCoords(res);
      },
      (error) => {
        console.error("Error al obtener la ubicación:", error);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }, []);

  //accessToken
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZG1oYjE3IiwiYSI6ImNtMHA0aWM1MDAxODIya3F4Z3J4a2MwM3MifQ.tcbmHCKOV-6keYdzfY5kkw";

  useEffect(() => {
    if (!coords) return;
    // 
    const newMap = new mapboxgl.Map({
      container: "map", // container ID
      center: coords,
      style: "mapbox://styles/mapbox/standard",
      config: {
        // Initial configuration for the Mapbox Standard style set above. By default, its ID is `basemap`.
        basemap: {
          lightPreset: "day",
          showRoadLabels: true,
          showPlaceLabels: false,
          showTransitLabels: false,
          showPointOfInterestLabels: false,
          theme: "monochrome",
          font: "Rubic",
        },
      },
      zoom: 15,
    });

    setMap(newMap);

    // Limpiar el mapa al desmontar el componente
    return () => newMap.remove();
  }, [coords]);

  return (
    <>
      <div>
        <div id="map"></div>
        </div>
        </>
  );
}



export default Map;
