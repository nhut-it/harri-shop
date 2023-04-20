import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { BsGrid } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { renderCloseIcon } from "antd/es/modal/PurePanel";
const listSort = [
  "Short Filtering",
  "Latest Product",
  "Price low to high",
  "Price high to low",
];
const Shop = () => {
  const location = useLocation();
  console.log("location", location);
  const [openSort, setOpenSort] = useState(false);

  const [nameSort, setNameSort] = useState("Short Filtering");
  const renderListSort = () => {
    return listSort.map((item, index) => {
      return (
        <li
          key={index}
          className="leading-[25px] cursor-pointer"
          onClick={() => {
            setNameSort(item);
            setOpenSort(false);
          }}
        >
          {item}
        </li>
      );
    });
  };
  return (
    <div className="shop-page">
      <section className="sm:container mx-auto px-[10px] pt-[13px] pb-[55px]">
        <Breadcrumb url={location.pathname} />
      </section>
      <section className="sort-product font-roboto text-content">
        <div className="sm:container mx-auto px-[10px]">
          <div className="py-[15px] pl-[30px] pr-[20px] border-[1px] flex flex-col md:flex-row gap-[10px] justify-between md:items-center">
            <div>
              <span className="text-[16px]">Showing 1–9 of 27 results</span>
            </div>

            <div className="flex items-center">
              <div className="flex">
                <button className="mr-[20px]">
                  <BsGrid className="w-[21px] h-[21px]" />
                </button>
                <button className="mr-[20px]">
                  <FaBars className="w-[21px] h-[21px]" />
                </button>
              </div>
              <div className="relative grow">
                <div
                  onClick={() => setOpenSort(!openSort)}
                  className="relative px-[20px] text-[14px] min-w-[200px] border-[1px] py-[8px] cursor-pointer"
                >
                  <span>{nameSort}</span>
                  <div className="absolute top-[50%] right-[10px] translate-y-[-50%] trasitio duration-300">
                    <IoIosArrowDown
                      className={
                        openSort
                          ? "rotate-[180deg] trasition duration-500"
                          : "trasition duration-500"
                      }
                    />
                  </div>
                </div>
                <ul
                  className={`${
                    openSort
                      ? "block  scale-100 translate-y-0 opacity-100"
                      : "hidden scale-50 translate-y-[-21px] opacity-0"
                  } text-[14px] py-[12px] origin-top transition duration-[2s] z-10 shadow-md bg-white  absolute top-[100%] border-[1px] w-full pl-[20px]`}
                >
                  {renderListSort()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
