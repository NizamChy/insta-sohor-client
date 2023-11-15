// CommentCards.jsx file

import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const CommentCards = ({ comment, setComments }) => {


  const { user } = useContext(AuthContext);
  const {
    _id,
    name,
    commenterEmail,
    photo,
    comment: addedComment,
    postTitle,
    timestamp,
    postImage,
  } = comment;

  // Convert the timestamp to a Date object
  const date = new Date(timestamp);

  // Format the date to "h:mm a MMM d, yyyy" (e.g., "6:05 PM Nov 7, 2023")
  const formattedDate = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const canDeletePost = user && user.email === commenterEmail;

  const handleDeleteComment = (_id) => {
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

         // Update the local state by calling the setComments function
         setComments((prevComments) =>
         prevComments.filter((comment) => comment._id !== _id)
       );

        fetch(`https://insta-sohor-server.vercel.app/comment/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
             
              Swal.fire("Done!", "Comment has been deleted.", "success");
              
            }
          })
          .catch((error) => {
            console.error("Error deleting comment:", error);
            // If an error occurs during the deletion, revert the local state change
            setComments((prevComments) => [...prevComments, comment]);
            Swal.fire("Error", "Failed to delete comment.", "error");
          });
      }
    });
  };



  return (
    <div>
      <div className="flex justify-center relative top-1/3">
        <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
          <div className="relative flex gap-4">
            <img
              src={photo}
              className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
              alt=""
              loading="lazy"
            />
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between">
                <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
                  {name}
                </p>
                <a className="text-gray-500 text-xl" href="#">
                  <i className="fa-solid fa-trash"></i>
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                {/* 20 April 2022, at 14:88 PM */}
                {formattedDate}
              </p>
            </div>
          </div>
          <p className="-mt-4 text-gray-500">{addedComment}</p>



          {/* delete comment  */}

          { canDeletePost && (
                      <div className="flex justify-end">
                      <button
                        className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 text-white p-2 rounded flex"
                        onClick={() => handleDeleteComment(_id)}
                      >
                        <span>
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
          )}
          {/* delete comment  */}

          
        </div>
      </div>
    </div>
  );
};

export default CommentCards;
