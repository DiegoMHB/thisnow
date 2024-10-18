import { useSelector } from "react-redux";
import { SearchBar } from "../components/searchBar";
import { useState } from "react";
import PostDetails from "../components/postDetails";

function PostList() {
  const posts = useSelector((state) => state.posts.posts);
  const [search, setSearch] = useState("");

  return (
    <>
      <div id="posts_view">
        <SearchBar search={search} setSearch={setSearch}></SearchBar>
        <div className="genericBox opacity7" id="post_list">
          <div>
            <h4 className="mgL12">Posts around you:</h4>{" "}
          </div>

          {posts.map((post) => {
            return <PostDetails key={post.post_Id} post={post}></PostDetails>;
          })}
        </div>
      </div>
    </>
  );
}

export default PostList;
