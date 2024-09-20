import "../App.css";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../context/postContext";
import { useParams } from "react-router-dom";
import { ProfileHeader } from "./sub_components/profileComp";
import data from "../mockData/mock-users.json";


function Post() {
  const [user, setUser] = useState({});  
  const {posts} = useContext(PostContext);
  const [post, setPost] = useState([])
  const { postId,userId } = useParams();
  
  useEffect(() => {
    for (let user of data.users) {
      if (user.userId === userId) {
        const el = {
          userId: user.userId,
          username: user.username,
          posts: user.posts,
          details: user.details,
          profile_picture: user.profile_picture,
          dateLogin: user.dateLogin
        };
        setUser(el);
      }
    }
  }, [userId])

  useEffect(() => {
    const filteredPosts = posts.filter(p => p.postId === postId);
    setPost(filteredPosts[0] || null);
  }, [postId, posts]);
  
  return (
    <>
      <ProfileHeader user={user}></ProfileHeader>
      { 
        <div id="post_details">
          <h2>{post.tag}</h2>
          <p>{post.details}</p>
          <p>status</p>
        </div>
      }
    </>
  );
}

export default Post;
