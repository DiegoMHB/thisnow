import { useContext } from "react";
import "../App.css";
import { UserContext } from "../context/userContext";
import { ProfileHeader } from "./sub_components/profileComp";

function Profile() {
  const { user } = useContext(UserContext);


  return (
    <>
      <div className="user_container">
    <ProfileHeader></ProfileHeader>
        

        <section className="user_details">
          <h3>{user.tag}</h3>
          <p>{user.details}</p>
          <p>{user.details}</p>
          <p>status</p>
        </section>
        
      </div>
    </>
  );
}

export default Profile;
