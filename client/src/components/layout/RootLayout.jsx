import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div id="rootLayout">

      <main id="main">
        <Outlet></Outlet>
      </main>

      <footer id="footer">
        <nav>
          <NavLink className="navLink" to="/map"> Map </NavLink>
          <NavLink className="navLink" to="user/:userId/post/:postId"> Post</NavLink>
          <NavLink className="navLink" to="/user/:userId"> User</NavLink>
          <p className="navLink">Tags</p>
        </nav>
      </footer>
    </div>
  );
}

export default RootLayout;
