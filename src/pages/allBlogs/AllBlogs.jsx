import { useLoaderData } from "react-router-dom";
import Postcard from "./Postcard";

const AllBlogs = () => {
  const posts = useLoaderData();

  return (
    <div>
      <h2 className="lg:text-2xl text-center font-semibold">
        All Blogs: {posts.length}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3">

      {
        posts.map(post => <Postcard
        key={post._id}
        post={post}
        ></Postcard>)
      }

      </div>


    </div>
  );
};

export default AllBlogs;
