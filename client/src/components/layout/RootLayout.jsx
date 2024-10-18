import Map from "../views/map";
import Home from "../components/home";
import { NavLink, Outlet,useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function RootLayout() {
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();
  const user = useSelector((state) => state.user);

  return (
    <div className="bg_degradado">
      <div id="rootLayout">
        <main id="main">
          {location.pathname === "/" && isClicked == false ? (
            <Home setIsClicked={setIsClicked}></Home>
          ) : location.pathname === "/" && isClicked === true ? (
            <Map></Map>
          ) : (
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
            {user.isValidated ? (
              <NavLink className="capsule no_dec inverted" to="/posts">
                Posts
              </NavLink>
            ) : (
              <NavLink className="capsule no_dec inverted" to="/Reviews">
                Reviews
              </NavLink>
            )}
            {user.isValidated ? (
              <NavLink
                className="capsule no_dec inverted"
                to={`/user/${user.user._id}`}
              >
                Profile
              </NavLink>
            ) : (
              <NavLink
                className="capsule no_dec inverted"
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
