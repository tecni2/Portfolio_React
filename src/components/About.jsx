import Perfil from "../assets/eleazar_chusmita_3.png";

const About = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-8 md:px-10 gap-10 lg:gap-20 lg:py-20">

      <div className="w-full md:h-[290px] lg:w-1/3 flex flex-col items-center border border-gray-500 dark:bg-transparent rounded-md">
        <img src={Perfil} className="h-[290px] p-1 rounded-md ease-in-out duration-300 hover:scale-125" alt="" />
      
      </div>
      <div className="w-full flex flex-col">
      <p className="text-3xl font-bold text-black dark:text-white"
      >
        About Me
        {/* 11:33 verificar pantalla grande */}
      </p>
      </div>
      
    </div>
  );
};

export default About;