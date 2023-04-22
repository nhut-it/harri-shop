import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { BsGrid } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { renderCloseIcon } from "antd/es/modal/PurePanel";
import { Collapse } from "antd";
import CardProduct from "../Home/CardProduct/CardProduct";
import Pagination from "../../components/Pagination/Pagination";
import "./Shop.css";
import CheckBox from "../../components/CheckBox/CheckBox";
const listSort = [
  "Short Filtering",
  "Latest Product",
  "Price low to high",
  "Price high to low",
];
const listBrands = [
  "TECLAST",
  "Apple",
  "Aisuo",
  "Polaroid",
  "ZUMIMALL",
  "ViewSonic",
  "Guild",
];
const listColors = ["Green", "Orange", "Black", "White", "Yellow", "Pink"];
const listPrice = [
  "$10.00 - $49.00",
  "$50.00 - $99.00",
  "$100.00 - $199.0",
  "$200.00+",
];
const { Panel } = Collapse;
const Shop = () => {
  const location = useLocation();

  const [openSort, setOpenSort] = useState(false);
  const [checkBrands, setCheckBrands] = useState(false);

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

  const renderBransSort = () => {
    return listBrands.map((brand, index) => {
      return (
        <div className="flex items-center mb-2" key={index}>
          <CheckBox label={brand} />
        </div>
      );
    });
  };
  const renderColorSort = () => {
    return listColors.map((color, index) => {
      return (
        <div className="flex items-center mb-2 " key={index}>
          <CheckBox label={color} circle />
        </div>
      );
    });
  };
  const renderPriceSort = () => {
    return listPrice.map((price, index) => {
      return (
        <div className="flex items-center mb-2 " key={index}>
          <CheckBox label={price} inputType={"radio"} />
        </div>
      );
    });
  };
  const panelSort = {
    border: 0,
    paddingBlock: "10px",
  };
  return (
    <div className="shop-page">
      <section className="sm:container mx-auto px-[10px] pt-[13px] pb-[55px]">
        <Breadcrumb url={location.pathname} />
      </section>
      <section className="sort-product font-roboto text-content mb-[50px]">
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
      <section className="sidebar-sort">
        <div className="sm:container mx-auto px-[10px]">
          <div className="flex flex-col md:flex-row justify-between gap-[24px]">
            {/* <div className="order-2 md:order-1  md:basis-[35%]">
              <Collapse
                defaultActiveKey={["1"]}
                expandIconPosition="end"
                bordered={false}
                // size="large"
              >
                <Panel header="Planer & Virtual" key="1" style={panelSort}>
                  <ul className="list-collapse list-disc pl-[20px]">
                    <li className="hover:text-primary">
                      <a href="#">Planer</a>
                    </li>
                    <li className="hover:text-primary">
                      <a href="#">Virtual</a>
                    </li>
                  </ul>
                </Panel>
                <Panel
                  header="Computers Moni tor & Laptop"
                  key="2"
                  style={panelSort}
                >
                  <ul className="list-collapse list-disc pl-[20px]">
                    <li className="hover:text-primary">
                      <a href="#">Computer</a>
                    </li>
                    <li className="hover:text-primary">
                      <a href="#">Laptop</a>
                    </li>
                    <li className="hover:text-primary" id="">
                      <a href="#">Monitor</a>
                    </li>
                  </ul>
                </Panel>
                <Panel
                  header="Exercise Bike  & Shaver Clean"
                  key="3"
                  style={panelSort}
                >
                  <ul className="list-collapse list-disc pl-[20px]">
                    <li className="hover:text-primary">
                      <a href="#">Exercise-Bike</a>
                    </li>
                    <li className="hover:text-primary">
                      <a href="#">Shaver-Clean</a>
                    </li>
                  </ul>
                </Panel>
                <Panel
                  header="Wireless & Wat ches"
                  key="4"
                  style={panelSort}
                  className="border-b-2"
                >
                  <ul className="list-collapse list-disc pl-[20px]">
                    <li className="hover:text-primary">
                      <a href="#">Wireless</a>
                    </li>
                    <li className="hover:text-primary">
                      <a href="#">Watch</a>
                    </li>
                  </ul>
                </Panel>
                <Panel
                  header="Camera Bluetoo th & Headset"
                  key="5"
                  style={panelSort}
                >
                  <ul className="list-collapse list-disc pl-[20px]">
                    <li className="hover:text-primary">
                      <a href="#">Camera</a>
                    </li>
                    <li className="hover:text-primary">
                      <a href="#">Bluetooth</a>
                    </li>
                    <li className="hover:text-primary">
                      <a href="#">Headset</a>
                    </li>
                  </ul>
                </Panel>
                <Panel header="Ipad Phone & T ablets" key="6" style={panelSort}>
                  <ul className="list-collapse list-disc pl-[20px]">
                    <li>
                      <a href="#" className="hover:text-primary">
                        Phone
                      </a>
                    </li>
                    <li className="hover:text-primary">
                      <a href="#">Tablet</a>
                    </li>
                    <li className="hover:text-primary">
                      <a href="#">IPad</a>`
                    </li>
                    `
                  </ul>
                </Panel>
                <form action="">
                  <Panel header="Brands" key="7 " style={panelSort}>
                    <div className="brands">
                      <div className=" border-[1px] relative my-[25px]  focus:outline-primary focus:border-primary">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Search brands"
                          className="w-full pl-[20px] pr-[45px] leading-[46px] focus:border-none outline focus-visible:outline-primary outline-1 "
                        />
                        <button className="absolute text-[20px] hover:text-primary text-content top-[50%] right-[30px] translate-y-[-50%]">
                          <FiSearch />
                        </button>
                      </div>
                      <div className="">{renderBransSort()}</div>
                    </div>
                  </Panel>
                  <Panel header="Color" key="8" style={panelSort}>
                    <div className="mt-[20px]">{renderColorSort()}</div>
                  </Panel>
                  <Panel header="Price" key="9" style={panelSort}>
                    <div className="mt-[20px]">{renderPriceSort()}</div>
                  </Panel>
                  <button type="reset">reset</button>
                </form>
              </Collapse>
            </div> */}
            <div className="order-1 md:order-2 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                <CardProduct />
                <CardProduct />
                <CardProduct />
              </div>
              <div className="pagination mt-[58px] md:text-center">
                <Pagination totalPosts={30} postsPerPage={9} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
