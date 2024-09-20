import "../../App.css";



export const ProfileHeader = ({user}) => {
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
          <p className="smallFont bold">{user.posts ? user.posts.length : 0}</p>
        </div>
        <div className="smallFontCont">
          <p className="smallFont">(status):</p>
          <p className="smallFont">online</p>
        </div>
      </div>
    </section>
  )
}

