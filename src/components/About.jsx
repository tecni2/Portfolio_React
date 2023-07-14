import Perfil from "../assets/eleazar_chusmita_1--.png";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const About = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 lg:gap-20 lg:py-20">
      <div className="w-full md:h-[290px] lg:w-1/3 flex flex-col items-center border border-gray-500 dark:bg-transparent rounded-md">
        <img
          src={Perfil}
          className="h-[290px] p-1 rounded-full ease-in-out duration-300 hover:scale-125"
          alt=""
        />
      </div>
      <div className="w-full flex flex-col">
        <p className="text-3xl font-bold text-black dark:text-gray-100">
          About Me
        </p>
        <p className="text-lg text-black dark:text-gray-300 leading-10">
          Full.Stack Web Developer with ability to learn and collaborate in
          rapidly changing environments and compositions. Worked through hours
          of bootcamp structure, learning JavaScript, NodeJs, ReactJs, NextJs
          and TypeScript. Eager to tackle web development/design challenges to
          achieve lasting impacts on user experience.
        </p>

        <div className="mt-5 2xl:mt-10 flex flex-wrap gap-5">
          <p className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-gray-300 cursor-pointer">
            <FaUserAlt size={24} /> Eleazar Chusmita
          </p>
          <a href="http://wa.me/+573222457411" target="_blank" className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-gray-300 cursor-pointer">
            <BsWhatsapp size={24} /> +57 322 245 7411
          </a>
          <p className="flex gap-3 items-center justify-center rounded-full shadow-lg py-2 px-4 bg-[#030a1c] text-gray-300 cursor-pointer">
            <MdOutlineAlternateEmail size={24} /> tecni2.elie.@gmail.com
          </p>

        </div>
      </div>
    </div>
  );
};

export default About;

// 15:53
