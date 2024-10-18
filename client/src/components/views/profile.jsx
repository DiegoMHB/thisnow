import { ProfileHeader } from "../components/profileComp";
import { useSelector } from "react-redux";
import PostDetails from "../components/postDetails";
import { NavLink } from "react-router-dom";
import { invalidate } from "../../features/userSlice";
import { useDispatch } from "react-redux";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const posts = useSelector((state) => state.posts.posts);

  const userPosts = posts.filter((post) => user.user._id === post.user_id);

  return (
    <>
      <ProfileHeader user={user.user}></ProfileHeader>

      <div className="menu_line smallFont bold">
        <div className="capsule inverted">
          {" "}
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
          <NavLink
            className="capsule_big no_dec flex_center center  inverted widthEl "
            to="/newpost"
          >
            CREATE A NEW POST!!!
          </NavLink>
          <NavLink
            className="capsule_big no_dec flex_center center  inverted widthEl"
            onClick={dispatch(invalidate())}
            to="/"
          >
            LOG OUT
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Profile;
