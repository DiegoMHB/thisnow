import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { mapUtilities } from "../assets/mapUtilities";
import { divIcon } from "leaflet";
import { useNavigate } from 'react-router-dom';
import "leaflet/dist/leaflet.css";
import { useContext } from "react";
import { PostContext } from "../context/postContext";
// import { UserContext } from "../context/userContext";

const Map = () => {

  const {posts, coords} = useContext(PostContext)
  // const {setUserId} = useContext(UserContext)
  const navigate = useNavigate();

  if (!coords) {
    return <div>SPINNER</div>; //SPINNER
  }

  return (
    <MapContainer

      center={coords}
      zoom={15}
      id="map"
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
                // setUserId(post.postId);
                navigate(`/post/${post.postId}`, {replace:true})
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
