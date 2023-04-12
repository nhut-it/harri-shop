import React from "react";
import iphone14 from "../../../assets/imgs/iphone14.webp";
import "./CardProduct.css";
import { AiOutlineShoppingCart, AiOutlineEye } from "react-icons/ai";
import { RiHeart2Fill } from "react-icons/ri";
import { BiLink } from "react-icons/bi";
import { Tooltip } from "antd";
const CardProduct = () => {
  return (
    <div className="card-product">
      <div className="card-img relative">
        <img src={iphone14} alt="" />
        <div className="sale absolute top-[18px] left-0 flex flex-col text-[13px]">
          <span className="inline-block bg-primary text-white py-1 px-[10px] mb-[5px]">
            Sale
          </span>
          <span className="inline-block bg-black text-white py-1 px-[10px]">
            -10%
          </span>
        </div>
        <button className="btn-addToCard hover:bg-primary transition duration-300 bg-black absolute text-[15px] py-[7px] px-[25px] font-bold text-white bottom-0 left-0 right-0">
          <AiOutlineShoppingCart className="icon-cart inline mr-1 text-[20px] " />
          Add To Cart
        </button>
        <div className="product-action flex flex-col absolute top-2 right-2">
          <Tooltip title="Add To Wishlist" placement="left">
            <span className="w-[38px] h-[38px] hover:bg-primary hover:text-white transition duration-300 text-center p-2 bg-white shadow-md flex items-center justify-center mb-2">
              <RiHeart2Fill className="text-[20px]" />
            </span>
          </Tooltip>
          <Tooltip title="Quick view" placement="left">
            <span className="w-[38px] h-[38px] hover:bg-primary hover:text-white transition duration-300 text-center p-2 bg-white shadow-md flex items-center justify-center mb-2">
              <AiOutlineEye className="text-[20px]" />
            </span>
          </Tooltip>
          <Tooltip title="product Details" placement="left">
            <span className="w-[38px] h-[38px] hover:bg-primary hover:text-white transition duration-300 text-center p-2 bg-white shadow-md flex items-center justify-center mb-2">
              <BiLink className="text-[20px]" />
            </span>
          </Tooltip>
        </div>
      </div>
      <div className="card-body pt-[14px]">
        <a href="#" className="mb-[8px] text-[14px] hover:text-primary">
          Apple iPhone 14 Pro Max
        </a>
        <p className="font-medium text-content text-[15px]">
          <span className="line-through mr-1">$1860.65</span>
          <span>$1674.59</span>
        </p>
      </div>
    </div>
  );
};

export default CardProduct;
