import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Map from "../pages/map";
import Landing from "../components/landing";

function RootLayout() {
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();
  const user = useSelector((state) => state.user);

  return (
    <div id="background">
      <div id="rootLayout">
        <main id="main">
          {location.pathname === "/" && isClicked == false ? (
            <Landing setIsClicked={setIsClicked}></Landing>
          ) : location.pathname === "/" && isClicked === true ? (
            <Map></Map>
          ) : (
            <Outlet></Outlet>
          )}
        </main>

        <footer id="footer">
          <nav className="menu_line smallFont bold">
            <NavLink className="B_small_inv" to="/map">
              Map
            </NavLink>
            <NavLink className="B_small_inv " to="/tags">
              Tags
            </NavLink>
            {user.isValidated ? (
              <NavLink className="B_small_inv" to="/posts">
                Posts
              </NavLink>
            ) : (
              <NavLink className="B_small_inv" to="/Reviews">
                Reviews
              </NavLink>
            )}
            {user.isValidated ? (
              <NavLink className="B_small_inv" to={`/user/${user.user._id}`}>
                Profile
              </NavLink>
            ) : (
              <NavLink
                className="B_small_inv"
                onClick={() => setIsClicked(false)}
                to={`/`}
              >
                Home
              </NavLink>
            )}
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default RootLayout;
