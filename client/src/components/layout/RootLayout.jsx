import { NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Profile from "../views/profile";

function RootLayout() {
  const location = useLocation();
  const userId = 2;

  return (
    <div className="bg_degradado">
      <div id="rootLayout">
        <main id="main">
          {location.pathname === "/" ? <Profile></Profile> : <Outlet></Outlet>}
        </main>

        <footer id="footer">
          <nav className="menu_line smallFont bold">
            <NavLink className="capsule no_dec inverted" to="/map">
              Map
            </NavLink>
            <NavLink className="capsule no_dec inverted " to="/tags">
              Tags
            </NavLink>
            <NavLink className="capsule no_dec inverted" to="user/:userId/post/:postId">
              Posts
            </NavLink>
            <NavLink className="capsule no_dec inverted" to={`/user/${userId}`}>
              Profile
            </NavLink>
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default RootLayout;
