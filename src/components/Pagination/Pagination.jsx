import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
const Pagination = ({ totalPosts, postsPerPage }) => {
  let pages = [];
  for (let i = 1; i <= totalPosts / postsPerPage; i++) {
    pages.push(i);
  }
  return (
    <div className="font-space font-medium">
      <button className="px-[19px] py-[12px] leading-[1.2] mr-[8px] border-[1px] inline-block hover:bg-primary hover:text-white transition duration-300">
        <BsArrowLeft className="inline mr-1" />
        Prev
      </button>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            className="w-[44px] h-[44px] border-[1px] inline-block mr-[8px] hover:bg-primary hover:text-white transition duration-300"
          >
            {page}
          </button>
        );
      })}
      <button className="px-[19px] py-[12px] leading-[1.2] inline-block whitespace-nowrap border-[1px] hover:bg-primary hover:text-white transition duration-300">
        Next <BsArrowRight className="inline mr-1" />
      </button>
    </div>
  );
};

export default Pagination;
