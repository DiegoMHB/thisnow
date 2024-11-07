import { useSelector } from "react-redux";
import { useState } from "react";
import { SearchBar } from "../components/searchBar";

const berlinTags= ["Coding", "Love", "Clubs", "Concerts", "Art", "Taxi", "Food", "Free", "Exhibitions", "Techno", "Bookclub"]

function Tags() {
  const posts = useSelector((state) => state.posts.posts);
  const [search, setSearch] = useState("");

  return (
    <>
      <div id="tags_view">
        <SearchBar search={search} setSearch={setSearch}></SearchBar>
        <div className="genericBox opacity7">
          <div>
            <h4 className="mgL12">Tags around you:</h4>{" "}
          </div>
          <div id="tags_list">
            {posts.map((post) => {
              return (
                <div key={post._id} className="capsule inverted">
                  <h4>#{post.tag}</h4>
                </div>
              );
            })}
            <div className="capsule inverted">
                  <h4>#love</h4>
                </div>
          </div>
        </div>
        <div className="genericBox opacity7">
          <div>
            <h4 className="mgL12">Trends in Berlin:</h4>{" "}
          </div>
          <div id="tags_list">
            {berlinTags.map((tag,i) => {
              return (
                <div key={i} className="capsule inverted">
                  <h4>#{tag}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Tags;
