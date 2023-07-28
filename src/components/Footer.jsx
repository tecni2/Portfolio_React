const Footer = () => {
  return (
    <footer>
      <hr className="hidden dark:block" />

      <div className="w-full flex flex-col md:flex-row py-20 px-8 md:px-10 gap-10 lg:gap-20 justify-between">
        <p className="text-lg text-gray-300 font-semibold">
          Country Venezuela - Colombia
        </p>
        <div className="flex flex-col md:flex-row text-md gap-5 md:gap-20 text-gray-300">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
