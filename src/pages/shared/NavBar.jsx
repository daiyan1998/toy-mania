import logo from "../../assets/clipart2049110.png";
import { AiOutlineHome, AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
const NavBar = () => {
  const { logOut, user } = useContext(AuthContext);
  const { scrollYProgress } = useScroll();

  const logoutHandler = () => {
    logOut();
  };
  return (
    <>
      <div className="header sticky top-0 left-0 right-0 z-10 bg-white shadow-md flex items-center justify-between px-8 py-5">
        <motion.div
          className="bg-teal-400 fixed h-2.5 origin-[0%] top-0 inset-x-0"
          style={{ scaleX: scrollYProgress }}
        />
        <h1 className="w-3/12">
          <img className="h-16" src={logo} alt="" />
        </h1>
        <nav className="nav font-semibold text-lg">
          <ul className="flex items-center">
            <li className="p-4 border-b-2 flex items-center gap-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              <AiOutlineHome></AiOutlineHome>
              <Link to={"/"}>Home</Link>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link to={"/allToys"}>All Toys</Link>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link to={"/mytoys"}>My Toys</Link>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link to={"/blog"}>Blogs</Link>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link to={"/addToy"} className="flex items-center  gap-1">
                <AiOutlinePlus className="inline-block " /> Add A Toy
              </Link>
            </li>
          </ul>
        </nav>

        <div className="w-3/12 gap-5 flex justify-end">
          {user && (
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
          )}
          {user ? (
            <button
              className="bg-teal-500 hover:bg-teal-700 text-white  py-1 px-2 rounded"
              onClick={logoutHandler}
            >
              LogOut
            </button>
          ) : (
            <button className="bg-teal-500 hover:bg-teal-700 text-white  py-1 px-2 rounded">
              <Link to={"/login"}>Login</Link>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
