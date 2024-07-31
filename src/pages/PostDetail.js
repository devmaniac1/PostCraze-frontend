import React from "react";
import Button from "../components/Button";
import Post from "../components/Post";
import CreateComment from "../components/CreateComment";

function PostDetail({ match }) {
  return (
    <div className="main-container">
      <Button to="-1">{"Back"}</Button>
      <div className="post-container">
        <Post />
        <CreateComment />
      </div>
    </div>
  );
}

export default PostDetail;
