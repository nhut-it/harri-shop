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

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <div className="slide-topic py-[100px]  bg-[#FFFF]">
        <div className="container mx-auto">
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
    </div>
  );
};

export default Home;
