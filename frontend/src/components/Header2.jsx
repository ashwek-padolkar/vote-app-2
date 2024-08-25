import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Header2 = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex sm:flex-row p-5 md:flex-row items-center">
        <Link
          to="/home"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 xl:ml-4"
        >
          <img src={logo} width="100" height="100" alt="" />
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <Link
            to="/"
            className="w-24 mr-5 p-2 text-center rounded-md hover:text-black hover:bg-white hover:ring-2 hover:ring-indigo-500 hover:outline-indigo-200 outline-none transition-colors duration-200 ease-in-out"
          >
            Sign up
          </Link>
        </nav>
        <Link
          to="/results"
          className="inline-flex items-center py-1 px-3 xl:mr-4 focus:outline-none rounded text-base mt-4 md:mt-0 bg-white text-black hover:ring-2 ring-indigo-500 outline-indigo-200 hover:bg-indigo-100 transition-colors duration-200 ease-in-out"
        >
          Live Count
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default Header2;
