import "../App.css";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../context/postContext";
import { useParams } from "react-router-dom";


function Post() {

  const {posts} = useContext(PostContext);
  const [post, setPost] = useState([])
  const { postId } = useParams();

  useEffect(() => {
    const filteredPosts = posts.filter(p => p.postId === postId);
    setPost(filteredPosts[0] || null);
  }, [postId, posts]);

  console.log(post.profile_picture);


  return (
    <>
      <div id="post_container">
        <div id="post_profile">
          <div id="post_pic">
            <img src={post.profile_picture} alt={post.profile_picture} />
          </div>
          <div id="post_profile_det">
            <h2>{post.username}</h2>
            <p>(status): online</p>
          </div>
        </div>
        <div id="post_details">
          <h2>{post.tag}</h2>
            <p>{post.details}</p>
          <p>status</p>
        </div>
      </div>
    </>
  );
}

export default Post;
