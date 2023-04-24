import React from "react";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Keyboard, Scrollbar } from "swiper";
import CardTopic from "./CardTopic/CardTopic";
import "./Home.css";
import computer from "../../assets/imgs/computer.webp";
import exercise from "../../assets/imgs/exercise.webp";
import spinning from "../../assets/imgs/spinning.webp";
import ipad from "../../assets/imgs/ipad.webp";
import camera from "../../assets/imgs/camera-blu.webp";
import vr from "../../assets/imgs/vr.webp";
import watches from "../../assets/imgs/watches.webp";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import CardProduct from "./CardProduct/CardProduct";
import Deal from "./Deal/Deal";
import HomeBanner from "./HomeBanner/HomeBanner";
import Feature from "./Feature/Feature";
import FormSubscribe from "../../components/FormSubscribe/FormSubscribe";
import SidebarPopup from "../../components/SidebarPopup/SidebarPopup";
const Home = () => {
  return (
    <div className="bg-white ">
      <HomeCarousel />
      <div className="slide-topic py-[100px]  bg-[#FFFF]">
        <div className="px-[10px] sm:px-auto sm:container mx-auto">
          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            spaceBetween={26}
            loop={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
            }}
            scrollbar={true}
            modules={[Keyboard, Scrollbar]}
            className="mySwiper "
          >
            <SwiperSlide>
              <CardTopic img={computer} data={" Computers Monitor & Laptop"} />
            </SwiperSlide>
            <SwiperSlide>
              <CardTopic
                img={exercise}
                data={" Exercise Bike & Shaver Clean"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardTopic img={spinning} data={" Spinning Reel & Kettle"} />
            </SwiperSlide>
            <SwiperSlide>
              <CardTopic img={camera} data={" Camera Bluetooth & Headset"} />
            </SwiperSlide>
            <SwiperSlide>
              <CardTopic img={ipad} data={"Ipad Phone & Tablets"} />
            </SwiperSlide>
            <SwiperSlide>
              <CardTopic img={vr} data={" Planer & Virtual"} />
            </SwiperSlide>
            <SwiperSlide>
              <CardTopic img={watches} data={" Wireless & Watches"} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="home-productPopular bg-white pb-[20px]">
        <div className="px-[10px] sm:px-auto sm:container mx-auto  ">
          <Tabs>
            <div className="flex  md:flex-row flex-col md:justify-between md:items-center pb-[30px]">
              <h2 className="text-[30px] mb-[40px] md:mb-0 font-bold pl-[10px] border-l-4 border-primary">
                Popular Products
              </h2>
              <TabList className="flex text-sm">
                <Tab className="mr-[25px] cursor-pointer tab-product">
                  <button className="px-[5px]">Top Rated</button>
                </Tab>
                <Tab className="mr-[25px] cursor-pointer tab-product">
                  <button className="px-[5px]">Best selling</button>
                </Tab>
                <Tab className="mr-[25px] cursor-pointer tab-product">
                  <button className="px-[5px]">Lastest Product</button>
                </Tab>
              </TabList>
            </div>
            <TabPanel>
              <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-[50px]">
                <div className="product-item">
                  <CardProduct />
                </div>
                <div className="product-item">
                  <CardProduct />
                </div>
                <div className="product-item">
                  <CardProduct />
                </div>
                <div className="product-item">
                  <CardProduct />
                </div>
                <div className="product-item">
                  <CardProduct />
                </div>
                <div className="product-item">
                  <CardProduct />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <Deal />
      <div className="home-banner ">
        <HomeBanner />
      </div>
      <div className="feature pt-[80px] pb-[20px]">
        <Feature />
      </div>
      <div className="subcribe bg-home-subcribe py-[50px] bg-no-repeat bg-center bg-cover">
        <FormSubscribe />
      </div>
      {/* <SidebarPopup></SidebarPopup> */}
    </div>
  );
};

export default Home;
