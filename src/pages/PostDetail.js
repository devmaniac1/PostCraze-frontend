import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchPostComments, addComment } from "../redux/actions/comments";

const PostDetail = ({ match }) => {
  //   const dispatch = useDispatch();
  //   const comments = useSelector((state) => state.comments);
  //   const postId = match.params.id;

  //   useEffect(() => {
  //     dispatch(fetchPostComments(postId));
  //   }, [dispatch, postId]);

  const handleAddComment = () => {
    const content = prompt("Enter your comment");
    if (content) {
      //   dispatch(addComment({ postId, content }));
    }
  };

  return (
    <div>
      <h1>Comments</h1>
      {/* {comments.map((comment) => (
        <div key={comment._id}>
          <p>{comment.content}</p>
        </div>
      ))} */}
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

export default PostDetail;
