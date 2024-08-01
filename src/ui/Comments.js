import CommentItem from "../components/CommentItem";

function Comments({ comments }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-medium">
        Comments {comments.length === 0 ? "" : comments.length}
      </p>
      <div className="flex flex-col gap-2">
        {comments.length !== 0
          ? comments.map((comment, index) => (
              <CommentItem comment={comment} key={index} />
            ))
          : "There are no comments yet. Bet the first to add"}
      </div>
    </div>
  );
}

export default Comments;
