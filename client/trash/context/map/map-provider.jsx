
import { mapContext } from "./map-context";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import data from "../../mock-data.json";

//this function populates geojson object, needed to display markers
//it should go only throw the posts wich coords are close to the map location
//lazy load?
//THIS will be an apiService that fetchs from DB

// function populateFeatures(posts) {
//   const feat = [];

//   for (let post of posts) {
//     const el = {
//       type: "Feature",
//       properties: {
//         username: post.username,
//         details: post.details,
//         message: post.details,
//         tag: post.tag,
//         iconSize: [60, 60],
//       },
//       geometry: {
//         // type: "Point",this property i need to render
//         coordinates: [post.coordinates.longitude, post.coordinates.latitude],
//       },
//     };
//     feat.push(el);
//   }
//   return feat;
// }

export const MapProvider = ({ children }) => {


  return (
    <mapContext.Provider
      value={{
      }}
    >
      {children}
    </mapContext.Provider>
  );
};
