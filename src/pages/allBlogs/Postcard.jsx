/* eslint-disable react/prop-types */

import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// Postcard.jsx file
const Postcard = ({ post }) => {

  
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

  const [addedToWishlist, setAddedToWishlist] = useState(false);

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

  const handleAddToWishlist = () => {

    // console.log(post);

      // const data = {...post};
      // delete data._id;

    // send data to server
    fetch("https://insta-sohor-server.vercel.app/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          setAddedToWishlist(true); // Mark as added to cart
          Swal.fire({
            title: "Success!",
            html: "Post added to Wishlist successfully! &#x2705;",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
    }

  

  return (
    <div className="m-10 mt-0">
      {/* Blog Card  */}
      <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        {/* Check if image is not empty or null before rendering */}
        {image && (
          <div className="relative m-0 overflow-hidden text-gray-800 bg-transparent rounded-none shadow-none bg-clip-border">
            <img
              className="rounded-t-xl"
              src={image}
              alt="image"
              style={{
                height: "250px", // Adjust the height as per your requirements
                width: "400px",
                objectFit: "cover",
              }}
            />
          </div>
        )}
        <div className="p-6">
        <h4 className="block font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        {title.length > 34 ? `${title.slice(0, 33)}...` : title}
        </h4>

          <p className="block mt-3 font-sans text-md antialiased font-normal leading-relaxed text-gray-700">
            {descriptionSummary.length > 70
              ? descriptionSummary.substring(0, 70) + "..."
              : descriptionSummary}
          </p>

          <div className="flex justify-between mt-2">
            {/* Details */}
            <div>

              <Link to={`/allposts/${_id}`}>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                <div className="flex">
                  <span>Details</span>
                  <span>
                    <svg
                      className="w-4 h-6 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </span>
                </div>
              </button>
              </Link>

            </div>
            {/* Details button end*/}

            {/* Wishlist button */}
            <div>
              <button
               onClick={handleAddToWishlist}
                type="button"
                className=" text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
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
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>
            </div>
            {/* Wishlist button end */}

          </div>
        </div>

        <div className="flex items-center justify-between p-3 -mt-4 pt-0">
          <div className="grid grid-cols-1 ">
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
            <div className="ml-14 mt-2">
              <p className=" font-sans text-xs lg:text-sm text-blue-800 font-semibold ml-1 ">
                {formattedDate}
              </p>
            </div>
          </div>
          
        </div>
        <p className="bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 text-xs mx-auto font-semibold mb-3 px-1 rounded-lg">Category : {category}</p>
      </div>
      {/* Blog Card end */}
    </div>
  );
};

export default Postcard;
