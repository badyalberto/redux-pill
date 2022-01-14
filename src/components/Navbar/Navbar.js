import { FcHome } from "react-icons/fc";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white py-6 text-black">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <FcHome className="w-10"/>
        <span className="font-semibold text-xl tracking-tight text-black">Luxury Houses</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black  hover:text-gray-500 mr-4">
            Flats
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-500 mr-4">
            Apartaments
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-500 mr-4">
            Houses
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-gray-500">
            Lofts
          </a>
        </div>
        <div>
          <a href="#hole" className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mr-4">
            Sign in
          </a>
          <a href="#hola" className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
