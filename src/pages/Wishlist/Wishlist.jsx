import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { NavLink, useHref } from "react-router-dom";
import { BsArrow90DegLeft } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import product3 from "../../assets/imgs/product-3.webp";
import product4 from "../../assets/imgs/product-4.webp";
import product6 from "../../assets/imgs/product-6.webp";
const Wishlist = () => {
  const url = useHref();
  return (
    <div className="page-wishlist">
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
      <div className="pt-[100px]">
        <div className="sm:container mx-auto px-[10px]">
          <div className="py-[17px]  px-[37px] bg-[#F1F1F1] font-space">
            <NavLink
              to="/shop"
              className="hover:text-primary transition duraiton-500"
            >
              Continue Shopping <BsArrow90DegLeft className="inline" />
            </NavLink>
          </div>
          <table>
            <thead>
              <tr>
                <th>Images</th>
                <th>Product</th>
                <th>Unit Price </th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={product3} alt="product image" />
                </td>
                <td>TECLAST Tablet Protective Cover Case</td>
                <td>$899</td>
                <td>
                  <div className="">
                    <button>
                      <AiOutlineMinus />
                    </button>
                    <input type="text" value="0" readOnly />
                    <button>
                      <AiOutlinePlus />
                    </button>
                  </div>
                </td>
                <td>$899.00</td>
                <tr>
                  <button>
                    <GrFormClose />
                  </button>
                </tr>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
