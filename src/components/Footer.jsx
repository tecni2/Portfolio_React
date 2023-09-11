import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <hr className="hidden dark:block" />

      <div className="w-full flex flex-col md:flex-row py-20 px-8 md:px-10 gap-10 lg:gap-20 justify-between">
        <p className="text-lg text-gray-300 font-semibold">Country Colombia</p>
        <div className="flex flex-col md:flex-row text-md gap-5 md:gap-20 text-gray-300">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>
        <div className="flex flex-col gap-5 text-md text-gray-300">
          <p>tecni2.elie.elie@gmail.com</p>
          <p>+57 3222457411</p>
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center pb-20">
        <p className="text-gray-300 font-semibold tracking-wider">
          Social Media
        </p>

        <div className="flex gap-10 text-gray-300 text-2xl mb-10">
          <a
            href="https://github.com/tecni2"
            target="_blank"
            className="cursor-pointer"
          >
            <BsGithub className="hover:scale-125" />
          </a>
          <a
            href="https://www.linkedin.com/in/eleazarchusmita/"
            target="_blank"
            className="cursor-pointer"
          >
            <BsLinkedin className="hover:scale-125" />
          </a>
        </div>
        <p className="text-gray-400 text-md tracking-wider">
          @2023 Eleazar Chusmita
        </p>
      </div>
    </footer>
  );
};

export default Footer;
