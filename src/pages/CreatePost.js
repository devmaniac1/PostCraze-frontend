import React, { useState } from "react";
import Button from "../components/Button";
import { Form } from "react-router-dom";
import { usePosts } from "./../contexts/PostsContext";

const CreatePost = () => {
  const { updatePost } = usePosts();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("text-red-900");

  function handleReset() {
    setTitle("");
    setContent("");
    setColor("text-red-900");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title && !content) return;
    const post = {
      title,
      content,
      color,
    };
    const res = await fetch("https://postcraze.vercel.app/posts/createPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    const data = await res.json();
    console.log(data);
    updatePost();
  };

  return (
    <div className="w-full px-4 mx-auto my-6 md:w-6/12">
      <Button to="-1">{"Back"}</Button>
      <h2 className="text-center font-semibold mt-6 ">Create a New Post</h2>
      <div className="flex flex-col gap-4 mt-6">
        <Form method="POST" className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <label className="w-24">Title</label>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="border border-gray-300 rounded-md p-2 w-full focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              type="text"
              required
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="w-24">Content</label>
            <textarea
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              className="border border-gray-300 rounded-md p-2 w-full focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              type="text"
              name="customer"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="">Title Color</label>
            <div className="flex gap-6">
              <div
                className={`cursor-pointer bg-red-900 h-10 w-10 ${
                  color === "text-red-900" ? "border-4 border-blue-500" : ""
                } sm:h-12 sm:w-12 md:h-16 md:w-16`}
                onClick={() => setColor("text-red-900")}
              />
              <div
                className={`cursor-pointer bg-stone-900 h-10 w-10 ${
                  color === "text-stone-900" ? "border-4 border-blue-500" : ""
                } sm:h-12 sm:w-12 md:h-16 md:w-16`}
                onClick={() => setColor("text-stone-900")}
              />
              <div
                className={`cursor-pointer bg-green-900 h-10 w-10 ${
                  color === "text-green-900" ? "border-4 border-blue-500" : ""
                } sm:h-12 sm:w-12 md:h-16 md:w-16`}
                onClick={() => setColor("text-green-900")}
              />
            </div>
          </div>
        </Form>
        <div onClick={handleSubmit} className="flex w-full gap-4">
          <button
            className="w-6/12 bg-slate-700/20 rounded-full text-xs sm:text-base"
            onClick={(e) => {
              e.stopPropagation();
              handleReset();
            }}
          >
            Reset
          </button>
          <Button to="/" className="w-6/12 text-xs sm:text-base">
            {"Create Post"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
