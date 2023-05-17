import logo from "../../assets/clipart2049110.png";
import { AiOutlineHome, AiOutlinePlus } from "react-icons/ai";
import { MdOutlinePersonOutline } from "react-icons/md";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="header static top-0 bg-white shadow-md flex items-center justify-between px-8 py-5">
      <h1 className="w-3/12">
        <img className="h-16" src={logo} alt="" />
      </h1>
      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link>All Toys</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link>My Toys</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link>Blogs</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link className="flex items-center  gap-1">
              <AiOutlinePlus className="inline-block " /> Add A Toy
            </Link>
          </li>
        </ul>
      </nav>

      <div className="w-3/12 text-2xl gap-5 flex justify-end">
        <AiOutlineHome></AiOutlineHome>
        <MdOutlinePersonOutline></MdOutlinePersonOutline>
      </div>
    </div>
  );
};

export default NavBar;
