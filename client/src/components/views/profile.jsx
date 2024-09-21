import { useState, useEffect, useContext } from "react";
import { ProfileHeader } from "../sub_components/profileComp";
import data from "../../mockData/mock-users.json";
import { PostContext } from "../../context/postContext";

function Profile() {
  const { posts } = useContext(PostContext);
  const [myAccount, setMyAccount] = useState({});
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    for (let user of data.users) {
      if (user.userId === "3") {
        setMyAccount(user);
      }
    }
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      const userPosts = posts.filter(post => post.userId === "3");
      setMyPosts(userPosts);
    }
  }, [posts]);

  return (
    <>
      <div className="user_container">
        <ProfileHeader user={myAccount}></ProfileHeader>

        <section className="user_details">
        <ul>
        {myPosts.map(post => (
          <li key={post.postId}>{post.details}</li>
        ))}
      </ul>
        </section>
      </div>
    </>
  );
}

export default Profile;
