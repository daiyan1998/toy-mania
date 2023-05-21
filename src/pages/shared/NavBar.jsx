import { useState, useEffect, useContext } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import {
  MdArticle,
  MdBook,
  MdMenu,
  MdMenuOpen,
  MdOutlineBookmarkBorder,
  MdOutlineToys,
  MdPerson,
  MdPlaylistAdd,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import logo from "../../assets/clipart2049110.png";
import { AiOutlineHome, AiOutlinePlus } from "react-icons/ai";
import { motion, useScroll } from "framer-motion";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Tooltip } from "@material-tailwind/react";
import unknown from "../../assets/unknown.jpg";

const NavBar = () => {
  const { user, logOut, setTitle } = useContext(AuthContext);
  const [openNav, setOpenNav] = useState(false);
  const logoutHandler = () => {
    logOut();
  };

  const updateTitles = (title) => {
    document.title = `Toy Mania - ${title}`;
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 text-lg text-gray-700 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link
        onClick={() => updateTitles("Home")}
        to={"/"}
        className="flex items-center"
      >
        <div as="li" className="p-1 font-normal flex items-center gap-1">
          <AiOutlineHome></AiOutlineHome>
          Home
        </div>
      </Link>
      <Link
        onClick={() => updateTitles("All Toys")}
        to={"/allToys"}
        className="flex items-center"
      >
        <div as="li" className="p-1 font-normal flex items-center gap-1">
          <MdOutlineToys />
          All Toys
        </div>
      </Link>
      <Link
        onClick={() => updateTitles("My Toys")}
        to={`/myToys`}
        className="flex items-center"
      >
        <div as="li" className="p-1 font-normal flex items-center gap-1">
          <MdOutlineBookmarkBorder />
          My Toys
        </div>
      </Link>
      <Link
        to={"/addToy"}
        onClick={() => updateTitles("Add Toy")}
        className="flex items-center"
      >
        <div as="li" className="p-1 font-normal flex items-center gap-1">
          <MdPlaylistAdd className="text-lg" />
          Add Toy
        </div>
      </Link>
      <Link
        onClick={() => updateTitles("Blogs")}
        to={"/blog"}
        className="flex items-center"
      >
        <div as="li" className="p-1 font-normal flex items-center gap-1">
          <MdBook />
          Blogs
        </div>
      </Link>
    </ul>
  );
  return (
    <Navbar className="rounded-none  sticky top-0 left-0 right-0 z-10 lg:px-8 lg:py-4 ">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <img className="h-16" src={logo} alt="" />
        </Typography>
        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <MdMenuOpen className="text-2xl" />
          ) : (
            <MdMenu className="text-2xl" />
          )}
        </IconButton>
        <div className=" gap-2 lg:flex">
          {user && (
            <div className="flex gap-2">
              <Tooltip content={user.displayName || "No Name"} placement="left">
                <Avatar src={user.photoURL || unknown} />
              </Tooltip>
              <Button
                className="px-2 py-1"
                onClick={logoutHandler}
                variant="gradient"
                color="teal"
              >
                Logout
              </Button>
            </div>
          )}
          {user ? null : (
            <>
              <Button variant="text" size="sm" color="blue-gray">
                <Link onClick={() => updateTitles("SignIn")} to={"/login"}>
                  Sign In
                </Link>
              </Button>
              <Button variant="gradient" color="teal" size="sm">
                <Link onClick={() => updateTitles("Register")} to={"/register"}>
                  Sign Up
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
      <MobileNav open={openNav}>
        <div className="container flex mx-auto">{navList}</div>
      </MobileNav>
    </Navbar>
  );
};

export default NavBar;
