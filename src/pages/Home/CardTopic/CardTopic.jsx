import React from "react";
const CardTopic = ({ img, data }) => {
  return (
    <a href="">
      <img src={img} alt="computer" className="w-full" />
      <p className="py-[21px] text-center text-[16px] font-medium text-content">
        {data}
      </p>
    </a>
  );
};

export default CardTopic;
