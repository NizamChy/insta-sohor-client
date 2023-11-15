// Comment.jsx file

import { useLoaderData } from "react-router-dom";
import CommentCards from "./CommentCards";


const Comment = () => {

  const comments = useLoaderData();

  return (
    <div>
      <h1 className='text-xl lg:text-2xl font-semibold text-center mb-4'>All Comments: {comments.length}</h1>

      <div className=" grid grid-cols-1 lg:grid-cols-2">
      {
        comments.map(comment => <CommentCards
        key={comment._id}
        comment={comment}></CommentCards>)
      }
      </div>


    </div>
  );
};

export default Comment;