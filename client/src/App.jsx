import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Map from "./components/map";
import Post from "./components/post";
import { PostProvider } from "./context/postProvider";



function App() {
  
  return (
    <>
      <PostProvider>
        <div id="gl_container">
          <Router>
            <Routes>
              <Route path="/map" element={<Map />} />
              <Route path="/post/:postId" element={<Post />} />
            </Routes>
          </Router>
        </div>
      </PostProvider>
      
    </>
  );
}

export default App;
