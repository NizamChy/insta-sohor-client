import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
  const post = useLoaderData();

  const {
    _id,
    name,
    title,
    image,
    category,
    descriptionSummary,
    descriptionDetail,
    userPhotoURL,
    userEmail,
    timestamp,
  } = post;

  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="lg:flex max-w-screen-xl mx-auto p-4">
      {/* Left side with the blog image */}
      <div className="w-full lg:w-1/2 p-4">
        <img src={image} alt="Blog Image" className="mx-auto lg:ml-0 rounded-lg" />
      </div>

      {/* Right side with blog details and comment section */}

      <div className="w-full lg:w-1/2 p-4">
              {/* profile pic and name  */}
      <div className="flex items-center ">
              {/* <img
              alt="user photo url"
              src={userPhotoURL}
              className="relative inline-block object-cover object-center border-2 border-white rounded-full h-9 w-9 "
              data-tooltip-target="author-2"
            /> */}

              {/* if no photo  */}
              {userPhotoURL ? (
                <img
                  alt="user photo url"
                  src={userPhotoURL}
                  className="relative inline-block object-cover object-center border-2 border-white rounded-full h-9 w-9"
                  data-tooltip-target="author-2"
                />
              ) : (
                <img
                  src="/images/profile3.png"
                  alt="Default Avatar"
                  className="relative inline-block object-cover object-center border-2 border-white rounded-full h-9 w-9"
                  data-tooltip-target="author-2"
                />
              )}
              {/* if no photo  */}

              <div className="bg-blue-200 rounded px-2 py-1 text-sm font-semibold ml-1">
                {name}
              </div>

              {/* <div
              data-tooltip="author-2"
              className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
            >
              Tania Andrew
            </div> */}
            </div>
      {/* profile pic and name  */}
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="text-gray-500 mb-4"><span className='font-bold'>Summary: </span> {descriptionSummary}</p>
        <p className="text-gray-800 mb-4"><span className='font-semibold'>Description: </span> {descriptionDetail}</p>

        <div className='flex flex-col lg:flex-row lg:justify-between mb-4'>
          <p className="bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 px-2 rounded-lg">Category: {category}</p>
          <p className="text-blue-800 mt-2 lg:mt-0">Date: {formattedDate}</p>
        </div>

        <hr className="my-4" />

        <h2 className="text-xl font-bold">Comment</h2>
        <div className="mb-4">
          <textarea
            className='border-2 w-full lg:w-3/4 p-2'
            rows="4"
            placeholder="Add your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <br />
          <button
            className="bg-blue-500 text-white p-2 rounded mt-2"
            onClick={handleAddComment}
          >
            Add Comment
          </button>
        </div>

        {comments.map((comment, index) => (
          <div key={index} className="bg-gray-100 p-2 my-2 rounded">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetail;
