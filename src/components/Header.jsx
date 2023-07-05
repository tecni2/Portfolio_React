import React, { Component } from "react";
import png_2 from "../assets/reactjs.svg";
import png_3 from "../assets/nodejs.svg";
// import { Mongodb, Nodejs, Profile, React, Redux } from "../assets";


const Header = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 2xl:gap-20 py-20">
      <div className="flex flex-col mb-20 lg:mb-0">
        <span className="text-lg font-bold text-orange-700">
          FULL-STACK DEVELOPER
        </span>
        <div className="flex gap-4 items-center my-4">
          <h1 className="text-gray-800 dark:text-neutral-100 text-5xl 2xl:text-7xl font-bold text-center">
            I'm a
            </h1>
            <div className="flex items-center justify-center text-white shadow-lg bg-blue-800 dark:bg-[#224cff10] dark:text-[#224cff] rounded-full">
              <p className="text-3xl">Developer</p>
            </div>
        </div>
      </div>
      {/* estas imágenes son de relleno */}
      <hr />
      <div className="flex items-center flex-col md:flex-row px-8 md:px-10 gap-10 2xl:gap-20 py-20">
        <img className="w-52" src={png_2} alt="vite" />
        <img className="w-52" src={png_3} alt="vite" />
      </div>
    </div>
  );
};

export default Header;


/* *
 *
<div>31:23</div>
 */


