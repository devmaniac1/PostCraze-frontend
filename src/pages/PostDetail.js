import React from "react";
import Button from "../components/Button";
import Post from "../components/Post";
import CreateComment from "../ui/CreateComment";
import Comments from "../ui/Comments";

import { useParams } from "react-router-dom";
import { usePosts } from "../contexts/PostsContext";

function PostDetail() {
  const { postId } = useParams();
  const { posts } = usePosts();
  const post = posts.find((p) => p._id === postId);

  if (!post)
    return (
      <div className="w-9/12 my-6 mx-auto md:w-6/12 text-center">
        This Post is not available
      </div>
    );

  return (
    <div className="w-full my-6 mx-auto md:w-6/12 px-4">
      <Button to="-1">{"Back"}</Button>
      <div className="mt-6 flex flex-col gap-4">
        <Post post={post} />
        <Comments comments={post.comments} />
        <CreateComment postId={postId} />
      </div>
    </div>
  );
}

export default PostDetail;
