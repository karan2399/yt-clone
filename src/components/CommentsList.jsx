import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments?.map((comment, index) => {
    return (
      <div key={index}>
        <Comment key={index} data={comment} />
        <div className="ml-5 mt-3 border-l-2 border-slate-200 pl-4">
          <CommentsList comments={comment.replies} />
        </div>
      </div>
    );
  });
};

export default CommentsList;
