import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
const Services = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-20">
      <div className="mb-10">
        <h2 className="text-center text-4xl font-bold uppercase">
          our services
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="relative h-[550px]">
          <div className="absolute w-full h-[550px] bg-black bg-opacity-70"></div>
          <img
            src={service1}
            alt=""
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute text-white left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-center text-4xl font-bold">
            <p>Personal</p>
            <p>Training</p>
          </div>
        </div>
        <div className="relative h-[550px]">
          <div className="absolute w-full h-[550px] bg-black bg-opacity-70"></div>
          <img
            src={service2}
            alt=""
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute text-white left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-center text-4xl font-bold">
            <p>Group</p>
            <p>Classes</p>
          </div>
        </div>
        <div className="relative h-[550px]">
          <div className="absolute w-full h-[550px] bg-black bg-opacity-70"></div>
          <img
            src={service3}
            alt=""
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute text-white left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-center text-4xl font-bold">
            <p>Nutrition</p>
            <p>Counseling</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
