import { useLoaderData } from "react-router-dom";
import Postcard from "../allBlogs/Postcard";

const RecentBlogs = () => {
  // Get the posts and sort them by timestamp in descending order
  const posts = useLoaderData().sort((a, b) => {
    // Convert timestamps to Date objects for comparison
    const timestampA = new Date(a.timestamp);
    const timestampB = new Date(b.timestamp);
    return timestampB - timestampA; // Sort in descending order
  });

  const recentPosts = posts.slice(0, 6);

  return (
    <div>
      <h1 className="text-2xl lg:text-3xl text-center mt-32 mb-6 lg:mb-20">Recent Blog Posts</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map((post) => (
          <Postcard key={post._id} post={post}></Postcard>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
