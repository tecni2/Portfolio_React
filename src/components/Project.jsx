import React, { Component } from "react";
import { projectStats } from "../../data.js";

const Project = () => {
  return (
    <div>
      <div className="w-full flex flex-wrap items-center justify-center gap-10 lg:gap-20 pt-10">
        {projectStats.map((p, index) => (
          <div key={index} className="flex flex-col gap-2 items-center px-4 py-3 bg-[#0000ff20] rounded-md">
            <p className="text-white text-2xl font-bold">{p.value}</p>
            <p className="text-white text-sm">{p.name}</p>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-wrap items-center">

      </div>
    </div>
  );
};

export default Project;
