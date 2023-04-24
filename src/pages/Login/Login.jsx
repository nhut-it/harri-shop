import React from "react";
import { BiUser } from "react-icons/bi";
import { AiFillLock, AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "./Login.css";
import bgLogin from "../../assets/imgs/bg-login.webp";
import bgLogin1 from "../../assets/imgs/bg-login1.webp";
const Login = () => {
  return (
    <div className="h-screen m-auto my-[110px] form-login px-[10px] sm:px-auto">
      <form
        action=""
        className="py-[50px] px-[20px] relative sm:px-[85px] w-full sm:max-w-[516px] mx-auto shadow-2xl"
      >
        <img
          src={bgLogin}
          alt=""
          className="absolute hidden lg:block top-[50%] right-[100%]"
        />
        <div className="text-center mb-[30px]">
          <h2 className="text-[34px] font-space font-bold text-title tracking-tighter">
            Hello Again
          </h2>
          <p className="font-inter text-content tracking-tighter mb-[30px]">
            Enter your credentials to acces your account.
          </p>
        </div>
        <div className="font-inter mb-[22px] relative">
          <input
            type="text"
            placeholder="Enter your email"
            className="border-[1px] text-[15px] h-[60px] px-[55px] w-full focus:outline-[1px] focus:outline focus:outline-primary focus:border-[0]"
          />
          <BiUser className="absolute top-[50%] left-[25px] translate-y-[-50%] text-content text-[20px]" />
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
        <div className="sm:flex  justify-between items-center mb-[25px]">
          <div>
            <input
              type="checkbox"
              id="checkRemember"
              hidden
              className="input-check"
            />
            <label htmlFor="checkRemember" className="checkRemember"></label>

            <label
              htmlFor="checkRemember"
              className="text-[14px] font-inter text-content cursor-pointer"
            >
              Remember me
            </label>
          </div>
          <div>
            <a
              href=""
              className="text-[14px] font-inter text-content hover:text-primary duration-500 transition"
            >
              Forgot Password?
            </a>
          </div>
        </div>
        <button
          type="submit"
          className="py-[17px] px-[30px] mb-[26px] bg-primary hover:bg-title duration-500 transition text-white font-bold font-space w-full text-[18px]"
        >
          Sign In
        </button>
        <p className="text-[14px] font-inter text-content text-center">
          Don’t have an account?{" "}
          <a href="" className="text-primary font-medium">
            Register Now
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

export default Login;
