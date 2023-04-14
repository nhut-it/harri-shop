import React from "react";
import { BsTruck } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { TiMessages } from "react-icons/ti";
import { MdOutlinePayment } from "react-icons/md";
import CardFeature from "../../../components/CardFeature/CardFeature";
const Feature = () => {
  return (
    <div className="px-[10px] sm:px-auto sm:container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[24px] gap-y-[24px]">
        <CardFeature
          title={"Free Shipping"}
          content={`Free Shipping for orders
over $120`}
          icon={
            <BsTruck className=" md:text-[20px] xl:text-[20px] icon-feature transition duration-400" />
          }
        />
        <CardFeature
          title={"Refund"}
          content={`Within 30 days for an
          exchange.`}
          icon={
            <AiOutlineDollarCircle className="text-[25px] icon-feature transition duration-400" />
          }
        />
        <CardFeature
          title={"Support"}
          content={`24 hours a day, 7 days
          a week`}
          icon={
            <TiMessages className="text-[25px] icon-feature transition duration-400" />
          }
        />
        <CardFeature
          title={"Payment"}
          content={`Pay with Multiple Credit
            Cards`}
          icon={
            <MdOutlinePayment className="text-[25px] icon-feature transition duration-400" />
          }
        />
      </div>
    </div>
  );
};

export default Feature;
