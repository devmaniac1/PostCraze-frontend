import React, { useState } from "react";
import Button from "../components/Button";
import { Form } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { createPost } from "../redux/actions/posts";

const CreatePost = () => {
  //   const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function submitPost(post) {}

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title && !content) return;
    const post = {
      title,
      content,
    };
    const res = await fetch("http://localhost:3000/posts/createPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    const data = await res.json();
    console.log(data);

    // dispatch(createPost({ title, content }));
  };

  return (
    <div className="main-container">
      <Button to="-1">{"Back"}</Button>
      <h2>Create a New Post</h2>
      <div className="post-container">
        <Form method="POST">
          <div className="form">
            <label className="">Title</label>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="input"
              type="text"
              name="customer"
              required
            />
          </div>
          <div className="form">
            <label className="">Content</label>
            <textarea
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              className="input"
              type="text"
              name="customer"
              required
            />
          </div>
        </Form>
        <div onClick={handleSubmit}>
          <Button to="/">{"Create Post"}</Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
