import React from "react";
import { AiOutlineMail, AiOutlineShareAlt } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import "./CardTeam.css";
const CardTeam = ({ img, name, title }) => {
  return (
    <div className="card-team  ">
      <div className="card-img relative overflow-hidden">
        <img
          src={img}
          alt="image team"
          className="img-member transition duration-300 "
        />
        <div className="social absolute bottom-[22px] right-[20px]">
          <a
            href="#"
            className="w-[40px] h-[40px] bg-[#6A60D5] text-white inline-block flex items-center justify-center mb-[2px] hover:bg-primary"
          >
            <AiOutlineMail />
          </a>
          <div className="share relative w-[40px] h-[40px] bg-[#6A60D5] text-white inline-block flex items-center justify-center hover:bg-primary cursor-pointer">
            <AiOutlineShareAlt />
            <ul className="list-share-social absolute flex  top-0 right-[100%] ">
              <li className="mr-0">
                <a href="">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="">
                  <FaFacebookF />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card-body pt-[18px]">
        <a
          href="#"
          className="text-[20px] font-inter text-title font-bold hover:text-primary transition duration-300"
        >
          {name}
        </a>
        <p className="text-[12px] font-space text-content uppercase">{title}</p>
      </div>
    </div>
  );
};

export default CardTeam;
