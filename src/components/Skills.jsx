import { skills, softskills } from "../data";
import { BsCheck2All } from "react-icons/bs";

const Skills = () => {
  return (
    <div className="w-full flex flex-col py-20">
      <h4 className="text-3xl font-bold text-black dark:text-gray-100 mb-10 text-center">
        Technical Skills
      </h4>

      <div className="w-full flex flex-wrap gap-10 items-center justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex gap-4 shadow-lg py-2 px-6 bg-[#04133e] rounded-full items-center hover:animate-bounce ease-in-out duration-300"
          >
            <div className="w-10 h-10">
              <img
                src={skill.icon}
                className="w-full h-full rounded-full"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <p className="text-md font-semibold text-gray-300">
                  {skill.name}
                </p>
                {/* <p className="text-md font-semibold text-gray-300">
                  {skill.value + "%"}
                </p> */}
              </div>
              {/* <div className="w-[200px] h-[10px] bg-slate-800 rounded-lg mb-1">
                </div> */}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[10rem]">
        <h4 className="text-3xl font-bold text-black dark:text-gray-100 mb-14 text-center">
          Soft Skills
        </h4>
        <div className="flex flex-col md:flex-row gap-16 items-center justify-center">
          <div className="flex flex-col bg-[#000000] dark:bg-[#224cff10] p-6 rounded-xl shadow-xl hover:scale-125 ease-in-out duration-500 mb-10 md:mb-0">
            {softskills.slice(5, 10).map((s, index) => (
              <div key={index + s} className="flex items-center gap-3 p-4">
                <BsCheck2All color="white" size={22} />
                <p className=" text-gray-300">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 30:00 */}
    </div>
  );
};

export default Skills;
