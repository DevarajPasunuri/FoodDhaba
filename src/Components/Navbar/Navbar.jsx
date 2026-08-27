import logo1 from "../../assets/logo1.png";
const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 ">
      <div className="flex items-center  w-12 py-3 mx-6">
        <img src={logo1}  />
        <h3 className="px-2 font-bold">order food</h3>
      </div>
      <div>
        <input
          type="text"
          placeholder="search food"
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
