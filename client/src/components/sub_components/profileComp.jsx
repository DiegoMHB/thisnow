import "../../App.css";

export const ProfileHeader = ({ user }) => {
  // const formattedDate = user.date.date.toLocaleDateString();
  // console.log(formattedDate)

  return (
    <section id="user_profile" className="genericBox bg_blue">
      <img src={user.profile_picture} alt={user.profile_picture} />
      <div id="user_profile_det">
        <h3>{user.username}</h3>
        <div className="smallFontCont ">
          <p className="smallFont">Member since:</p>
          <p className="smallFont bold">{user.dateLogin}</p>
        </div>
        <div className="smallFontCont mgT5">
          <p className="smallFont">Posted:</p>
          <p className="smallFont bold">{user.posts ? user.posts.length : 0}</p>
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
