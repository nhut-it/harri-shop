import React from "react";

const FormSubscribe = () => {
  return (
    <div className="px-[10px] sm:px-0 sm:px-auto sm:container mx-auto">
      <div className="py-[20px] px-[30px] sm:py-[60px] sm:px-[70px] bg-white lg:flex justify-between items-center">
        <h2 className="text-[34px] mb-[30px] lg:mb-0 font-bold  leading-[1.4] grow basis-[50%] lg:max-w-[400px]">
          Subscribe for Latest Trends & Offers
        </h2>
        <form
          action=""
          className="border-2 py-[10px] pl-[27px] pr-[10px] grow  flex"
        >
          <input
            type="text"
            name="email"
            id=""
            placeholder="Enter Your Email"
            className="w-full focus:outline-none"
          />
          <button className="py-[10px] px-[42px] bg-black text-white hover:bg-primary transition duraiton-500">
            Subcribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSubscribe;
