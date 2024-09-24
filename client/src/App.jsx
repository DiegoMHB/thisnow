import "./App.css";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./components/views/login";
import Map from "./components/views/map";
import NewPost from "./components/views/createPost";
import Post from "./components/views/post";
import Profile from "./components/views/profile";
import RootLayout from "./components/layout/RootLayout";
import Signin from "./components/views/singin";
import Tags from "./components/views/tags";
import PostList from "./components/views/postList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>

      <Route path="/login" element={<Login />} />
      <Route path="/map" element={<Map />} />
      <Route path="/newpost" element={<NewPost />} />
      <Route path="/user/:userId/post/:postId" element={<Post />} />
      <Route path="/posts" element={<PostList />} />
      <Route path="user/:userId" element={<Profile />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/tags" element={<Tags />} />

    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
