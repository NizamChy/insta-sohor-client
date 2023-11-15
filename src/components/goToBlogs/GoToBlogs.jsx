import { Link } from "react-router-dom";


const GoToBlogs = () => {
  return (
    <div className="m-8">

            {/* animation button  */}
            <div className="flex justify-center">
        <style>
          {`
          button-container {
            background: #f5f5f5;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
          }

          .anim-btn, .anim-btn2 {
            width: 250px;
            height: 50px;
            font-size: 20px;
            text-align: center;
            line-height: 0px;
            color: rgba(255, 255, 255, 0.9);
            border-radius: 10px;
            background: linear-gradient(-45deg, #FFA63D, #FF3D77, #338AFF, #3CF0C5);
            background-size: 600%;
            animation: anime 16s linear infinite;
            display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px; 
          }

          .anim-btn2 {
            position: absolute;
            margin-top: -70px;
            z-index: -1;
            filter: blur(30px);
            opacity: 0.8;
          }

          @keyframes anime {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
        </style>
        <div className="button-container">

          <Link to="/allblogs">
          <button className="anim-btn">
            {" "}
            Go to All Blogs
            <span>
              <img src="/images/blogging.png" alt="" />
            </span>
          </button>
          </Link>
        </div>
      </div>

      {/* animation button  */}
      
    </div>
  );
};

export default GoToBlogs;