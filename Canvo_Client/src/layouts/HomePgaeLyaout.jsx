import React from "react";
import { Outlet } from "react-router";
import Navbar from "../componets/Navbar/Navbar";

const HomePgaeLyaout = () => {
  return (
    <div className=" min-h-screen bg-linear-to-br  from-[#E9FDFC] to-[#F6FBFF]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-8 ">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePgaeLyaout;
