const Navbar = () => {
  return (
    <div>
      <nav className="rounded-full">
        <div className=" rounded-full text-orange-100 fixed top-0 w-full flex text text-center text-2xl font-bold py-5 space-x-6 bg-transparent">
          <button className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer hover:text-black ">
            Home Page
          </button>
          <button className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer hover:text-black ">
            About
          </button>
          <button className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer hover:text-black ">
            Information
          </button>
          <button className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer hover:text-black ">
            Contact US
          </button>
          <button className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer hover:text-black ">
            Information
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
