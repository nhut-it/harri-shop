import React from "react";
import { BiUser } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillLock, AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import bgLogin from "../../assets/imgs/bg-login.webp";
import bgLogin1 from "../../assets/imgs/bg-login1.webp";
const Register = () => {
  return (
    <div className=" m-auto my-[110px] form-login px-[10px] sm:px-auto">
      <form
        action=""
        className="py-[50px] block px-[20px] relative sm:px-[85px] w-full md:max-w-[616px] mx-auto shadow-2xl"
      >
        <img
          src={bgLogin}
          alt=""
          className="absolute hidden lg:block top-[50%] right-[100%]"
        />
        <div className="text-center mb-[30px]">
          <h2 className="text-[34px] font-space font-bold text-title tracking-tighter">
            Register Now!
          </h2>
          <p className="font-inter text-content tracking-tighter mb-[30px]">
            You can signup with you social account below
          </p>
        </div>
        <div className="font-inter mb-[22px] relative">
          <input
            type="text"
            placeholder="Enter your name"
            className="border-[1px] text-[15px] h-[60px] px-[55px] w-full focus:outline-[1px] focus:outline focus:outline-primary focus:border-[0]"
          />
          <BiUser className="absolute top-[50%] left-[25px] translate-y-[-50%] text-content text-[20px]" />
        </div>
        <div className="font-inter mb-[22px] relative">
          <input
            type="text"
            placeholder="Enter your email"
            className="border-[1px] text-[15px] h-[60px] px-[55px] w-full focus:outline-[1px] focus:outline focus:outline-primary focus:border-[0]"
          />
          <HiOutlineMail className="absolute top-[50%] left-[25px] translate-y-[-50%] text-content text-[20px]" />
        </div>
        <div className="font-inter mb-[22px] relative">
          <AiFillLock className="absolute top-[50%] left-[25px] translate-y-[-50%] text-content text-[20px]" />
          <input
            type="text"
            placeholder="Password"
            className="border-[1px] text-[15px] h-[60px] px-[55px] w-full focus:outline-[1px] focus:outline focus:outline-primary focus:border-[0]"
          />
          <div className="cursor-pointer">
            <AiFillEye className="absolute top-[50%] right-[25px] translate-y-[-50%] text-content text-[20px]" />
            <AiFillEyeInvisible className="absolute top-[50%] right-[25px] translate-y-[-50%] text-content text-[20px]" />
          </div>
        </div>
        <div className="font-inter mb-[22px] relative">
          <AiFillLock className="absolute top-[50%] left-[25px] translate-y-[-50%] text-content text-[20px]" />
          <input
            type="text"
            placeholder="Confirm Password"
            className="border-[1px] text-[15px] h-[60px] px-[55px] w-full focus:outline-[1px] focus:outline focus:outline-primary focus:border-[0]"
          />
          <div className="cursor-pointer">
            <AiFillEye className="absolute top-[50%] right-[25px] translate-y-[-50%] text-content text-[20px]" />
            <AiFillEyeInvisible className="absolute top-[50%] right-[25px] translate-y-[-50%] text-content text-[20px]" />
          </div>
        </div>

        <button
          type="submit"
          className="py-[17px] px-[30px] mb-[26px] bg-primary hover:bg-title duration-500 transition text-white font-bold font-space w-full text-[18px]"
        >
          Sign Up
        </button>
        <p className="text-[14px] font-inter text-content text-center">
          Already have an account?
          <a href="/login" className="text-primary font-medium ml-1">
            Log in
          </a>{" "}
        </p>
        <img
          src={bgLogin1}
          alt=""
          className="absolute top-[50%] left-[95%] hidden lg:block"
        />
      </form>
    </div>
  );
};

export default Register;
