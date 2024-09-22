import { useSelector } from "react-redux";
import { SearchBar } from "../sub_components/searchBar";
import { useState } from "react";

function Tags() {
  const posts = useSelector((state) => state.posts.posts);
  const [search, setSearch] = useState();

  return (
    <>
      <div id="tags_view">
        <SearchBar search={search} setSearch={setSearch}></SearchBar>
        <div className="genericBox opacity7">
          <div>
            <h4 className="mgL12">Tags around you:</h4>{" "}
          </div>
          <div id="tags_list" >
            {posts.map((post) => {
              return (
                <div key={post.postId} className="capsule inverted">
                  <h4>#{post.tag}</h4>
                </div>
              );
            })}
            {posts.map((post) => {
              return (
                <div key={post.postId} className="capsule inverted">
                  <h4>#{post.tag}</h4>
                </div>
              );
            })}
          </div>
        </div>
        <div className="genericBox opacity7">
          <div>
            <h4 className="mgL12">Trends in Berlin:</h4>{" "}
          </div>
          <div id="tags_list" >
            {posts.map((post) => {
              return (
                <div key={post.postId} className="capsule inverted">
                  <h4>#{post.tag}</h4>
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
