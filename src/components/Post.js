import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

function Post() {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`http://localhost:3000/posts/${postId}`);
        const data = await res.json();
        setPost(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchPost();
  }, [postId]);
  return (
    <div>
      {post && (
        <div>
          {post.map((postItem) => (
            <>
              <h3>{postItem.title}</h3>
              <p>{postItem.content}</p>
            </>
          ))}
          <h2>Comments</h2>
          <Comments postId={postId} />
        </div>
      )}
    </div>
  );
}

export default Post;
