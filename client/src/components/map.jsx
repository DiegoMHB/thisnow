import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { mapUtilities } from "../assets/mapUtilities";
import { divIcon } from "leaflet";
import data from "../mockData/mock-data.json";
import { useNavigate } from 'react-router-dom';


import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";

const Map = () => {
  const navigate = useNavigate();
  const [coords, setCoords] = useState(null);
  const [posts, setPosts] = useState([]);

  //at monting the component get the position of the device:
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const res = [position.coords.latitude, position.coords.longitude];
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

  useEffect(() => {
    setPosts([]); //Post reseting. the for loop has to be replaced by a fetch (considerating the area)
    for (let post of data.posts) {
      const el = {
        username: post.username,
        postId: post.postId,
        details: post.details,
        tag: post.tag,
        geometry: {
          coordinates: [post.coordinates.latitude, post.coordinates.longitude],
        },
      };
      setPosts((prev) => [...prev, el]);
    }
  }, [coords]);

  if (!coords) {
    return <div>SPINNER</div>; //SPINNER
  }

  return (
    <MapContainer
      center={coords}
      zoom={15}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url={mapUtilities.url}
        attribution={mapUtilities.attribution}
      />
      {posts.map((post) => (
        <Marker
          key={post.postId}
          position={[
            post.geometry.coordinates[0],
            post.geometry.coordinates[1],
          ]}
          icon={divIcon({
            className: "marker_icon",
            html: `<div>
            <h2 class='marker_tag'>${post.tag} </h2>
            
          </div>`,
          })}
        >
          <Popup>
            <div className="div">
              <h3>{post.username}</h3>
              <p>{post.details}</p>
              <button className="popUp_button" onClick={()=> {
                navigate('/post', {replace:true})
              }}
              > GO TO POST</button>
            </div>

          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
