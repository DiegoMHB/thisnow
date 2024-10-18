import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { divIcon } from "leaflet";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { SearchBar } from "../components/searchBar";

import { getCoords } from "../../features/mapSlice";
import { mapUtilities } from "../../assets/mapUtilities";
import { fetchPosts } from "../../features/postsSlice";

const Map = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const posts = useSelector((state) => state.posts.posts);

  const { coordinates, loading, error } = useSelector((state) => state.map);

  useEffect(() => {
    dispatch(getCoords());
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>; // Spinner!!!!
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch}></SearchBar>

      <section className="flex_center center">
        <MapContainer
          center={coordinates}
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
              key={post._id}
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
                    navigate(`/user/${post.user_id}/post/${post._id}`, {
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
