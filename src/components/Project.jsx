import React, { Component } from "react";
import { projectStats } from "../../data.js";

const Project = () => {
  return (
    <div>
      <div className="w-full flex flex-wrap items-center justify-center gap-10 lg:gap-20 pt-10">
        <h2>Project</h2>
        {
            projectStats.map((p, index)=> (
              <div>
                <p>{p.value}</p>
                <p>{p.name}</p>
              </div>

            ))
          

        }
      </div>
    </div>
  );
};

export default Project;
