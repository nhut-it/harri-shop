import logo from "../../assets/imgs/logo.svg";

import { FiUser, FiShoppingCart, FiSearch } from "react-icons/fi";
import "./Header.css";
import {
  AiOutlineHeart,
  AiOutlineClose,
  AiFillYoutube,
  AiOutlinePlus,
} from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import bgSidebar from "../../assets/imgs/bg-sidebar.webp";
import { motion } from "framer-motion";
import { Badge, Collapse, Divider } from "antd";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const { Panel } = Collapse;
const Header = ({ bgHeader }) => {
  const [sideBar, setSidebar] = useState(false);
  const [plusSubMenu, setPlusSubMenu] = useState(false);
  const [stickyClass, setStickyClass] = useState("relative bg-[#F0F2EE]");
  // console.log("stickyClass", stickyClass);
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      // console.log("scroll", window.scrollY);

      window.scrollY > 80
        ? setStickyClass("fixed top-0 left-0 z-50 w-full bg-white shadow-lg")
        : setStickyClass("relative bg-[#F0F2EE]");
    }
  };
  return (
    <header
      className={`px-[12px] ${bgHeader}  sm:px-[30px] h-[78px] border-b flex items-center  justify-between mx-auto xl:px-[60px] 2xl:px-[145px]  ${stickyClass}`}
    >
      <a href="#">
        <img
          src={logo}
          alt="logo harri shop"
          className="logo flex-none pr-[75px]"
        />
      </a>
      <nav className="nav-menu flex-2 font-space text-[15px] mr-auto hidden lg:block">
        <ul className="list-menu flex pl-[45px] font-medium items-center">
          <li className="nav-link pl-[30px] cursor-pointer leading-[78px] parent ">
            <NavLink to="/" className="text-content  transition duration-200 ">
              Home
            </NavLink>
          </li>
          <li className="nav-link pl-[30px] cursor-pointer leading-[78px]">
            <NavLink
              to="about"
              className="text-content hover:text-primary transition duration-200 "
            >
              About Us
            </NavLink>
          </li>
          <li className="nav-link pl-[30px] cursor-pointer leading-[78px]">
            <NavLink
              to="shop"
              href="#"
              className="text-content hover:text-primary transition duration-200 "
            >
              Shop
            </NavLink>
          </li>

          <li className="nav-link text-content pl-[30px] hover:last:text-red-300 relative  cursor-pointer leading-[78px]">
            <NavLink href="#">
              Pages <MdKeyboardArrowDown className="inline" />
            </NavLink>
            <motion.ul className="min-w-[200px] z-50  shadow-lg font-normal sub-menu text-content bg-white pl-[25px] pt-[25px]  pb-[25px] absolute top-full leading-[26px] text-[15px]">
              <li>
                <NavLink href="#" className="text-[14px]">
                  FAQs
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className="text-[14px]">
                  Privacy & Policy
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className="text-[14px]">
                  Terms & Conditions
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className="text-[14px]">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className="text-[14px]">
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className="text-[14px]">
                  Forgot Password
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className="text-[14px]">
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className="text-[14px]">
                  My Wishlist
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className="text-[14px]">
                  Checkout
                </NavLink>
              </li>
              <li>
                <NavLink href="#" className="text-[14px]">
                  Error 404
                </NavLink>
              </li>
            </motion.ul>
          </li>

          <li className="nav-link pl-[30px] cursor-pointer leading-[78px]">
            <NavLink
              to="contact"
              className="text-content hover:text-primary transition duration-200"
            >
              contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="header-action flex items-center relative ml-auto">
        <ul className="list-action  pr-5  flex">
          <li className="pr-[15px] text-xl hidden sm:block">
            <a
              href="#"
              className="text-[#525258] hover:text-black duration-200 transition"
            >
              <div className="search-action">
                <FiSearch />
              </div>
            </a>
          </li>
          <li className="pr-[15px] text-xl">
            <a
              href="#"
              className="text-[#525258] hover:text-black duration-200 transition"
            >
              <div className="user-action">
                <FiUser />
              </div>
            </a>
          </li>
          <li className="pr-[15px] text-xl">
            <Badge count={0} showZero size="default" color="#F72C79">
              <a
                href="#"
                className="text-[#525258] text-xl hover:text-black duration-200 transition"
              >
                <div className="wishlist-action">
                  <AiOutlineHeart />
                </div>
              </a>
            </Badge>
          </li>
          <li className="text-xl">
            <Badge count={3} size="default" color="#F72C79">
              <a className="text-[#525258] text-xl hover:text-black duration-200 transition">
                <div className="cart-action">
                  <FiShoppingCart />
                </div>
              </a>
            </Badge>
          </li>
        </ul>

        <button
          onClick={() => setSidebar(!sideBar)}
          className="navbar flex flex-col items-center lg:hidden"
        >
          <span className="block rounded mb-1 w-[25px] h-[2px] bg-[#000] translate-x-[-3px]"></span>
          <span className="block rounded w-[14px] h-[2px] bg-[#000]"></span>
          <span className="block rounded mt-1 w-[25px] h-[2px] bg-[#000]"></span>
        </button>
      </div>
      <div className="menu-sidebar">
        <div
          onClick={() => setSidebar(!sideBar)}
          className={
            sideBar
              ? "overlay active h-full w-full fixed top-0 left-0 right-0 bottom-0 opacity-90 bg-[#4A4B5B] z-30"
              : "overlay h-[100vh] w-screen fixed top-0 left-0 right-0 bottom-0 opacity-90 bg-[#4A4B5B] z-30"
          }
        ></div>
        <div
          className={
            sideBar
              ? "sidebar-content active w-full sm:w-[360px] h-full overflow-y-scroll  bg-white fixed top-0 bottom-0 right-0  z-50"
              : "sidebar-content w-[360px] h-full overflow-y-scroll  bg-white fixed top-0 bottom-0 right-0  z-50"
          }
        >
          <div className="sidebar-wrapper relative pt-[50px] pb-[145px]  px-[40px] ">
            <div
              onClick={() => setSidebar(!sideBar)}
              className="close-btn w-[44px] h-[44px] rounded-full border-[1px] border-[#F1DAE6] leading-[44px] text-center flex justify-center items-center absolute top-[36px] right-[40px] hover:bg-primary cursor-pointer transititon duration-500"
            >
              <AiOutlineClose className="icon-close" />
            </div>
            <img
              src={logo}
              alt="logo harri shop"
              className="logo w-[112px] h-auto"
            />
            <ul className="list-menu-sidebar font-space font-bold mt-5 text-sm">
              <li className="py-[10px] border-b-[1px]  ">
                <a href="#">Home</a>
              </li>
              <li className="py-[10px] border-b-[1px]  ">
                <a href="#"> About Us</a>
              </li>
              <li className="py-[10px] border-b-[1px]  ">
                <a href="#"> Shop</a>
              </li>
              <li>
                <div className="flex justify-between items-center border-b-[1px] py-[5px] ">
                  <a href="#">Pages</a>
                  <span
                    className="w-[32px] h-[32px] border-[1px] "
                    onClick={() => setPlusSubMenu(!plusSubMenu)}
                  >
                    {plusSubMenu ? (
                      <span className="w-[32px] h-[32px] bg-primary flex justify-center items-center">
                        <AiOutlinePlus className="text-lg text-white rotate-45 transition duration-500  border-primary" />
                      </span>
                    ) : (
                      <span className="w-[32px] h-[32px]  flex justify-center items-center">
                        <AiOutlinePlus className="text-lg text-[#03041c]   transition duration-500  " />
                      </span>
                    )}
                  </span>
                </div>
                {plusSubMenu ? (
                  <ul className="submunu-sidebar">
                    <li className="py-[10px] border-b-[1px]">
                      <a href="#" className="pl-[20px]">
                        FAQs
                      </a>
                    </li>
                    <li className="py-[10px] border-b-[1px]">
                      <a href="#" className="pl-[20px]">
                        {" "}
                        Privacy & Policy
                      </a>
                    </li>
                    <li className="py-[10px] border-b-[1px]">
                      <a href="#" className="pl-[20px]">
                        Terms & Conditions
                      </a>
                    </li>
                    <li className="py-[10px] border-b-[1px]">
                      <a href="#" className="pl-[20px]">
                        {" "}
                        Login
                      </a>
                    </li>
                    <li className="py-[10px] border-b-[1px]">
                      <a href="#" className="pl-[20px]">
                        {" "}
                        Register
                      </a>
                    </li>
                    <li className="py-[10px] border-b-[1px]">
                      <a href="#" className="pl-[20px]">
                        Forgot Password
                      </a>
                    </li>
                    <li className="py-[10px] border-b-[1px]">
                      <a href="#" className="pl-[20px]">
                        {" "}
                        My Cart
                      </a>
                    </li>
                    <li className="py-[10px] border-b-[1px]">
                      <a href="#" className="pl-[20px]">
                        {" "}
                        My Wishlist
                      </a>
                    </li>
                    <li className="py-[10px] border-b-[1px]">
                      <a href="#" className="pl-[20px]">
                        Checkout
                      </a>
                    </li>
                    <li className="py-[10px] border-b-[1px]">
                      <a href="#" className="pl-[20px]">
                        {" "}
                        Error 404
                      </a>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
              <li className="py-[10px]   ">
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <a
              href="#"
              className=" mt-[40px] btn-getting inline-flex items-center bg-[#E7095F] text-white  py-[9px] px-[22px] hover:bg-[#03041c] transition duration-300 mb-[150px]"
            >
              <span> Getting Started</span>

              <IoIosArrowForward className="ml-2" />
            </a>
            <div className="follow">
              <label htmlFor="" className="mb-[8px]">
                Follow:
              </label>
              <ul className="list-social flex">
                <li className=" h-[40px] w-[40px] border-2  border-[#eaeaef] mr-[5px]">
                  <a
                    href="#"
                    className="text-center inline-block  h-[40px] w-[40px] leadding-[40px] flex items-center justify-center transition duration-500"
                  >
                    <FaFacebookF className="leading-[40px]" />
                  </a>
                </li>
                <li className=" h-[40px] w-[40px] border-2  border-[#eaeaef] mr-[5px]">
                  <a
                    href="#"
                    className="text-center inline-block  h-[40px] w-[40px] leadding-[40px] flex items-center justify-center transition duration-500"
                  >
                    <BsTwitter />
                  </a>
                </li>
                <li className=" h-[40px] w-[40px] border-2  border-[#eaeaef] mr-[5px]">
                  <a
                    href="#"
                    className="text-center inline-block  h-[40px] w-[40px] leadding-[40px] flex items-center justify-center transition duration-500"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className=" h-[40px] w-[40px] border-2  border-[#eaeaef] mr-[5px]">
                  <a
                    href="#"
                    className="text-center inline-block  h-[40px] w-[40px] leadding-[40px] flex items-center justify-center transition duration-500"
                  >
                    <AiFillYoutube />
                  </a>
                </li>
              </ul>
            </div>
            <Divider className="my-[40px] " />
            <div className="contact font-space font-medium flex flex-col">
              <div>
                <a
                  href="tel:+964 742 44 763"
                  className="hover:text-primary font-bold inline-block transition duration-300 text-xl mb-[5px]"
                >
                  +964 742 44 763
                </a>
              </div>
              <div>
                <a
                  href="mailto:info@harry.com"
                  className="hover:text-primary inline-block transition duration-300 text-xl text-content mb-[15px]"
                >
                  info@harry.com
                </a>
              </div>
            </div>
            <img
              src={bgSidebar}
              alt="background side bar "
              className="w-full absolute bottom-0 right-0 -z-10"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
