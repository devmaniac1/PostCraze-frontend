import { Link } from "react-router-dom";
import { getTimeDifferenceString } from "../helpers/helper";

function PostCard({ post }) {
  const timestamp = post.createdAt;
  const time = getTimeDifferenceString(timestamp);
  return (
    <Link to={`/posts/${post._id}`}>
      <div className="bg-slate-300 py-4 px-4 rounded-2xl w-full my-0 mx-auto flex flex-col gap-4">
        <p className={`font-semibold text-xl my-4 ${post.color} md:text-2xl`}>
          {post.title}
        </p>
        <p className="text-lg md:text-xl ">{post.content}</p>
        <p className="text-lg md:text-xl ">{time}</p>

        <div className="no-underline border-t-2  border-blue-900 text-xl flex items-center justify-end gap-2">
          <p>{post.comments.length}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
