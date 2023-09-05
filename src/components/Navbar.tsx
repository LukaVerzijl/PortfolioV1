import NavButton from "./NavButton";

function Navbar() {
  return (
    <div className="  h-14 bg-[#222831] relative ">
      <div className="flex justify-between items-center">
        <div className=" flex items-center ml-6 mt-2">
          <NavButton text="Home" />
        </div>
        <div className=" flex items-center mt-2 mr-6">
          <NavButton text="About me" />
          <NavButton text="Projects" />
          <NavButton text="Contact" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
