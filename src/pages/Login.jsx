import logo from "../logo.jpg"
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="relative top-0 left-0 w-full overflow-hidden line-height-0 transform rotate-180">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[169%] h-[350px] sm:h-[500px]"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-[#EDEDED]"
            ></path>
          </svg>
        </div>
        <NavLink to="/" className="tracking-widest font-great text-3xl sm:text-6xl font-bold  text-[#D5D5D5] absolute top-[25%] left-[5%] ">
        Home<span className="text-[#858585]">Page</span> 
      </NavLink>
        <div className="w-[50%] flex flex-col gap-5 absolute bottom-[5%] left-[30%] z-10">
          <button className="w-[100%] bg-[#D5D5D5] hover:bg-[#858585] text-black font-bold py-2 px-4 rounded-full">
            Sign up
          </button>
          <button className="w-[100%] tracking-widest bg-[#D5D5D5] hover:bg-[#858585] text-black font-bold py-2 px-4 rounded-full">
            Login
          </button>
        </div>
        {/* <div className="absolute bottom-0 right-0 w-[40%] ">
          <img src={logo} alt="" />
        </div> */}
      </div>
    </>
  );
};

export default Login;
