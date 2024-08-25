import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Header = () => {
  const handleSignOut = () => {
    localStorage.removeItem("authToken");
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex sm:flex-row p-5 md:flex-row items-center">
        <Link
          to="/home"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 xl:ml-4"
        >
          <img src={logo} width="100" height="100" alt="" />
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center xl:ml-auto xl:mr-auto xl:border-0">
          <Link
            to="/home"
            className="w-24 mr-5 p-2 text-center rounded-md hover:text-black hover:bg-white hover:ring-2 hover:ring-indigo-500 hover:outline-indigo-200 outline-none transition-colors duration-200 ease-in-out"
          >
            Home
          </Link>
          <Link
            to="/home/profile"
            className="w-24 mr-5 p-2 text-center rounded-md hover:text-black hover:bg-white hover:ring-2 hover:ring-indigo-500 hover:outline-indigo-200 outline-none transition-colors duration-200 ease-in-out"
          >
            My Profile
          </Link>
          <Link
            to="/results"
            className="w-24 mr-5 p-2 text-center rounded-md hover:text-black hover:bg-white hover:ring-2 hover:ring-indigo-500 hover:outline-indigo-200 outline-none transition-colors duration-200 ease-in-out"
          >
            Vote Count
          </Link>
        </nav>
        <Link
          onClick={handleSignOut}
          to="/"
          className="rounded-md bg-indigo-600 px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign out
        </Link>
      </div>
    </header>
  );
};

export default Header;
