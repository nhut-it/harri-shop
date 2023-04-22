import React, { useRef, useState } from "react";
import style from "./CheckBox.module.css";
const CheckBox = ({ label, circle, inputType }) => {
  const [isChecked, setIsChecked] = useState(false);
  // console.log("checked", isChecked);
  // const inputRef = useRef();
  // console.log("ref", inputRef);

  return (
    <div>
      <label className="flex items-center ">
        <input
          // ref={inputRef}
          hidden
          readOnly
          type={inputType ? "radio" : "checkbox"}
          name={inputType && "price"}
          checked={isChecked}
        />
        <label
          className={style[`checkbox-brand`]}
          style={
            circle && {
              borderRadius: "50%",
              // backgroundColor: `${label.toLowerCase()}`,
              // borderColor: `${label.toLowerCase()}`,
            }
          }
          onClick={() => {
            setIsChecked(!isChecked);
          }}
        ></label>
        <label
          className="cursor-pointer"
          onClick={() => {
            setIsChecked(!isChecked);
          }}
        >
          {label}
        </label>
      </label>
    </div>
  );
};

export default CheckBox;
