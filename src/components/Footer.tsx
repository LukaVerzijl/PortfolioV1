import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="mt-20 mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <h1 className="text-white font-poppins text-l ml-5 mb-5">
        <a href="https://github.com/LukaVerzijl/PortfolioV1">
          <FaGithub className="inline mr-3 h-6 w-6" />
        </a>
        Made with ❤️ by <a href="#">Luka Verzijl</a>
      </h1>
    </div>
  );
}

export default Footer;
