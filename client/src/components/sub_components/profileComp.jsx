import "../../App.css";
import { useSelector } from "react-redux";
export const ProfileHeader = () => {
  
  const postUser = useSelector((state) => state.user.postUser);

  if (!postUser._id) {
    return null;
  }

  const member_since = postUser.dateLogin;
  const date = new Date(member_since);

  const formattedDate = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',  
    day: 'numeric',
    
  });
  console.log(postUser)
  

  return (
    <section id="user_profile" className="genericBox bg_blue">
      <img src={postUser.profile_picture} alt={postUser.profile_picture} />
      <div id="user_profile_det">
        <h3>{postUser.username}</h3>
        <div className="smallFontCont ">
          <p className="smallFont">Member since:</p>
          <p className="smallFont bold">{formattedDate}</p>
        </div>
        <div className="smallFontCont mgT5">
          <p className="smallFont">Posted:</p>
          <p className="smallFont bold">{postUser.posts ? postUser.posts.length : 0}</p>
        </div>
        <div className="smallFontCont mgT5">
          <p className="smallFont">(status):</p>
          <div className="inline">
            <div id="online"></div>
            <p className="smallFont">online</p>
          </div>
        </div>
      </div>
    </section>
  );
};
