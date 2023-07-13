import Perfil from "../assets/eleazar_chusmita_1--.png";

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
        <p className="text-3xl font-bold text-black dark:text-white">
          About Me
        </p>
        <p className="">
          Full.Stack Web Developer with ability to learn and collaborate in rapidly changing environments and compositions. Worked through hours of bootcamp structure, learning JavaScript, NodeJs, ReactJs, NextJs and TypeScript.
        </p>
      </div>
      // 11:43 verificar pantalla
    </div>
  );
};

export default About;
