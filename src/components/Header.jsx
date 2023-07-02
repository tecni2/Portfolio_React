import React, { Component } from "react";
// import { Mongodb, Nodejs, Profile, Reactsjs, Redux } from "../assets";
// import image { Component} 

import png_2 from "../assets/reactjs.svg";
import png_3 from "../assets/nodejs.svg";

const Header = () => {
    return (
      <div className="w-full flex flex-row lg:flex-row px-8 md:px-10 gap-10 2xl:gap-20 py-20">
        {/* <div>28:34</div> */}
        <div className="w-96">
        <img src={png_2} alt="vite" />
        
        </div>
        <div className="w-96">
        <img src={png_3} alt="vite" />
        
        </div>
        
        
      
        
        
      </div>
    );
  }


export default Header;