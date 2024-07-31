import Button from "./Button";

function CreateComment() {
  return (
    <>
      <form>
        <div className="form">
          <label>Your Comment: </label>
          <textarea className="input" />
        </div>
      </form>
      <Button>{"Add Comment"}</Button>
    </>
  );
}

export default CreateComment;
