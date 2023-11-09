const CommentCard = ({ comment }) => {
  const { name, photo, comment: addedComment, postTitle, timestamp, postImage } = comment;

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
    <div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
          <div className="flex gap-4">
            <img
              src={photo}
              className="rounded-lg h-20 w-20"
              alt=""
              loading="lazy"
            />
            <div className="flex flex-col w-full">
              <p className="text-xl font-semibold whitespace-nowrap truncate overflow-hidden">
                {name} <span className="grid md:flex font-normal text-base text-gray-600">was commented on this post.</span>
              </p>
              <p className="text-sm font-semibold ">Title : {postTitle}</p>
              <p className="text-gray-400 text-sm">{formattedDate}</p>
            </div>
          </div>
          <img
            src={postImage}
            className="rounded-lg w-full h-auto"
            alt=""
          />
          <p className="text-gray-500 mt-4">Comments: {addedComment}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
