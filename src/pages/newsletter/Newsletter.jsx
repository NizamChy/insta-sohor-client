import { ToastContainer, toast } from "react-toastify";


const Newsletter = () => {

  const handleSubscribe = (e) => {
    
    toast.success("Thank You!")

  }

  return (
    <div className="">
      <ToastContainer />
      
          <div className="p-6 container md:w-2/3 xl:w-auto mx-auto flex flex-col xl:items-stretch justify-between xl:flex-row">
            <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
                <img src="https://cdn.tuk.dev/assets/components/26May-update/newsletter-1.png" alt="Envelope with a newsletter" role="img" className="h-full xl:w-full lg:w-1/2 w-full" />
            </div>
            <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28">
                <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 dark:text-white mb-4 text-center xl:text-left md:mt-0 mt-4">Subscribe</h1>
                <p className="text-base leading-normal text-gray-800  text-center xl:text-left">Subscribe for newsletter.</p>

                <form onSubmit={handleSubscribe}
                >
                  <div className="flex items-stretch mt-12">
                    <input className="bg-gray-100 rounded-lg rounded-r-none dark:bg-gray-800 text-base leading-none text-gray-800 dark:text-white p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500" type="email" placeholder="Your Email" required  />
                    <button type="submit" className="w-32 rounded-l-none hover:bg-indigo-600 bg-indigo-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">subscribe</button>
                </div>
                </form>
                
            </div>
        </div>
    
      
    </div>
  );
};

export default Newsletter;

{/* <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
        </div> */}