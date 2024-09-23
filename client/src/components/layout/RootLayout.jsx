import { NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import  Map from "../views/map";
import { useState } from "react";
import Home from "../sub_components/home";

function RootLayout() {
  const [clicked, setClicked] = useState(false);
  const location = useLocation();
  const userId = 2;

  return (
    <div className="bg_degradado">
      <div id="rootLayout">
        <main id="main">
          {location.pathname === "/" && clicked==false ? (
            <Home setClicked={setClicked}></Home>
          ) :
          location.pathname === "/" && clicked=== true?
          <Map></Map>:
          (
            <Outlet></Outlet>
          )}
        </main>

        <footer id="footer">
          <nav className="menu_line smallFont bold">
            <NavLink className="capsule no_dec inverted" to="/map">
              Map
            </NavLink>
            <NavLink className="capsule no_dec inverted " to="/tags">
              Tags
            </NavLink>
            <NavLink
              className="capsule no_dec inverted"
              to="user/:userId/post/:postId"
            >
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
