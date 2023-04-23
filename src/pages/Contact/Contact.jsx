import React from "react";
import { BsYoutube, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import contactIcon1 from "../../assets/imgs/contact-icon-1.webp";
import contactIcon2 from "../../assets/imgs/contact-icon-2.webp";
import contactIcon3 from "../../assets/imgs/contact-icon-3.webp";
import { Checkbox } from "antd";
import "./Contact.css";
import contactLocation1 from "../../assets/imgs/contact-location-1.webp";
import contactLocation2 from "../../assets/imgs/contact-location-2.webp";
import contactLocation3 from "../../assets/imgs/contact-location-3.webp";
const Contact = () => {
  return (
    <div className="contact-page">
      <section className=" bg-contact bg-center">
        <div className="px-[10px] sm:container mx-auto text-center pt-[98px] pb-[280px] font-space">
          <span className="text-[14px] text-title font-medium mb-[9px]">
            GET TO KNOW US
          </span>
          <h1 className="text-[30px] md:text-[45px] lg:text-[70px] text-title font-bold leading-[1] tracking-tighter max-w-[800px] mx-auto">
            Have a project in mind? Let’s talk.
          </h1>
        </div>
      </section>
      <section className=" px-[10px] sm:container mx-auto translate-y-[-16%] md:translate-y-[-23%] lg:translate-y-[-50%] ">
        <div className=" list-contact grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <div className="py-[60px] px-[20px] 2xl:px-[40px] shadow-md bg-white">
            <div>
              <img
                src={contactIcon1}
                alt="icon contact"
                className="mx-auto mb-[37px]"
              />
            </div>
            <div className="font-space text-center">
              <p className="text-[18px] underline text-[#96969c] mb-[15px] font-bold">
                Contact
              </p>
              <a
                href="mailto:location@website.com"
                className="text-[22px] text-title font-medium inline-block hover:text-primary transition duration-300"
              >
                location@website.com
              </a>

              <a
                href="tel:+(602) 762 472 96"
                className="text-[22px] text-title font-medium inline-block hover:text-primary transition duration-300"
              >
                +(602) 762 472 96
              </a>
            </div>
          </div>
          <div className="py-[60px] px-[20px] 2xl:px-[40px] shadow-md bg-white">
            <div>
              <img
                src={contactIcon2}
                alt="icon contact"
                className="mx-auto mb-[37px]"
              />
            </div>
            <div className="font-space text-center">
              <p className="text-[18px] underline text-[#96969c] mb-[15px] font-bold">
                Location
              </p>
              <a
                href="#"
                className="text-[22px] text-title font-medium inline-block hover:text-primary transition duration-300"
              >
                88 New South Head Rd, Triple, New York
              </a>
            </div>
          </div>
          <div className="py-[60px] px-[20px] 2xl:px-[40px] shadow-md bg-white">
            <div>
              <img
                src={contactIcon3}
                alt="icon contact"
                className="mx-auto mb-[37px]"
              />
            </div>
            <div className="font-space text-center">
              <p className="text-[18px] underline text-[#96969c] mb-[15px] font-bold">
                Social Media
              </p>
              <p className="text-[22px] text-title font-medium inline-block ">
                Follow on social media
              </p>

              <div className="list-social flex justify-center mt-[10px]">
                <a
                  href="#"
                  className="mr-[18px] text-[#B9BDD0] hover:text-primary duration-300 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="mr-[18px] text-[#B9BDD0] hover:text-primary duration-300 transition"
                >
                  <BsTwitter />
                </a>
                <a
                  href="#"
                  className="mr-[18px] text-[#B9BDD0] hover:text-primary duration-300 transition"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className=" text-[#B9BDD0] hover:text-primary duration-300 transition"
                >
                  <BsYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" font-space">
        <div className="sm:container mx-auto px-[10px]">
          <div className=" border-[2px] contact-form px-[10px] py-[30px] sm:pt-[43px] sm:px-[50px] sm:pb-[55px] lg:pt-[73px] lg:pb-[95px] lg:px-[100px]">
            <form action="" className="form-contact">
              <label
                htmlFor=""
                className="text-[30px] text-title font-medium mb-[30px] tracking-tighter inline-block"
              >
                Send a message
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mb-[20px]">
                <div>
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Enter your name"
                    className="px-[25px] bg-[#f5f5f8] text-[16px] h-[60px] w-full focus:outline-primary focus:outline-1 focus:outline border-[1px] focus:bg-white
                    duration-500 transition
                    "
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="email"
                    id=""
                    placeholder="Enter your email"
                    className="px-[25px] bg-[#f5f5f8] text-[16px] h-[60px] w-full focus:outline-primary focus:outline focus:outline-1 border-[1px] focus:bg-white
                    duration-500 transition
                    "
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Mobile no"
                    className="px-[25px] bg-[#f5f5f8] text-[16px] h-[60px] w-full focus:outline-primary focus:outline focus:outline-1 border-[1px] focus:bg-white
                    duration-500 transition
                    "
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Company"
                    className="px-[25px] bg-[#f5f5f8] text-[16px] h-[60px] w-full focus:outline-primary focus:outline focus:outline-1 border-[1px] focus:bg-white
                    duration-500 transition
                    "
                  />
                </div>
                <div className="md:col-span-2">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Your Message"
                    className="px-[25px] pt-[20px] bg-[#f5f5f8] text-[16px]  w-full focus:outline-primary  outline-content focus:outline-1 focus:outline  border-[1px] focus:bg-white
                  duration-500 transition
                  "
                  ></textarea>
                </div>
              </div>
              <div className="mb-[25px]">
                <input
                  hidden
                  type="checkbox"
                  name=""
                  id="checkPolicy"
                  className="input-check mr-2 translate-y-1"
                />
                <label htmlFor="checkPolicy" className="checkPolicy"></label>
                <label
                  htmlFor="checkPolicy"
                  className="text-[14px] font-inter text-content cursor-pointer leading-[1]"
                >
                  I am bound by the terms of the Service I accept Privacy
                  Policy.
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="text-[16px] text-white bg-primary py-[12px] px-[47px] font-bold hover:bg-black inline-block duration-300 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="location pt-[110px] pb-[130px] font-space">
        <div className="px-[10px] sm:container mx-auto">
          <span className="text-[14px] mb-[9px] inline-block text-title font-medium">
            LOCATIONS
          </span>
          <h2 className="text-[40px] font-bold text-title mb-[25px] max-w-[500px] leading-[1] tracking-tighter">
            Come and visit our offices around the world
          </h2>
          <ul className="list-locaiton">
            <li className="py-[30px] flex flex-col md:flex-row  justify-between md:items-center border-b-[1px] gap-[24px]">
              <div className="basis-[30%]">
                <p className="text-[20px] font-bold">Australia Office</p>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:grow">
                <img
                  src={contactLocation1}
                  alt="location"
                  className="w-[54px] h-[54px]"
                />
                <div className="flex flex-col md:pl-[40px] text-[15px] text-content">
                  <a
                    href="mailto:contact.location@website.com"
                    className="hover:text-primary duration-300 transition"
                  >
                    contact.location@website.com
                  </a>
                  <a
                    href="tel:686-324-6838"
                    className="hover:text-primary duration-300 transition"
                  >
                    686-324-6838
                  </a>
                </div>
              </div>
              <div>
                <a
                  href="#"
                  className="text-[15px] whitespace-nowrap inline-block font-medium hover:text-white py-[9px] px-[31px] border-[1px] hover:bg-primary duration-300 transition"
                >
                  View Location
                </a>
              </div>
            </li>
            <li className="py-[30px] flex flex-col md:flex-row  justify-between md:items-center border-b-[1px] gap-[24px]">
              <div className="basis-[30%]">
                <p className="text-[20px] font-bold">San Francisco Office</p>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:grow">
                <img
                  src={contactLocation2}
                  alt="location"
                  className="w-[54px] h-[54px]"
                />
                <div className="flex flex-col md:pl-[40px] text-[15px] text-content">
                  <a
                    href="mailto:contact.location@website.com"
                    className="hover:text-primary duration-300 transition"
                  >
                    contact.location@website.com
                  </a>
                  <a
                    href="tel:686-324-6810"
                    className="hover:text-primary duration-300 transition"
                  >
                    686-324-6810
                  </a>
                </div>
              </div>
              <div>
                <a
                  href="#"
                  className="text-[15px] whitespace-nowrap inline-block font-medium hover:text-white py-[9px] px-[31px] border-[1px] hover:bg-primary duration-300 transition"
                >
                  View Location
                </a>
              </div>
            </li>
            <li className="py-[30px] flex flex-col md:flex-row  justify-between md:items-center border-b-[1px] gap-[24px]">
              <div className="basis-[30%]">
                <p className="text-[20px] font-bold">Egpyt Office</p>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:grow">
                <img
                  src={contactLocation3}
                  alt="location"
                  className="w-[54px] h-[54px]"
                />
                <div className="flex flex-col md:pl-[40px] text-[15px] text-content">
                  <a
                    href="mailto:contact.location@website.com"
                    className="hover:text-primary duration-300 transition"
                  >
                    contact.location@website.com
                  </a>
                  <a
                    href="tel:786-324-6810"
                    className="hover:text-primary duration-300 transition"
                  >
                    786-324-6810
                  </a>
                </div>
              </div>
              <div>
                <a
                  href="#"
                  className="text-[15px] whitespace-nowrap inline-block font-medium hover:text-white py-[9px] px-[31px] border-[1px] hover:bg-primary duration-300 transition"
                >
                  View Location
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contact;
