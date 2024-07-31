import { Link } from "react-router-dom";

function PostCard({ post }) {
  const timestamp = post.createdAt;
  const date = new Date(timestamp).toDateString();
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>{date}</p>

      <Link to={`/posts/${post._id}`} className="link-comment">
        View Comments
      </Link>
    </div>
  );
}

export default PostCard;
