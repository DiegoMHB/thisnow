import { useContext, useEffect } from "react";
import "../../App.css";
import { UserContext } from "../../context/userContext";
import { useParams } from "react-router-dom";


export const ProfileHeader = () => {
  const {userId} = useParams();
  const { user, setUser } = useContext(UserContext);

  useEffect(()=>{
    console.log(userId)
  },[])

  return (
    <section id="user_profile">
          <img src={user.profile_picture} alt={user.profile_picture} />
          <div id="user_profile_det">
            <h2>{user.username}</h2>
            <div className="smallFontCont">
              <p className="smallFont">Member since:</p>
              <p className="smallFont bold">{user.dateLogin}</p>
            </div>
            <div className="smallFontCont">
              <p className="smallFont">Posted:</p>
              <p className="smallFont bold">{user.posts.length}</p>
            </div>
            <div className="smallFontCont">
              <p className="smallFont">(status):</p>
              <p className="smallFont">online</p>
            </div>
          </div>
        </section>

  )
}
