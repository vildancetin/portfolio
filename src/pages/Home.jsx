import { NavLink } from "react-router-dom";
import pp from "../assets/pp.png";
import { FaAngleDoubleRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="background dark:bg-none" >
      <div className="flex justify-center mt-10">
        <div className="flex justify-center items-center">
          <div className="flex flex-col font-poppins items-start justify-center pl-12 gap-4 w-2/3">
            <span className="text-3xl text-blue font-semibold tracking-wider">
              FullStack Developer
            </span>
            <span className="text-2xl font-medium text-start ">
              Hi, I'm Vildan,a full-stack developer fueled by passion. I thrive
              on crafting digital experiences that seamlessly merge creativity
              with code.{" "}
            </span>
          </div>
          <img src={pp} alt="" className="rounded-full " />
        </div>
      </div>
      <div className="animate-bounce ml-12 flex">
        <button className="show">
          <NavLink to="/about">
            <FaAngleDoubleRight className="text-5xl text-blue  " />
            <span className="text-xl text-blue font-medium font-poppins">More information</span>
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Home;
