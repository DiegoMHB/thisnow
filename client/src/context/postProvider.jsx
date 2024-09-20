import { useEffect, useState } from "react";
import { PostContext } from "./postContext";
import data from "../mockData/mock-posts.json";

export const PostProvider = ({ children }) => {

  const [posts, setPosts] = useState([]);
  const [coords, setCoords] = useState(null);

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
        userId: post.userId,
        postId: post.postId,
        details: post.details,
        profile_picture: post.profile_picture,
        tag: post.tag,
        geometry: {
          coordinates: [post.coordinates.latitude, post.coordinates.longitude],
        },
      };
      setPosts((prev) => [...prev, el]);
      
    }
  }, [coords]);


  return (
    <PostContext.Provider
      value={{
        posts,
        coords
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
