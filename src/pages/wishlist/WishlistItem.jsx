import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const WishlistItem = ({ wishlistItem, handleRemove }) => {
  const { _id,
    name,
    title,
    image,
    category,
    descriptionSummary,
    descriptionDetail,
    userPhotoURL,
    userEmail,
    timestamp, } = wishlistItem;



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
              onClick={() => handleRemove(_id)}
                type="button"
                className=" text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

              </button>
            </div>
            {/* Wishlist button end */}

          </div>
        </div>

        <div className="flex items-center justify-between p-3 -mt-4 pt-0">
          <div className="grid grid-cols-1 lg:flex">
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
            <div className="ml-36 lg:ml-0 mt-2">
              <p className="block font-sans text-xs lg:text-sm text-blue-800 antialiased font-semibold ml-1 leading-relaxed text-inherit">
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

export default WishlistItem;