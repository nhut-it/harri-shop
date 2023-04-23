import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { NavLink, useHref } from "react-router-dom";
import { BsArrow90DegLeft } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import product3 from "../../assets/imgs/product-3.webp";
import product4 from "../../assets/imgs/product-4.webp";
import product6 from "../../assets/imgs/product-6.webp";
import FormSubscribe from "../../components/FormSubscribe/FormSubscribe";
import { Table } from "antd";
const Wishlist = () => {
  const url = useHref();

  return (
    <div className="page-wishlist ">
      <div className="bg-[#F1F1F1]">
        <div className="sm:container mx-auto px-[10px]">
          <div className="py-[100px] text-center font-space">
            <h1 className="text-[70px] mb-[10px] font-bold tracking-tighter leading-[1]">
              My Wishlist
            </h1>
            <div className="text-center flex justify-center">
              <Breadcrumb url={url} />
            </div>
          </div>
        </div>
      </div>
      <div className="py-[100px] ">
        <div className="sm:container mx-auto px-[10px] overflow-x-auto ">
          <div className="py-[17px]  px-[37px] bg-[#F1F1F1] font-space mb-[30px]">
            <NavLink
              to="/shop"
              className="hover:text-primary transition duraiton-500"
            >
              Continue Shopping <BsArrow90DegLeft className="inline" />
            </NavLink>
          </div>
          <table className="border-[1px] w-full font-inter ">
            <thead>
              <tr className="font-inter text-[14px] p-[8px]">
                <th className="border-[1px] p-[8px] ">Images</th>
                <th className="border-[1px] p-[8px]">Product</th>
                <th className="border-[1px] p-[8px] whitespace-nowrap">
                  Unit Price{" "}
                </th>
                <th className="border-[1px] p-[8px]">Quantity</th>
                <th className="border-[1px] p-[8px]">Total</th>
                <th className="border-[1px] p-[8px]">Remove</th>
              </tr>
            </thead>
            <tbody className="text-[#212529]">
              <tr className="border-[1px]">
                <td className="border-r-[1px] text-center py-[10px] px-[20px] ">
                  <a href="# " className="block">
                    <img
                      src={product3}
                      alt="product image"
                      className="w-[125px] h-[125px] max-w-none  block"
                    />
                  </a>
                </td>
                <td className="border-r-[1px] text-center py-[10px] px-[20px]">
                  <a
                    href="#"
                    className="hover:text-primary duration-500 transiton whitespace-nowrap"
                  >
                    TECLAST Tablet Protective Cover Case
                  </a>
                </td>
                <td className="border-r-[1px] text-center py-[10px] px-[20px]">
                  $899
                </td>
                <td className="border-r-[1px] text-center py-[10px] px-[20px]">
                  <div className="border-[1px] flex justify-between items-center py-[5px]">
                    <button className="border-r-[1px] h-[30px] px-[16px]">
                      <AiOutlineMinus />
                    </button>
                    <input
                      type="text"
                      value="0"
                      readOnly
                      className="max-w-[56px] text-center focus:outline-none"
                    />
                    <button className="border-l-[1px] h-[30px] px-[16px]">
                      <AiOutlinePlus />
                    </button>
                  </div>
                </td>
                <td className="border-r-[1px] text-center py-[10px] px-[20px]">
                  $899.00
                </td>

                <td className="border-r-[1px] text-center py-[10px] px-[20px]">
                  <button className="font-bold text-[30px]">
                    <GrFormClose />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="border-r-[1px] text-center py-[10px] px-[20px]">
                  <a href="#">
                    <img
                      src={product4}
                      alt="product image"
                      className="w-[125px] h-[125px] max-w-none"
                    />
                  </a>
                </td>
                <td className="border-r-[1px] text-center py-[10px] px-[20px]">
                  <a
                    href="#"
                    className="hover:text-primary duration-500 transiton whitespace-nowrap"
                  >
                    ViewSonic Professional Monitor
                  </a>
                </td>
                <td className="border-r-[1px] text-center py-[10px] px-[20px]">
                  $299
                </td>
                <td className="border-r-[1px] text-center py-[10px] px-[20px]">
                  <div className="border-[1px] flex justify-between items-center py-[5px]">
                    <button className="border-r-[1px] h-[30px] px-[16px]">
                      <AiOutlineMinus />
                    </button>
                    <input
                      type="text"
                      value="0"
                      readOnly
                      className="max-w-[56px] text-center focus:outline-none"
                    />
                    <button className="border-l-[1px] h-[30px] px-[16px]">
                      <AiOutlinePlus />
                    </button>
                  </div>
                </td>
                <td className="border-r-[1px] text-center py-[10px] px-[20px]">
                  $0.00
                </td>

                <td className="border-r-[1px] text-center py-[10px] px-[20px]">
                  <button className="font-bold text-[30px]">
                    <GrFormClose />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="subcribe bg-home-subcribe py-[50px] bg-no-repeat bg-center bg-cover">
        <FormSubscribe />
      </div>
    </div>
  );
};

export default Wishlist;
