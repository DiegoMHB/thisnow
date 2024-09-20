import "../App.css";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../context/postContext";
import { useParams } from "react-router-dom";
import { ProfileHeader } from "./sub_components/profileComp";

function Post() {

  const {posts} = useContext(PostContext);
  const [post, setPost] = useState([])
  const { postId,userId } = useParams();
  

  useEffect(() => {
    const filteredPosts = posts.filter(p => p.postId === postId);
    setPost(filteredPosts[0] || null);
  }, [postId, posts]);


  return (
    <>
      <ProfileHeader></ProfileHeader>
      
        <div id="post_details">
          <h2>{post.tag}</h2>
            <p>{post.details}</p>
          <p>status</p>
        </div>
    </>
  );
}

export default Post;
