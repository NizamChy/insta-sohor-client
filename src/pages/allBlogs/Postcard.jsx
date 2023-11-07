/* eslint-disable react/prop-types */
// Postcard.jsx file 
const Postcard = ({post}) => {
  const {
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

   // Convert the timestamp to a Date object
   const date = new Date(timestamp);

   // Format the date to "h:mm a MMM d, yyyy" (e.g., "6:05 PM Nov 7, 2023")
   const formattedDate = date.toLocaleString('en-US', {
     hour: 'numeric',
     minute: '2-digit',
     hour12: true,
     month: 'short',
     day: 'numeric',
     year: 'numeric',
   });

  return (
    <div className="m-10">
      {/* Blog Card  */}
      <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        {/* Check if image is not empty or null before rendering */}
        {image && (
          <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
            <img
              className="rounded-t-xl"
              src={image}
              alt="image"
              style={{
                height: '250px', // Adjust the height as per your requirements
                objectFit: 'cover',
              }}
            />
          </div>
        )}
        <div className="p-6">
          <h4 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {title}
          </h4>
          <p className="block mt-3 font-sans text-md antialiased font-normal leading-relaxed text-gray-700">
  {descriptionSummary.length > 70
    ? descriptionSummary.substring(0, 70) + "..."
    : descriptionSummary}
</p>

        <div className="flex justify-between mt-2">

                    {/* Details */}
<div>
<button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          <div className="flex">
          <span>Details</span>
          <span> 
                   
            <svg className="w-4 h-6 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>

          </span>
          </div>
          </button>
</div>
          {/* Details button end*/}
          {/* Wishlist button */}

          <div>
          <button type="button" className=" text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
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

            <div className="bg-blue-200 rounded px-2 py-1 text-sm font-semibold ml-1">{name}</div>

            {/* <div
              data-tooltip="author-2"
              className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
            >
              Tania Andrew
            </div> */}
          </div>
          <div className="ml-36 lg:ml-2 mt-2">
          <p className="block font-sans text-xs lg:text-sm text-blue-700 antialiased font-semibold ml-1 leading-relaxed text-inherit">
            {formattedDate}
          </p>
          </div>

          </div>



        </div>
      </div>
      {/* Blog Card end */}
    </div>
  );
};

export default Postcard;
