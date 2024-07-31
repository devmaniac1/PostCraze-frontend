import { useEffect, useState } from "react";

function Comments({ postId }) {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`http://localhost:3000/comments/${postId}`);
        const data = await res.json();
        console.log(data);
        setComments(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchPost();
  }, [postId]);
  return (
    <div>
      {comments.length ? "" : "There are no comments yet. Bet the first to add"}
    </div>
  );
}

export default Comments;
