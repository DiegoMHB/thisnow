/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import { ProfileHeader } from "../sub_components/profileComp";
import { useSelector } from "react-redux";


function Profile() {

  const user = useSelector((state) => state.user.user);
  const posts = useSelector((state) => state.posts.posts);

  const userPosts = posts.filter((post) => user.user_id === post._id);

  return (
    <>
        <ProfileHeader ></ProfileHeader>

        <div className="menu_line smallFont bold">
          <div className="capsule inverted"> <p>Searchs</p></div>
          <div className="capsule inverted"><p>Friends</p></div>
          <div className="capsule inverted"><p>Your Account</p></div>
        </div>

        <section className="box_post">
          <p className='smallFont bold'>Your last posts:</p>
            {userPosts.map((post) => (
              <div  className="capsule_big bg_blue" key={post.post_id}>
                <p className='smallFont bold'>{post.date}</p>
                <p >"{post.details}"</p>
              </div>
            ))}
        </section>
        <div className="menu_line center">
          <NavLink className="capsule_big inverted no_dec" to="/newpost">CREATE A NEW POST</NavLink>

        </div>
    </>
  );
}

export default Profile;
