import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import logo from "../../assets/imgs/logo.svg";
import payment from "../../assets/imgs/list-payment.webp";
import { Divider } from "antd";
const Footer = () => {
  return (
    <div className="bg-[#FFFFFF] font-inter">
      <div className="px-[10px] sm:px-auto sm:container mx-auto pt-[100px] pb-[40px]">
        <div className="grid grid-cols-1 sm:grid-cols-9 lg:grid-cols-12 gap-y-[50px] ">
          <div className="col-span-3">
            <img src={logo} alt="" className="mb-[15px]" />
            <p className="text-[16px] font-normal mb-[20px] pr-[70px] text-content">
              The home and elements needed to create beautiful products.
            </p>
            <div className="list-social flex">
              <a
                href="#"
                className="mr-[15px] hover:text-primary transition duration-500"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="mr-[15px] hover:text-primary transition duration-500"
              >
                <BsTwitter />
              </a>
              <a
                href="#"
                className="mr-[15px] hover:text-primary transition duration-500"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="mr-[15px] hover:text-primary transition duration-500"
              >
                <AiFillYoutube />
              </a>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-2">
            <h3 className="text-[20px] font-roboto text-[#03041c] font-medium mb-[30px]">
              Company
            </h3>
            <ul className="text-content text-[15px]">
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition duration-400 mb-[15px] block leading-[1]"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition duration-400 mb-[15px] block leading-[1]"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition duration-400 mb-[15px] block leading-[1]"
                >
                  Store Locations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition duration-400 mb-[15px] block leading-[1]"
                >
                  Our Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary transition duration-400 mb-[15px] block leading-[1]"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-3">
            <h3 className="text-[20px] font-roboto text-[#03041c] font-medium mb-[30px]">
              Shop
            </h3>
            <ul className="text-content text-[15px]">
              <li className="mb-[15px]">
                <a
                  href="#"
                  className="hover:text-primary transition duration-400 leading-[1] block"
                >
                  Game & Video
                </a>
              </li>
              <li className="mb-[15px]">
                <a
                  href="#"
                  className="hover:text-primary transition duration-400 leading-[1] block"
                >
                  Phone &Tablets
                </a>
              </li>
              <li className="mb-[15px]">
                <a
                  href="#"
                  className="hover:text-primary transition duration-400 leading-[1] block"
                >
                  Computers & Laptop
                </a>
              </li>
              <li className="mb-[15px]">
                <a
                  href="#"
                  className="hover:text-primary transition duration-400 leading-[1] block"
                >
                  Sport Watches
                </a>
              </li>
              <li className="mb-[15px]">
                <a
                  href="#"
                  className="hover:text-primary transition duration-400 leading-[1] block"
                >
                  Discounts
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-3 lg:col-span-1">
            <h3 className="text-[20px] font-roboto text-[#03041c] font-medium mb-[30px]">
              Support
            </h3>
            <ul className="text-content text-[15px]">
              <li className="mb-[15px]">
                <a
                  href="#"
                  className="hover:text-primary transition duration-400 leading-[1] block"
                >
                  FAQs
                </a>
              </li>
              <li className="mb-[15px]">
                <a
                  href="#"
                  className="hover:text-primary transition duration-400 leading-[1] block"
                >
                  Reviews
                </a>
              </li>
              <li className="mb-[15px]">
                <a
                  href="#"
                  className="hover:text-primary transition duration-400 leading-[1] block"
                >
                  Contact Us
                </a>
              </li>
              <li className="mb-[15px]">
                <a
                  href="#"
                  className="hover:text-primary transition duration-400 leading-[1] block"
                >
                  Shipping
                </a>
              </li>
              <li className="mb-[15px]">
                <a
                  href="#"
                  className="hover:text-primary transition duration-400 leading-[1] block"
                >
                  Returns
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-3 lg:pl-[50px]">
            <h3 className="text-[20px] font-roboto text-[#03041c] font-medium mb-[30px]">
              Talk To Us
            </h3>
            <p className="text-content text-[15px] mb-[20px]">
              Find a location nearest you. See{" "}
              <a href="#" className="text-primary  underline">
                Our Stores
              </a>{" "}
            </p>
            <a
              href="tel:+624 423 26 72"
              className="text-[20px] text-[#03041c] font-medium inline-block"
            >
              +624 423 26 72
            </a>
            <a
              href="mailto:support@harry.com"
              className="text-[15px] text-content"
            >
              support@harry.com
            </a>
          </div>
        </div>
        <Divider className="bg-[#F5F6F6] " />
        <div className="md:flex justify-between items-center text-[14px] font-inter text-[#7d7f82]">
          <p className="mb-[20px] md:mb-0 text-[12px] sm:text-[16px]">
            Copyright © 2023 by{" "}
            <a href="#" className="text-primary">
              Hamart
            </a>{" "}
            All rights reserved.
          </p>
          <div className="">
            <img src={payment} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
