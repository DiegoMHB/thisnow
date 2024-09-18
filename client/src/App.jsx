import Map from "./components/map";
import "./App.css";
import { MapProvider } from "./context/map/map-provider";

function App() {
  return (
    <>
      <div id="gl_container">
        <MapProvider>
          <Map></Map>
        </MapProvider>
      </div>
    </>
  );
}

export default App;
