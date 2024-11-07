import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PostDetails from "../components/PostDetails";
import { ProfileHeader } from "../components/profileComp";
import { invalidate } from "../features/userSlice";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  const posts = useSelector((state) => state.posts.posts);

  const userPosts = posts.filter((post) => user.user._id === post.user_id);

  return (
    <>
      <ProfileHeader user={user.user}></ProfileHeader>

      <div className="menu_line smallFont bold">
        <div className="capsule inverted">
          <p>Searchs</p>
        </div>
        <div className="capsule inverted">
          <p>Friends</p>
        </div>
        <div className="capsule inverted">
          <p>Your Account</p>
        </div>
      </div>

      <div className="genericBox3 inver_order" id="post_list_prof">
        {userPosts.map((post) => {
          return <PostDetails key={post._id} post={post}></PostDetails>;
        })}
      </div>

      <div className="flex_center center">
        <div className="V_centered">
          <div
            className="B_big_inverted"
            onClick={() => {
              navigate(`/newpost`, {
                replace: true,
              });
            }}
          >
            CREATE A NEW POST!!!
          </div>
          <div
            className="B_big_inverted"
            onClick={() => {
              dispatch(invalidate());
              navigate(`/`, {
                replace: true,
              });
            }}
          >
            LOG OUT
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
