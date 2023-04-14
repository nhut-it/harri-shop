import React from "react";
import CardDeal from "../../../components/CardDeal/CardDeal";
import "./Deal.css";
const Deal = () => {
  return (
    <div className="home-deal  bg-white py-[120px]">
      <div className="px-[10px] sm:px-auto sm:container mx-auto ">
        <div className="heading flex flex-col sm:flex-row justify-between sm:items-center mb-[30px]">
          <h2 className="deal-title text-[30px] font-medium relative leading-[1] mb-[40px] sm:mb-0">
            Deal of The Day
          </h2>
          <a
            href="shop"
            className="btn-viewProduct inline-block text-[16px] py-[10px] px-[30px] bg-primary text-white font-medium hover:bg-[#6364DB] transition duration-300 "
          >
            View All Products
          </a>
        </div>
        <div className="list-deal grid grid-cols-1 xl:grid-cols-2 gap-[24px]">
          <CardDeal />
          <CardDeal />
          <CardDeal />
          <CardDeal />
        </div>
      </div>
    </div>
  );
};

export default Deal;
