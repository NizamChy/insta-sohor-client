// RecentBlog.jsx file 

import { useLoaderData } from "react-router-dom";
import Postcard from "../allBlogs/Postcard";

const RecentBlogs = () => {
  // Sort the posts by timestamp in descending order
  const posts = useLoaderData();
  console.log("All posts:", posts);

  const sortedPosts = posts.slice().sort((b, a) => b.timestamp - a.timestamp);
  console.log("Sorted posts:", sortedPosts);

  // Get the first 6 posts (most recent)
  const recentPosts = sortedPosts.slice(0, 6);
  console.log("Recent posts:", recentPosts);

  return (
    <div>
      <h1 className="text-3xl text-center my-10">Recent Blog Posts</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map((post) => (
          <Postcard key={post._id} post={post}></Postcard>
        ))}
      </div>
    </div>
  );
};


export default RecentBlogs;