import { getTimeDifferenceString } from "../helpers/helper";

function Post({ post }) {
  const time = getTimeDifferenceString(post.createdAt);

  return (
    <div className={`flex flex-col gap-3 bg-slate-300 rounded-md py-1 px-2`}>
      <div className="flex justify-between flex-wrap items-center">
        <p className={`font-semibold text-xl ${post.color} md:text-2xl`}>
          {post.title}
        </p>
        <p className="text-xs md:text-base">{time}</p>
      </div>
      <p className="text-lg md:text-xl">{post.content}</p>
    </div>
  );
}

export default Post;
