import { useState } from "react";
import Button from "../components/Button";
import { Form } from "react-router-dom";
import { usePosts } from "../contexts/PostsContext";

function CreateComment({ postId }) {
  const [comment, setComment] = useState("");
  const { updatePost } = usePosts();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!comment) return;
    const commentItem = {
      comment,
    };
    const res = await fetch(
      `https://postcraze.vercel.app/posts/${postId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentItem),
      }
    );

    const data = await res.json();
    console.log(data);
    updatePost();
    setComment("");
  }

  return (
    <>
      <Form method="POST" className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <label className="w-24">Comment</label>
          <textarea
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            className="border border-gray-300 rounded-md p-2 w-full focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            type="text"
            name="customer"
            required
          />
        </div>
      </Form>
      <div onClick={handleSubmit}>
        <Button to="">{"Add Comment"}</Button>
      </div>
    </>
  );
}

export default CreateComment;
