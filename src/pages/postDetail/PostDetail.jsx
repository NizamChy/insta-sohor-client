//PostDetail.jsx file

import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { useEffect } from "react";
import CommentCards from "./CommentCards";

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

  const { user } = useContext(AuthContext);

  // ... (Previous code)

  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments for the specific post
    fetch("https://insta-sohor-server.vercel.app/comment")
      .then((res) => res.json())
      .then((data) => {
        // Filter comments based on postId equal to _id
        const postComments = data.filter((comment) => comment.postId === _id);
        setComments(postComments);
      });
  }, [_id]);

  // ... (Previous code)

  const canUpdatePost = user && user.email === userEmail;

  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const handleUpdatePost = () => {
    // Handle updating the post here
    // You can implement this function to update the post data
  };

  const handleDeletePost = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://insta-sohor-server.vercel.app/allposts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Done!", "Post has been deleted.", "success");

              setTimeout(() => {
                window.location.href = "/";
              }, 2000);
            }
          });
      }
    });
  };

  const [commentInput, setCommentInput] = useState("");

  const handleAddComment = async (event) => {
    event.preventDefault();

    if (user.email !== userEmail) {
      const form = event.target;
      const name = user.displayName;
      const commenterEmail = user.email;
      const photo = user?.photoURL;
      const postId = _id;
      const postTitle = title;
      const comment = form.comment.value;
      const postImage = image;

      const newComment = {
        name,
        commenterEmail,
        photo,
        comment,
        postId,
        postTitle,
        postImage,
        timestamp: new Date(),
      };

      console.log(newComment);

      try {
        // Send data to the server
        const response = await fetch("https://insta-sohor-server.vercel.app/comment", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newComment),
        });

        const data = await response.json();

        if (data.insertedId) {

          // Reload the page after 1 second
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          // Update the local state immediately after adding the new comment
          setComments((prevComments) => [...prevComments, newComment]);

          // Clear the comment input field
          setCommentInput("");

          // Display a success toast
          toast.success("Comment added.");
        }
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    } else {
      toast.error("Author can't comment on their own blog.");
    }
  };

  return (
    <div className="lg:flex max-w-screen-xl mx-auto p-4">
      <ToastContainer />
      {/* Left side with the blog image */}
      <div className="w-full lg:w-1/2 p-4">
        <img
          src={image}
          alt="Blog Image"
          className="mx-auto lg:ml-0 rounded-lg"
        />
      </div>

      <div className="w-full lg:w-1/2 p-4">
        {/* profile pic and name  */}
        <div className="flex items-center ">
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

          {/* <div className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 rounded px-2 py-1 text-sm font-semibold ml-1">
                {name}
              </div> */}
          <div className="bg-blue-200 rounded px-2 py-1 text-sm font-semibold ml-1">
            {name}
          </div>
        </div>
        {/* profile pic and name  */}
        <h1 className="mt-2 text-2xl font-bold mb-2">{title}</h1>
        <p className="leading-8 text-justify text-gray-600 mb-4">
          <span className="font-semibold">Summary: </span> {descriptionSummary}
        </p>
        <p className="leading-8 text-justify text-gray-800 mb-4">
          <span className="font-semibold">Description: </span>{" "}
          {descriptionDetail}
        </p>

        <div className="flex flex-col lg:flex-row lg:justify-between mb-4">
          <p className="text-center my-auto bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 px-2 rounded-lg">
            Category : {category}
          </p>
          <p className="text-blue-800 mt-2 lg:mt-0">Date: {formattedDate}</p>
        </div>

        <div className="flex justify-end gap-5">
          <div>
            {canUpdatePost && (
              <Link to={`/updateblog/${_id}`}>
                <button
                  className="hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 bg-cyan-500 text-white p-2 rounded"
                  onClick={handleUpdatePost}
                >
                  Update Post
                </button>
              </Link>
            )}
          </div>

          <div>
            {canUpdatePost && (
              <button
                className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-white p-2 rounded flex"
                onClick={() => handleDeletePost(_id)}
              >
                <span>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </span>

                <span>Delete Post </span>
              </button>
            )}
          </div>
        </div>

        <hr className="my-4" />

        <h2 className="text-xl font-bold">Comment</h2>
        <form onSubmit={handleAddComment}>
          <div className="mb-4">
            <textarea
              className="border-2 w-full lg:w-3/4 p-2"
              rows="4"
              placeholder="Add your comment..."
              name="comment"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
            />
            <br />

            <div>
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 p-2 rounded mt-2"
              >
                Add Comment
              </button>
            </div>
          </div>
        </form>

        <hr className="my-4" />

        {/* Comment Section  */}
        <div className="w-full">
          <div>
            <h2 className="text-center font-semibold text-2xl">Comments</h2>
            <br />
          </div>
          <ul>
            {comments
              .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
              .map((comment) => (
                <li key={comment._id}>
                  <CommentCards comment={comment}
                  setComments={setComments}></CommentCards>
                </li>
              ))}
          </ul>
        </div>
        {/* Comment Section  */}

        {/* {comments.map((comment, index) => (
          <div key={index} className="bg-gray-100 p-2 my-2 rounded">
            {comment}
          </div>
        ))} */}

        <div>
        <hr className="my-4" />
        </div>



        {/* See all button  */}
        {/* <div className="flex justify center">
          <Link to="/comment">
            <button className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg text-white p-2 rounded mt-2">
              See all comments
            </button>
          </Link>
        </div> */}
        {/* See all button  */}


      </div>
    </div>
  );
};

export default PostDetail;
