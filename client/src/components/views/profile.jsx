/* eslint-disable react/no-unescaped-entities */
import { ProfileHeader } from "../sub_components/profileComp";
import { useSelector } from "react-redux";


function Profile() {

  const user = useSelector((state) => state.user.user);
  const posts = useSelector((state) => state.posts.posts);

  const userPosts = posts.filter((post) => post.userId === user.userId);

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
              <div  className="capsule_big bg_blue" key={post.postId}>
                <p className='smallFont bold'>{post.date}</p>
                <p >"{post.details}"</p>
              </div>
            ))}
        </section>
        <div className="menu_line center">
          <button className="capsule_big inverted ">CREATE A NEW POST!</button>
        </div>
    </>
  );
}

export default Profile;
