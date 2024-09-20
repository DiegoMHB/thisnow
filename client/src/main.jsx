import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { UserProvider } from "./context/userProvider.jsx";
import {PostProvider} from "./context/postProvider.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <UserProvider> */}
      <PostProvider>
        <App />
      </PostProvider>
    {/* </UserProvider> */}
  </StrictMode>
);
