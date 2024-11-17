import "./App.css";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/login";
import Map from "./pages/map";
import NewPost from "./pages/createPost";
import Post from "./pages/post";
import PostList from "./pages/postList";
import Profile from "./pages/profile";
import Reviews from "./pages/reviews";
import RootLayout from "./layout/RootLayout";
import Signin from "./pages/singin";
import Tags from "./pages/tags";


console.log(import.meta.env.VITE_API_KEY);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/login" element={<Login />} />
      <Route path="/map" element={<Map />} />
      <Route path="/newpost" element={<NewPost />} />
      <Route path="/posts" element={<PostList />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="user/:userId" element={<Profile />} />
      <Route path="/user/:userId/post/:postId" element={<Post />} />
      <Route path="/tags" element={<Tags />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
