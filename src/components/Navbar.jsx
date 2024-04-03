import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { HiHomeModern } from "react-icons/hi2";

const Navbar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <header className="bg-[#F7F7F7] p-4">
      <div className="mx-auto flex  h-16 max-w-screen-xl items-center gap-5 sm:gap-8 px-4 sm:px-6 lg:px-8">
        <NavLink className="block text-5xl sm:mr-7" to="/home">
          <HiHomeModern />
        </NavLink>
        <div className="flex flex-1 items-center justify-end md:justify-between  sm:flex-row gap-3">
          <nav aria-label="Global" className="flex gap-3 sm:gap-[3rem] ">
            <NavLink to="/home">
              <div className="h-[0.15rem] w-[5rem] lg:w-[7rem] bg-black mb-2 hidden sm:block"></div>
              <p className="text-center">Products</p>
            </NavLink>
            <NavLink to="/home/about">
              <div className="h-[0.23rem] w-[5rem] lg:w-[7rem] bg-black mb-2 hidden sm:block"></div>
              <p className="text-center">About</p>
            </NavLink>
          </nav>

          <NavLink
            className="block rounded-sm sm:rounded-md bg-[#D5D5D5] px-5 py-2.5 text-sm font-medium text-black transition hover:bg-black hover:text-white "
            to="/"
            onClick={logout}
          >
            Logout
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
