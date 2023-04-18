import React from "react";

import { BsArrowUpRight, BsArrowRight } from "react-icons/bs";
import { RiUserHeartLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { RxCookie } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";

import "./About.css";
import slide1 from "../../assets/imgs/about-gallery-slider-1.webp";
const About = () => {
  return (
    <div>
      <div className="banner bg-about-banner h-[586px] w-full bg-cover bg-center bg-no-repeat relative">
        <div className="absolute block w-full h-full top-0 left-0 right-0 opacity-60 bg-[#03041c]"></div>
        <div className="text-center first-line:font-space  absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] text-white">
          <h5 className="text-[18px]  mb-[7px] font-medium">About us</h5>
          <h2 className="text-[70px] font-medium leading-[1]">
            Welcome to our Harri Shop
          </h2>
        </div>
      </div>
      <div className="px-[10px] sm:container  mx-auto pb-[100px] pt-[115px]">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-x-[24px] gap-y-[25px]">
          <div className="col-span">
            <p className="text-[30px] text-title font-space leading-[1] font-bold">
              It started with a <br className="lg:block hidden" /> bang now we
              are here.
            </p>
          </div>
          <div className="col-span-2 text-[16px] font-inter text-content">
            <p className="mb-[15px]">
              Ut at maximus magna. Vestibulum interdum sapien in facilisis
              imperdiet. Pellentesque habitant morbi tristique senectus et netus
              et malesuada fames ac turpis egestas. Proin ac placerat risus.
              Nullam eget tortor felis. Nulla facilisi.Vestibulum mattis diam
              non luctus elementum. Cras sollicitudin, nisi in semper viverra,
              felis diam consequat mi, quis tincidunt ligula
            </p>
            <p>
              Nam nibh diam, varius quis lectus eget, laoreet cursus metus.
              morbi augue lectus, dapibus eget justo nec, consectetur auctor nis
              luctus neque.!
            </p>
          </div>
        </div>
      </div>
      <div className="service pb-[100px]">
        <div className="px-[10px] sm:container mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[24px] gap-y-[24px]">
            <div className="card-service border-[1px] pt-[40px] pl-[40px] pr-[42px] pb-[37px] hover:shadow-md transition duration-400">
              <div className=" flex justify-between mb-[38px] items-start">
                <RxCookie className="icon-service text-[40px] duration-500 transition" />
                <a
                  href="#"
                  className="hover:text-primary duration-500 transition"
                >
                  <BsArrowUpRight className="text-[20px]" />
                </a>
              </div>
              <div className="    ">
                <p>
                  <span className="inline-block text-[14px] font-inter text-content">
                    10k
                  </span>
                </p>
                <a
                  href=""
                  className="service-link  text-[26px] font-bold font-space relative "
                >
                  Listed Products
                </a>
              </div>
            </div>
            <div className="card-service border-[1px] pt-[40px] pl-[40px] pr-[42px] pb-[37px] hover:shadow-md transition duration-400">
              <div className=" flex justify-between mb-[38px] items-start">
                <RiUserHeartLine className="icon-service text-[40px] duration-500 transition" />
                <a
                  href="#"
                  className="hover:text-primary duration-500 transition"
                >
                  <BsArrowUpRight className="text-[20px]" />
                </a>
              </div>
              <div className="    ">
                <p>
                  <span className="inline-block text-[14px] font-inter text-content">
                    5k
                  </span>
                </p>
                <a
                  href=""
                  className="service-link  text-[26px] font-bold font-space relative "
                >
                  Lovely Customer
                </a>
              </div>
            </div>
            <div className="card-service border-[1px] pt-[40px] pl-[40px] pr-[42px] pb-[37px] hover:shadow-md transition duration-400">
              <div className=" flex justify-between mb-[38px] items-start">
                <BiSupport className="icon-service text-[40px] duration-500 transition" />
                <a
                  href="#"
                  className="hover:text-primary duration-500 transition"
                >
                  <BsArrowUpRight className="text-[20px]" />
                </a>
              </div>
              <div className="    ">
                <p>
                  <span className="inline-block text-[14px] font-inter text-content">
                    24h
                  </span>
                </p>
                <a
                  href=""
                  className="service-link  text-[26px] font-bold font-space relative "
                >
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-carousel overflow-hidden">
        <div className=" px-[10px] sm:container mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            loop={true}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="mySwiper "
            pagination={{
              clickable: true,
            }}
          >
            <SwiperSlide>
              <img
                src={slide1}
                alt="carousel about"
                className="w-[100%] ml-auto mr-auto mb-[10px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide1}
                alt="carousel about"
                className="w-[100%] ml-auto mr-auto mb-[10px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide1}
                alt="carousel about"
                className="w-[100%] ml-auto mr-auto mb-[10px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide1}
                alt="carousel about"
                className="w-[100%] ml-auto mr-auto mb-[10px]"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="awards font-syne pt-[120px]">
        <div className="px-[10px] sm:container  mx-auto">
          <h2 className="title text-[60px] font-space font-bold text-center mb-[55px]">
            Our Awards.
          </h2>
          <div className="award-item border-t-[1px] broder-[#eaeaef] pt-[40px] pb-[43px] flex flex-col sm:flex-row justify-between sm:items-center relative">
            <div className="sm:basis-[284px] mb-[10px] sm:mb-0">
              <h4 className="text-[18px] ">FREE SHIPPING</h4>
            </div>
            <div className="grow">
              <h3 className="award-item-title font-syne relative inline-block leading-[1] text-[30px] font-bold">
                Modern painting award jump
              </h3>
              <p className="text-[16px] text-content">
                Runner Up - “ Decor of the week “
              </p>
            </div>
            <span className="inline-block">
              <a
                href="#"
                className="hover:text-primary transition duration-300 inline-block"
              >
                <BsArrowRight className="text-[25px]" />
              </a>
            </span>
          </div>
          <div className="award-item  border-t-[1px] broder-[#eaeaef] pt-[40px] pb-[43px] flex flex-col sm:flex-row justify-between sm:items-center relative">
            <div className="sm:basis-[284px] mb-[10px] sm:mb-0">
              <h4 className="text-[18px] ">FREE RETURN</h4>
            </div>
            <div className="grow">
              <h3 className=" award-item-title font-syne relative inline-block leading-[1] text-[30px] font-bold">
                People's choice: best design
              </h3>
              <p className="text-[16px] text-content">
                Runner Up - “ Decor of the week “
              </p>
            </div>
            <span className="inline-block">
              <a
                href="#"
                className="hover:text-primary transition duration-300 inline-block"
              >
                <BsArrowRight className="text-[25px]" />
              </a>
            </span>
          </div>
          <div className="award-item border-t-[1px] broder-[#eaeaef] pt-[40px] pb-[43px] flex flex-col sm:flex-row justify-between sm:items-center relative">
            <div className="sm:basis-[284px] mb-[10px] sm:mb-0">
              <h4 className="text-[18px] ">SECURE PAYMENT</h4>
            </div>
            <div className="grow">
              <h3 className=" award-item-title font-syne relative inline-block leading-[1] text-[30px] font-bold">
                Webby's, Site of the Year
              </h3>
              <p className="text-[16px] text-content">
                Runner Up - “ Decor of the week “
              </p>
            </div>
            <span className="inline-block">
              <a
                href="#"
                className="hover:text-primary transition duration-300 inline-block"
              >
                <BsArrowRight className="text-[25px]" />
              </a>
            </span>
          </div>
          <div className="award-item border-t-[1px] broder-[#eaeaef] pt-[40px] pb-[43px] flex flex-col sm:flex-row justify-between sm:items-center relative">
            <div className="sm:basis-[284px] mb-[10px] sm:mb-0">
              <h4 className="text-[18px] ">BEST QUALITY</h4>
            </div>
            <div className="grow">
              <h3 className=" award-item-title font-syne relative inline-block leading-[1] text-[30px] font-bold">
                Awwwards site of the day
              </h3>
              <p className="text-[16px] text-content">
                Runner Up - “ Decor of the week “
              </p>
            </div>
            <span className="inline-block">
              <a
                href="#"
                className="hover:text-primary transition duration-300 inline-block"
              >
                <BsArrowRight className="text-[25px]" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
