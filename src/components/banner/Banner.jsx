const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[77vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/fx491VH/banner-instasohor.jpg)",
        }}
      >
        <div
          className="hero-overlay bg-opacity-40"
          style={{ filter: "brightness(2.5)" }}
        ></div>

        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="text-xl md:text-2xl lg:text-5xl font-extrabold text-teal-900 bg-gray-300 rounded-lg px-4 py-2 pb-3">
              Welcome to InstaSohor App!
            </h1>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-teal-900 font-mono bg-gray-300 rounded-lg px-4 py-2 pb-3">
            Capturing together, One Story at a Time
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;