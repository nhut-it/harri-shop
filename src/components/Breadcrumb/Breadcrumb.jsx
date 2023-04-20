import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
const Breadcrumb = ({ url }) => {
  console.log("url", url.trim().split("/"));
  const renderLink = () => {
    const listLink = url.split("/");
    return listLink.map((link, index) => {
      const pageLink = link === "shop" ? "products" : link;
      if (link === "") {
        return "";
      }
      if (index === listLink.length - 1) {
        return (
          <li key={index}>
            <IoIosArrowForward className="inline-block mx-1" />
            <span>{pageLink}</span>
          </li>
        );
      } else {
        return (
          <li key={index}>
            <IoIosArrowForward className="inline-block mx-1" />
            <Link to={pageLink} className="hover:text-primary">
              {pageLink}
            </Link>
          </li>
        );
      }
    });
  };

  return (
    <div>
      <ul className="flex text-content text-[14px]">
        <li className="">
          <AiOutlineHome className="inline mr-1 translate-y-[-3px]" />
          <Link to={"/"} className="hover:text-primary">
            Home
          </Link>
        </li>
        {renderLink()}
      </ul>
    </div>
  );
};

export default Breadcrumb;
