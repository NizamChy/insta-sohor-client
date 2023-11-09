
import { useLoaderData } from "react-router-dom";
import CommentCard from "./CommentCard";


const Comment = () => {

  const comments = useLoaderData();

  return (
    <div>
      <h1 className='text-xl lg:text-2xl font-semibold text-center mb-4'>All Comments: {comments.length}</h1>

      <div className=" grid grid-cols-1 lg:grid-cols-2">
      {
        comments.map(comment => <CommentCard
        key={comment._id}
        comment={comment}></CommentCard>)
      }
      </div>


    </div>
  );
};

export default Comment;