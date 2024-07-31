import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPosts } from "../redux/actions/posts";
import { useLoaderData } from "react-router-dom";
// import { getPosts } from "../services/post";
import PostCard from "../ui/PostCard";
import Button from "../components/Button";

function Home() {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <div className="main-container">
      <Button to="/createPost">{"Create Post"}</Button>
      <div className="post-container">
        {posts.map((post) => (
          <PostCard post={post} key={post.postId} />
        ))}
      </div>
    </div>
  );
}

export async function loader() {
  const res = await fetch("http://localhost:3000/posts/getPosts");
  const data = await res.json();
  //   console.log(data);
  return data;
}

export default Home;
