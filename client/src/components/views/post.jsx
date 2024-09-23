import { ProfileHeader } from "../sub_components/profileComp";
import PostDetails from "../sub_components/postDetails";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../../mockData/mock-users.json";
import { useSelector } from "react-redux";

function Post() {
  const { postId, userId } = useParams();
  const posts = useSelector((state) => state.posts.posts);

  const [user, setUser] = useState({});
  const [post, setPost] = useState({});

  useEffect(() => {
    const post = posts.find((post) => postId === post.postId);
    setPost(post);
    const user = data.users.find((user) => userId === user.userId);
    setUser(user);
  }, [postId, userId, posts]);

  if (!user || !post) {
    return (
      <>
        <div className="V_centered">
          <div className="capsule_big flex_center center inverted">
            <h2> No matches found!</h2>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <ProfileHeader user={user}></ProfileHeader>
      <p className="smallFont bold mgL12">One post is active:</p>
      <PostDetails post={post} user={user}></PostDetails>
    </>
  );
}

export default Post;
