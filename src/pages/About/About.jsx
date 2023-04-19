import React, { useState } from "react";

import { BsArrowUpRight, BsArrowRight, BsFillPlayFill } from "react-icons/bs";
import { RiUserHeartLine } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { RxCookie } from "react-icons/rx";
import { HiOutlineMinusSm } from "react-icons/hi";
import { AiOutlinePlus, AiOutlineArrowRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "react-slick";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";
import brand2 from "../../assets/imgs/brand-2.webp";
import brand3 from "../../assets/imgs/brand-3.webp";
import brand4 from "../../assets/imgs/brand-4.webp";
import brand5 from "../../assets/imgs/brand-5.webp";
import brand6 from "../../assets/imgs/brand-6.webp";
import brand7 from "../../assets/imgs/brand-7.webp";
import brand8 from "../../assets/imgs/brand-8.webp";
import "./About.css";
import slide1 from "../../assets/imgs/about-gallery-slider-1.webp";
import bgfqa from "../../assets/imgs/faq-video.jpg";
import { Collapse, Modal } from "antd";
import CardTeam from "../../components/CardTeam/CardTeam";
import team1 from "../../assets/imgs/team-1.webp";
import team2 from "../../assets/imgs/team-2.webp";
import team3 from "../../assets/imgs/team-3.webp";
import team4 from "../../assets/imgs/team-4.webp";
import team5 from "../../assets/imgs/team-5.webp";
import team6 from "../../assets/imgs/team-6.webp";
const { Panel } = Collapse;
const About = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    centerPadding: "24px",

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          // infinite: true,
          centerPadding: "24px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          centerPadding: "24px",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          centerPadding: "24px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          centerPadding: "24px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          centerPadding: "24px",
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
    ],
  };
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
      <div className=" pb-[100px] pt-[115px]">
        <div className="px-[10px] sm:container  mx-auto ">
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
                imperdiet. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Proin ac placerat
                risus. Nullam eget tortor felis. Nulla facilisi.Vestibulum
                mattis diam non luctus elementum. Cras sollicitudin, nisi in
                semper viverra, felis diam consequat mi, quis tincidunt ligula
              </p>
              <p>
                Nam nibh diam, varius quis lectus eget, laoreet cursus metus.
                morbi augue lectus, dapibus eget justo nec, consectetur auctor
                nis luctus neque.!
              </p>
            </div>
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
      <div className="awards font-syne py-[120px] ">
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
      <div className="fqa relative font-space">
        <div className="fqa-video bg-about-fqa ">
          <div className="play-video  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[90px] h-[90px] border-[1px] rounded-full flex items-center justify-center bg-white z-10">
            <button onClick={showModal}>
              <BsFillPlayFill className="text-[40px] text-primary" />
            </button>

            <Modal
              open={open}
              // onOk={handleOk}
              // confirmLoading={confirmLoading}
              closable={false}
              footer=""
              onCancel={handleCancel}
              width={800}
              afterClose={(e) => {
                console.log(e);
              }}
            >
              <iframe
                width="100%"
                height="461"
                src="https://www.youtube.com/embed/FWrz3bT-YoE"
                title="10 Best Royalty Free Epic Battle Songs"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Modal>
            <span className="cicle-video"></span>
            <span className="cicle-video-1"></span>
          </div>
        </div>
        <div className="grid md:grid-cols-12">
          <div className="col-span-5"></div>
          <div className="fqa-content relative md:col-span-7 border-2 border-[#525258] border-r-0 pt-[95px] lg:pr-[20px] lg:pl-[70px] 2xl:pr-[120px] 2xl:pl-[160px] pb-[100px] ">
            <div className="">
              <span className="text-[18px] mb-[12px] font-medium">
                Get in touch with us to see how
              </span>
              <h3 className="text-[50px] leading-[1] mb-[40px] text-title font-bold  tracking-tighter">
                Provide smart and flexible digital services
              </h3>
            </div>
            <Collapse
              defaultActiveKey={["1"]}
              accordion
              expandIcon={({ isActive }) =>
                isActive ? (
                  <HiOutlineMinusSm />
                ) : (
                  <AiOutlinePlus className="text-primary" />
                )
              }
              expandIconPosition="end"
            >
              <Panel
                header="Can I cancel my account at any time?"
                key="1"
                // showArrow={false}
              >
                <p>
                  Non similique culpa in provident quos sit commodi beatae ea
                  laborum suscipit id autem velit aut iusto odio et deleniti
                  quis et doloremque enim vel consequuntur quos.
                </p>
              </Panel>
              <Panel
                header="What happens after the license expires?"
                key="2"
                // showArrow={false}
              >
                <p>
                  Non similique culpa in provident quos sit commodi beatae ea
                  laborum suscipit id autem velit aut iusto odio et deleniti
                  quis et doloremque enim vel consequuntur quos.
                </p>
              </Panel>
              <Panel
                header="Does Harry have any documentations?"
                key="3"
                // showArrow={false}
              >
                <p>
                  Non similique culpa in provident quos sit commodi beatae ea
                  laborum suscipit id autem velit aut iusto odio et deleniti
                  quis et doloremque enim vel consequuntur quos.
                </p>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
      <div className="team pt-[110px]">
        <div className="px-[10px] sm:container  mx-auto">
          <div className="heading flex justify-between mb-[58px] items-end">
            <h3 className="text-[70px] font-bold text-title leading-[1] font-space tracking-tighter">
              One{" "}
              <span className="text-primary relative">
                Team
                <svg
                  width="220"
                  height="27"
                  viewBox="0 0 220 27"
                  fill="none"
                  className="absolute bottom-[-12%] left-0 right-0"
                >
                  <path
                    d="M19.6407 15.2948C33.4481 12.464 47.2752 10.3031 61.24 8.63481C48.6133 9.07487 35.9865 9.33103 23.3729 9.29162C22.4743 9.29162 21.7396 8.54942 21.7396 7.64958C21.7462 6.74318 22.4808 6.00754 23.386 6.00754C60.8398 6.12577 138.464 3.57728 175.839 1.69222C185.81 1.18648 195.563 0.739778 205.534 0.477052C208.079 0.41137 210.63 0.280046 213.175 0.188091C214.5 0.142114 217.924 -0.0286769 218.403 0.0041639C219.761 0.0895499 219.964 1.27179 219.984 1.4557C220.036 1.8892 220.003 2.53954 219.242 3.03215C219.19 3.07156 218.895 3.25544 218.232 3.33426C181.198 7.74806 103.764 7.1897 66.6842 11.3079C51.0861 13.0485 35.6783 15.3606 20.3032 18.5133C14.9311 19.6102 11.8678 20.3064 7.57803 21.4493C14.649 23.3081 21.8971 24.3393 29.2173 24.891C29.2173 24.891 19.6407 27.474 12.386 25.9286C5.13134 24.3833 4.9674 24.221 1.33353 23.0321C0.493934 22.7628 0.238148 22.2375 0.133199 21.955C-0.0963783 21.3639 -0.0701445 20.7136 0.539874 20.1159C0.703857 19.9583 1.01869 19.7349 1.51064 19.5773C2.15346 19.3737 3.48499 19.1636 4.08189 18.9994C9.9853 17.3705 13.1535 16.6216 19.6407 15.2948Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>{" "}
              , <br /> Many Talents
            </h3>
            <a
              href=""
              className="text-[14px] text-title  font-space font-bold hover:text-primary"
            >
              Join Our Team <AiOutlineArrowRight className="inline-block" />{" "}
            </a>
          </div>
          <Swiper
            // slidesPerView={1}
            spaceBetween={24}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <CardTeam
                img={team1}
                name={"Leslie Alexander"}
                title={"Founder-CO"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardTeam
                img={team2}
                name={"Annette Black"}
                title={"Product Designer"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardTeam
                img={team3}
                name={"Kathryn Murphy"}
                title={"Creative Director"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardTeam img={team4} name={"Guy Hawkins"} title={"Developer"} />
            </SwiperSlide>
            <SwiperSlide>
              <CardTeam
                img={team5}
                name={"Deli Yanky"}
                title={"Consulting Officer"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardTeam
                img={team6}
                name={"Zin Denvar"}
                title={"Sales Manager"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="brand overflow-hidden pt-[110px]">
        {/* <Slider dots="true" slidesToShow={3}>
         
         
        </Slider> */}
        <div className="mb-[10px]">
          <Slider {...settings}>
            <div>
              {" "}
              <div className="w-[90%] mx-auto  border-[1px] h-[160px] flex items-center justify-center rounded-lg">
                <img
                  src={brand2}
                  alt=""
                  className=" mx-auto w-[50%] lg:w-auto"
                />
              </div>
            </div>
            <div>
              {" "}
              <div className="w-[90%] mx-auto  border-[1px] h-[160px] flex items-center justify-center rounded-lg">
                <img
                  src={brand3}
                  alt=""
                  className=" mx-auto w-[50%] lg:w-auto"
                />
              </div>
            </div>
            <div>
              {" "}
              <div className="w-[90%] mx-auto  border-[1px] h-[160px] flex items-center justify-center rounded-lg">
                <img
                  src={brand4}
                  alt=""
                  className=" mx-auto w-[50%] lg:w-auto"
                />
              </div>
            </div>
            <div>
              {" "}
              <div className="w-[90%] mx-auto  border-[1px] h-[160px] flex items-center justify-center rounded-lg">
                <img
                  src={brand5}
                  alt=""
                  className=" mx-auto w-[50%] lg:w-auto"
                />
              </div>
            </div>
            <div>
              {" "}
              <div className="w-[90%] mx-auto  border-[1px] h-[160px] flex items-center justify-center rounded-lg">
                <img
                  src={brand6}
                  alt=""
                  className=" mx-auto w-[50%] lg:w-auto"
                />
              </div>
            </div>
            <div>
              {" "}
              <div className="w-[90%] mx-auto  border-[1px] h-[160px] flex items-center justify-center rounded-lg">
                <img
                  src={brand7}
                  alt=""
                  className=" mx-auto w-[50%] lg:w-auto"
                />
              </div>
            </div>
            <div>
              {" "}
              <div className="w-[90%] mx-auto  border-[1px] h-[160px] flex items-center justify-center rounded-lg">
                <img
                  src={brand8}
                  alt=""
                  className=" mx-auto w-[50%] lg:w-auto"
                />
              </div>
            </div>
          </Slider>
        </div>
        <div>
          <Slider {...settings} rtl="true">
            <div>
              {" "}
              <div className="w-[90%] mx-auto  border-[1px] h-[160px] flex items-center justify-center rounded-lg">
                <img
                  src={brand2}
                  alt=""
                  className=" mx-auto w-[50%] lg:w-auto"
                />
              </div>
            </div>
            <div>
              {" "}
              <div className="w-[90%] mx-auto  border-[1px] h-[160px] flex items-center justify-center rounded-lg">
                <img
                  src={brand3}
                  alt=""
                  className=" mx-auto w-[50%] lg:w-auto"
                />
              </div>
            </div>
            <div>
              {" "}
              <div className="w-[90%] mx-auto  border-[1px] h-[160px] flex items-center justify-center rounded-lg">
                <img
                  src={brand4}
                  alt=""
                  className=" mx-auto w-[50%] lg:w-auto"
                />
              </div>
            </div>
            <div>
              {" "}
              <div className="w-[90%] mx-auto  border-[1px] h-[160px] flex items-center justify-center rounded-lg">
                <img
                  src={brand5}
                  alt=""
                  className=" mx-auto w-[50%] lg:w-auto"
                />
              </div>
            </div>
            <div>
              {" "}
              <div className="w-[90%] mx-auto  border-[1px] h-[160px] flex items-center justify-center rounded-lg">
                <img
                  src={brand6}
                  alt=""
                  className=" mx-auto w-[50%] lg:w-auto"
                />
              </div>
            </div>
            <div>
              {" "}
              <div className="w-[90%] mx-auto  border-[1px] h-[160px] flex items-center justify-center rounded-lg">
                <img
                  src={brand7}
                  alt=""
                  className=" mx-auto w-[50%] lg:w-auto"
                />
              </div>
            </div>
            <div>
              {" "}
              <div className="w-[90%] mx-auto  border-[1px] h-[160px] flex items-center justify-center rounded-lg">
                <img
                  src={brand8}
                  alt=""
                  className=" mx-auto w-[50%] lg:w-auto"
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default About;
