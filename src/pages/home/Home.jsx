import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import PopularBlog from "../../components/popularBlog/PopularBlog";
import Newsletter from "../newsletter/Newsletter";
import RecentBlogs from "../recentBlogs/RecentBlogs";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <RecentBlogs></RecentBlogs>

      <Newsletter></Newsletter>

      <PopularBlog></PopularBlog>

      <Footer></Footer>
    </div>
  );
};

export default Home;