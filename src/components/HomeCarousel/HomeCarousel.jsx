import React from "react";
import slider from "../../assets/imgs/slider-1.webp";
import { Carousel } from "antd";
import { BiRightArrowAlt } from "react-icons/bi";
import "./HomeCarousel.css";
import { motion } from "framer-motion";
const HomeCarousel = () => {
  return (
    <Carousel
      // afterChange={onChange}
      // autoplay={true}
      dots={false}
      // effect="scrollx"
    >
      <div className="slide">
        <div className="h-[800px] grid grid-cols-1 md:grid-cols-2 container mx-auto ">
          <div className="carousel-content flex items-center">
            <div>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="sub-title mb-[26px] text-[16px] font-normal tracking-[0.48px] leading-[17.92px] pl-[12px] border-l-2 border-primary"
              >
                <span>Best Ear </span>
                <br />
                <span> Headphones </span>
              </motion.p>
              <motion.h1
                initial={{ y: "20px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="lg:text-[88px] text-[40px] md:text-[70px] font-medium leading-[42px] md:leading-[60px]  lg:leading-[84px] max-w-[570px]"
              >
                Music To <br className="hidden lg:block" /> Fill Your Heart
              </motion.h1>
              <motion.a
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                // whileHover={{ scale: 1.2 }}
                href="#"
                className=" btn-shop px-[33px] py-[7px] text-[14px] font-bold  border-[2px] border-black mt-[60px] inline-block"
              >
                Shop Now{" "}
                <BiRightArrowAlt className="icon-arrow inline text-[25px] ml-[-8px]" />
              </motion.a>
            </div>
          </div>
          <div className="carousel-img flex items-end relative ">
            <span className="absolute top-[10%] right-[-10%]  sm:top-[20%] sm:right-[-10%] -z-10 cicle-carousel bg-white rounded-full h-[500px] w-[500px] sm:w-[550px] sm:h-[550px] "></span>
            <span className="absolute top-[10%] right-[-10%]  sm:top-[20%] sm:right-[-10%] -z-10 cicle-carousel-1 bg-white rounded-full h-[500px] w-[500px] sm:w-[550px] sm:h-[550px] "></span>
            <img
              src={slider}
              alt="carousel slider harri shop"
              className="w-[300px]   sm:w-full mt-auto ml-auto"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="h-[800px] grid grid-cols-1 md:grid-cols-2 container mx-auto">
          <div className="carousel-content flex items-center">
            <div>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="sub-title mb-[26px] text-[16px] font-normal tracking-[0.48px] leading-[17.92px] pl-[12px] border-l-2 border-primary"
              >
                <span>Best Ear </span>
                <br />
                <span> Headphones </span>
              </motion.p>
              <motion.h1
                initial={{ y: "20px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="lg:text-[88px] text-[40px] leading-[42px] md:leading-[60px]  md:text-[70px] font-medium  lg:leading-[84px] max-w-[570px]"
              >
                Find your <br className="hidden lg:block" /> Beats Studio.
              </motion.h1>
              <motion.a
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                // whileHover={{ scale: 1.2 }}
                href="#"
                className=" btn-shop px-[33px] py-[7px] text-[14px] font-bold  border-[2px] border-black mt-[60px] inline-block"
              >
                Shop Now{" "}
                <BiRightArrowAlt className="icon-arrow inline text-[25px] ml-[-8px]" />
              </motion.a>
            </div>
          </div>
          <div className="carousel-img flex items-end relative">
            <span className="absolute top-[10%] right-[-10%]  sm:top-[20%] sm:right-[-10%] -z-10 cicle-carousel bg-white rounded-full h-[500px] w-[500px] sm:w-[550px] sm:h-[550px] "></span>
            <span className="absolute top-[10%] right-[-10%]  sm:top-[20%] sm:right-[-10%] -z-10 cicle-carousel-1 bg-white rounded-full h-[500px] w-[500px] sm:w-[550px] sm:h-[550px] "></span>
            <img
              src={slider}
              alt="carousel slider harri shop"
              className="w-[300px]   sm:w-full mt-auto ml-auto"
            />
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
