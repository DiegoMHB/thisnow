import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Map from "./components/map";
import Post from "./components/post";
// import Post from "./components/post";

function App() {
  return (
    <>
      <div id="gl_container">
        <Router>
          <Routes>
            <Route path='/map' element={<Map/>} />
            <Route path='/post' element={<Post/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
