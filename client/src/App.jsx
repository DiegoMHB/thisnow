import "./App.css";
import {  Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Profile from "./components/views/profile";
import Map from "./components/views/map";
import Post from "./components/views/post";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route path='user/:userId' element={<Profile/>}/>
      <Route path='/map' element={<Map/>}/>
      <Route path='/user/:userId/post/:postId' element={<Post/>}/>
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
