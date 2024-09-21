import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileHeader } from "../sub_components/profileComp";
import  PostDetails  from "../sub_components/postDetails";
import { UserContext } from "../../context/userContext";
import { PostContext } from "../../context/postContext";


function Post() {
  const {posts} = useContext(PostContext);
  const {setId,user} = useContext(UserContext)
  const [post, setPost] = useState([])
  const { postId, userId } = useParams();


  useEffect(() => {
    const filteredPosts = posts.filter(p => p.postId === postId);
    setPost(filteredPosts[0] || null);
    setId(userId);
  }, [postId, posts]);

  return (
    <>
      <ProfileHeader user={user}></ProfileHeader>
      <p className="smallFont bold mg">One post is active:</p>
      <PostDetails post={post}></PostDetails>
    </>
  );
}

export default Post;
