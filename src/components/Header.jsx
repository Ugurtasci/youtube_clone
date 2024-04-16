import { Link } from "react-router-dom";
import { IoIosSearch, IoMdMic } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { MdOutlineVideoCall } from "react-icons/md";
//import { IoMdMic } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <Link to={"/"} className="flex items-center gap-[10px]">
        <img className="w-[50px]" src="/Youtube_logo.png" alt="youtube logo" />
        <h1 className="font-bold hidden md:block text-2xl">YouTube</h1>
      </Link>

      <div className="relative mr-7">
        <form className="flex items-center border border-gray-400 rounded-3xl  overflow-hidden">
          <input
            className=" text-black  px-7 py-1 outline-none "
            type="search"
            placeholder="Ara"
          />
          <button className="bg-[#f2efef] border border-l-gray-400 w-8 h-8 rounded-r-3xl px-2 text-xl  hover:bg-[#dfdcdc]">
            <IoIosSearch />
          </button>
          <button className="bg-[#f2efef] p-1 w-8 h-8  rounded-full text-2xl cursor-pointer absolute right-[-46px] hover:bg-[#dfdcdc] ">
            <IoMdMic />
          </button>
        </form>
      </div>

      <div className="flex gap-5 mr-8 cursor-pointer ">
        <MdOutlineVideoCall className="hover:bg-[#f0eded] w-8 h-8 rounded-full hidden sm:block " />
        <CiBellOn className="hover:bg-[#f0eded] w-8 h-8 rounded-full hidden sm:block" />

        <img
          className="w-9 h-9 rounded-full"
          src="/profil_foto.jpg"
          alt="profil foto"
        />
      </div>
    </div>
  );
};

export default Header;
