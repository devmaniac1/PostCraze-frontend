import { getTimeDifferenceString } from "../helpers/helper";

function CommentItem({ comment }) {
  const time = getTimeDifferenceString(comment.createdAt);
  return (
    <div className="flex justify-between items-center bg-slate-300 rounded-md py-1 px-2">
      <p className="text-sm md:text-base">{comment.comment}</p>
      <p className="text-xs md:text-sm">{time}</p>
    </div>
  );
}

export default CommentItem;
