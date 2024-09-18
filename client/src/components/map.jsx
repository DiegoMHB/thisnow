import { useContext } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import { mapContext } from "../context/map/map-context";

function Map({children}) {

  const {map} = useContext(mapContext)

  return (
    <>
      <div>
        <div id="map"></div>
      </div>
    </>
  );
}

export default Map;
