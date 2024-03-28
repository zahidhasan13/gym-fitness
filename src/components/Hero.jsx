import hero from "../assets/g1.jpeg";
const Hero = () => {
  const clipPathStyle = {
    clipPath: "polygon(0 0, 100% 0%, 100% 85%, 0% 100%)",
  };
  return (
    <div className="w-full h-[600px]" style={clipPathStyle}>
      <div className="absolute w-full h-[600px] bg-black bg-opacity-70"></div>
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover object-top"
          src={hero}
          alt="Hero Image"
        />
        <div className="absolute lg:w-[60%] md:w-[90%] lg:top-[30%] top-[20%] p-4 md:p-8 space-y-8">
          <p className="text-xl font-semibold text-white">
            Welcome to Gym Fitness!
          </p>
          <h1 className="md:text-6xl text-5xl font-bold text-white">
            Unlock Your Potential, Transform{" "}
            <span className="text-orange-600">Your Body.</span>
          </h1>
          <button
            className="text-white bg-orange-600 px-4 py-2 uppercase rounded
          "
          >
            get info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
