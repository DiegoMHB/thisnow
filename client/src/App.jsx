import "./App.css";
import {  Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom";
import Map from "./components/map";
import Post from "./components/post";
import Profile from "./components/profile";
import RootLayout from "./components/layout/RootLayout";

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







// import { PostProvider } from "./context/postProvider";
// import { useEffect, useContext } from "react";
// import { UserContext  } from "./context/userContext";

// function App() {
//   const {user} = useContext(UserContext);

//   useEffect(()=> {
//     console.log(user.userId)
//   },[])

//   return (
//     <>
//         <PostProvider>
//         {/* <div id="user_container">
//           <div>
//           <div id="user_container">
//         <div id="user_profile">
//           <div id="user_pic">
//             <img src={user.profile_picture} alt={user.profile_picture} />
//           </div>
//           <div id="user_profile_det">
//             <h2>{user.username}</h2>
//             <p>(status): online</p>
//           </div>
//         </div>
//         <div id="user_details">
//           <h2>{user.tag}</h2>
//             <p>{user.details}</p>
//           <p>status</p>
//         </div>
//       </div> */}

//           {/* </div> */}
        
       
//             <Router>
//               <Routes>
//                 <Route path="/map" element={<Map />} />
//                 <Route path="/post/:postId" element={<Post />} />
//                 {/* <Route path="/profile" element={<Profile />} /> */}
//               </Routes>
//             </Router>
//           </div>
//         </PostProvider>
//     </>
//   );
// }

export default App;
