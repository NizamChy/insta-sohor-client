// AllBlog.jsx file

import { useLoaderData } from "react-router-dom";
import Postcard from "./Postcard";
import { useState } from "react";

const AllBlogs = () => {
  const posts = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTitle, setSearchTitle] = useState("");

  // Function to handle category selection
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

   // Function to handle search title input
   const handleSearchTitleChange = (event) => {
    setSearchTitle(event.target.value);
  };

  // Filter posts based on the selected category
  // const filteredPosts = selectedCategory === "All"
  //   ? posts
  //   : posts.filter(post => post.category === selectedCategory);

  // Filter posts based on the selected category and search title
  const filteredPosts = posts.filter((post) => {
    const categoryMatch =
      selectedCategory === "All" || post.category === selectedCategory;
    const titleMatch = post.title.toLowerCase().includes(searchTitle.toLowerCase());
    return categoryMatch && titleMatch;
  });


  return (
    <div>
      <h2 className="lg:text-2xl text-center font-semibold mb-6">
        All Blogs: {filteredPosts.length}
      </h2>

      {/* search section  */}
      <section className="grid md:flex justify-center md:gap-5">
              {/* category dropdown search bar  */}
      <div className="relative h-10 w-72 min-w-[200px] mb-6">
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
                <option value="Birds">Birds</option>
                <option value="Books and Literature">
                  Books and Literature
                </option>
                <option value="Culture and History">Culture and History</option>
                <option value="DIY Art and Crafts">DIY Art and Crafts</option>
                <option value="Education and Learning">
                  Education and Learning
                </option>
                <option value="Entertainment">Entertainment</option>
                <option value="Fashion and Beauty">Fashion and Beauty</option>
                <option value="Flowers and Plants">Flowers and Plants</option>

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
                
                <option value="Illustration and Animation">Illustration and Animation</option>
                <option value="Islam and Religion">Islam and Religion</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Motivation">Motivation</option>
                <option value="Nature">Nature</option>
                <option value="Others...">Others...</option>

                <option value="Personal Blog">Personal Blog</option>
                
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
      {/* category dropdown search bar end */}

      {/* search with title  */}
      <div className="mb-3">
        <div className="relative mb-4 flex w-72 flex-wrap items-stretch">
          <input
            type="search"
            value={searchTitle}
            onChange={handleSearchTitleChange}
            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-pink-900 focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1" />


              <button
                className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-to-pink-600 hover:shadow-lg bg-gradient-to-r from-rose-700 to-pink-600 focus:to-pink-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
      {/* search with title end */}
      </section>
      {/* search section end */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Postcard key={post._id} post={post}></Postcard>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
