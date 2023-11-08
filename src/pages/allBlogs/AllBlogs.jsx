// AllBlog.jsx file

import { useLoaderData } from "react-router-dom";
import Postcard from "./Postcard";
import { useState } from "react";

const AllBlogs = () => {
  const posts = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to handle category selection
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter posts based on the selected category
  const filteredPosts = selectedCategory === "All"
    ? posts
    : posts.filter(post => post.category === selectedCategory);


  return (
    <div>
      <h2 className="lg:text-2xl text-center font-semibold mb-6">
        All Blogs: {filteredPosts.length}
      </h2>

      {/* serch bar  */}
      <div className="relative h-10 w-72 min-w-[200px] mx-auto mb-6">
        <select 
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
        <option value="All">
                  All
                </option>
        <option value="Adventures and Travels">
                  Adventures and Travels
                </option>
                
                <option value="Books and Literature">
                  Books and Literature
                </option>
                <option value="Culture and History">Culture and History</option>
                <option value="DIY Art and Crafts">DIY and Crafts</option>
                <option value="Education and Learning">
                  Education and Learning
                </option>
                <option value="Entertainment">Entertainment</option>
                <option value="Fashion and Beauty">Fashion and Beauty</option>
                <option value="Food and Cooking">Food and Cooking</option>
                <option value="Gaming">Gaming</option>
                <option value="Health, Fitness and Sports">
                  Health, Fitness and Sports
                </option>
                
                <option value="Home Decor and Interior Design">
                  Home Decor and Interior Design
                </option>
                <option value="Hobbies and Interests">
                  Hobbies and Interests
                </option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Motivation">Motivation</option>
                <option value="Nature">Nature</option>
                <option value="Others...">Others...</option>
                <option value="Pets and Animals">Pets and Animals</option>
                <option value="Photography">Photography</option>
                <option value="Product Reviews">Product Reviews</option>
                <option value="Relationships">Relationships</option>
                <option value="Science and Technology">
                  Science and Technology
                </option>
        </select>
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
         <span className="text-[0.8rem] font-semibold">Category</span> 
        </label>
      </div>
      {/* serch bar  */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Postcard key={post._id} post={post}></Postcard>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
