import { mapContext } from "./map-context";
import { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import data from "../../mock-data.json";

//this function populates geojson object, needed to display markers
//it should go only throw the posts wich coords are close to the map location
//THIS will be an apiService that fetchs from DB
function populateFeatures(posts) {
  const feat = [];

  for (let post of posts) {
    const el = {
      type: "Feature",
      properties: {
        message: post.details,
        tag: post.tag,
        iconSize: [60, 60],
      },
      geometry: {
        type: "Point",
        coordinates: [post.coordinates.longitude, post.coordinates.latitude],
      },
    };
    feat.push(el);
  }
  return feat;
}

function getTag(post) {
  return post.tag
}

export const MapProvider = ({ children }) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  const [coords, setCoords] = useState(null);
  const [features, setFeatures] = useState({});

  //accessToken
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZG1oYjE3IiwiYSI6ImNtMHA0aWM1MDAxODIya3F4Z3J4a2MwM3MifQ.tcbmHCKOV-6keYdzfY5kkw";

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
        enableHighAccuracy: true, //more precission
        timeout: 5000, //set how much is gonna wait to get the coordinades
        maximumAge: 0, //no cache
      }
    );
  }, []);

  //set and customize the map that is gonna be displayed
  useEffect(() => {
    if (!coords) return;
    //
    mapRef.current = new mapboxgl.Map({
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
      zoom: 13,
    });

    const feat = populateFeatures(data.posts);
    setFeatures(feat);

    mapRef.current.on("load", () => {
      const geojson = {
        type: "FeatureCollection",
        features: feat,
      };

      for (const marker of geojson.features) {
        const el = document.createElement("div");
        const tag = document.createElement("p");
        tag.textContent= '#' + marker.properties.tag;
        tag.style.marginTop= '40px'
        tag.style.fontWeight= 'bold'

        


        el.className = "marker";
        el.style.width = `20px`;
        el.style.height = `20px`;
        el.style.backgroundColor = "rgb(255, 0, 0)";
        el.style.backgroundSize = "cover";
        el.appendChild(tag);

        const popUp = new mapboxgl.Popup({ offset: 25 }).setHTML(
          "Construction on the Washington Monument began in 1848."
        )

        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(mapRef.current)
          .setPopup(getTag(marker))
      }
    });

    setMap(mapRef.current);

    // unmounting the component when closing
    return () => mapRef.current.remove();
  }, [coords]);

  return (
    <mapContext.Provider
      value={{
        map,
      }}
    >
      {children}
    </mapContext.Provider>
  );
};
