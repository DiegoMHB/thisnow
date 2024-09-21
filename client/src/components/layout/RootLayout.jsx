import { NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ProfileHeader } from "../sub_components/profileComp";

function RootLayout() {

  const location = useLocation();
  const userId = 2;

  return (
    <div id="rootLayout">

      <main id="main">
        {/* {location.pathname === "/" ?
          <ProfileHeader></ProfileHeader>
          : */}
          <Outlet></Outlet>
          {/* } */}
      </main>

      <footer id="footer">
        <nav>
          <NavLink className="navLink" to="/map"> Map </NavLink>
          <p className="navLink">Tags</p>
          <NavLink className="navLink" to="user/:userId/post/:postId"> Posts</NavLink>
          <NavLink className="navLink" to={`/user/${userId}`}> My Profile</NavLink>
        </nav>
      </footer>
    </div>
  );
}

export default RootLayout;
