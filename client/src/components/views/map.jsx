import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { divIcon } from "leaflet";
import { mapUtilities } from "../../assets/mapUtilities";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCoords } from "../../features/mapSlice";
import { SearchBar } from "../sub_components/searchBar";
import { useState } from "react";

const Map = () => {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const posts = useSelector((state) => state.posts.posts);
  const { coords, loading, error } = useSelector((state) => state.map);

  useEffect(() => {
    dispatch(getCoords());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>; // Spinner simple
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch}></SearchBar>

      <section className="flex_center center">
        <MapContainer
          center={coords}
          zoom={15}
          className="map_box generic_box center"
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
                post.coordinates[0], //
                post.coordinates[1], //
              ]}
              icon={divIcon({
                className: "marker_icon",
                html: `<div>
            <h2 class='marker_tag'>#${post.tag} </h2>
            
          </div>`,
              })}
            >
              <Popup id="popUp" className="custom-popup ">
                  <h3 className="bold">{post.username}</h3>
                  <p>{post.details}</p>
                  <button
                    className="popUp_button inverted"
                    onClick={() => {
                      navigate(`/user/${post.userId}/post/${post.postId}`, {
                        replace: true,
                      });
                    }}
                  >
                    GO TO POST
                  </button>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>
    </div>
  );
};

export default Map;
