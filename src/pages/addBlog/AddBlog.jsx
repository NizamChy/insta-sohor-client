// import Swal from 'sweetalert2'

const AddBlog = () => {
  // const handleAddProduct = event => {
  //   event.preventDefault();

  //   const form = event.target;

  //   const name = form.name.value;
  //   const image = form.image.value;
  //   const brand = form.brand.value;
  //   const type = form.type.value;
  //   const price = form.price.value;
  //   const description = form.description.value;
  //   const rating = form.rating.value;

  //   const newProduct = {name, image, brand, type, price, description, rating}

  //   // console.log(newProduct);

  //   //send data to the server
  //   fetch('https://brand-shop-server-six-vert.vercel.app/product', {
  //     method: 'POST',
  //     headers:{
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(newProduct)
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     if(data.insertedId){
  //       Swal.fire({
  //         title: 'Success!',
  //         text: 'Product added, to check go to New Arrivals page!',
  //         icon: 'success',
  //         confirmButtonText: 'Cool'
  //       })
  //     }
  //   })

  // }

  return (
    <div className="bg-[#F4F3F0] p-16 md:p-24 pb-10 pt-10 rounded">
      <div>
        <h2 className="text-xl lg:text-3xl font font-extrabold text-center mb-4">
          Create post
        </h2>
      </div>

      {/* DONE: Create a form which will take blog information like 
      title,
      image url,
      category,
      short description, 
      long description, 
      submit button */}

      <form>
        {/* form row Author and Title*/}
        <div className="md:flex mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold lg:text-lg">Author</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="your name or email"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text font-semibold lg:text-lg">Title</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="post title"
                name="title"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form row Post image url and Category*/}
        <div className="md:flex mb-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold lg:text-lg">Post image url</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="image url"
                name="image"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text font-semibold lg:text-lg">Category</span>
            </label>
            <label className="">
              <select name="category" className="select select-bordered w-full">
             
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
            </label>
          </div>
        </div>
{/* form row Description Summary and Description Detail*/}
<div className="md:flex mb-4">
  <div className="form-control md:w-1/2">
    <label className="label">
      <span className="label-text font-semibold lg:text-lg">
        Description Summary
      </span>
    </label>
    <label className="input-group">
      <textarea
        placeholder="Description Summary"
        name="descriptionSummary"
        className="input input-bordered w-full h-24" /* Increase the height (h-24) as needed */
      ></textarea>
    </label>
  </div>

  <div className="form-control md:w-1/2 md:ml-4">
    <label className="label">
      <span className="label-text font-semibold lg:text-lg">
        Description Detail
      </span>
    </label>
    <label className="input-group">
      <textarea
        placeholder="Description Detail"
        name="descriptionDetail"
        className="input input-bordered w-full h-24" /* Increase the height (h-24) as needed */
      ></textarea>
    </label>
  </div>
</div>


        <div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-6 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
            >
              POST
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;