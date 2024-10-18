import { ProfileHeader } from "../components/profileComp";
import PostDetails from "../components/postDetails";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserById } from "../../features/userSlice";

function Post() {
  const { postId, userId } = useParams();
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.posts);
  const user = useSelector((state) => state.user.postUser);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = posts.find((post) => postId === post._id);
    setPost(foundPost);

    if (userId && user._id !== userId) {
      dispatch(fetchUserById(userId));
    }
  }, [postId, userId, posts, dispatch, user._id]);

  if (!post) {
    return (
      <div className="V_centered">
        <div className="capsule_big flex_center center inverted">
          <h2>No matches found!</h2>
        </div>
      </div>
    );
  }

  return (
    <>
      {user._id && <ProfileHeader user={user} />}
      <p className="smallFont bold mgL12">One post is active:</p>
      <PostDetails post={post} />
    </>
  );
}

export default Post;
