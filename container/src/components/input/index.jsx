/* eslint-disable react/prop-types */

import React from "react";

const sizes = {
  xsmall: { input: "h-7 rounded-sm", icon: "h-5 w-5" },
  small: { input: "h-8 rounded-sm", icon: "h-5 w-5" },
  medium: { input: "h-11 rounded-md", icon: "h-5 w-5" },
  large: { input: "h-14 rounded-md", icon: "h-6 w-6" },
};

const Input = ({
  placeholder,
  value,
  onChange,
  onBlur,
  color,
  size,
  type,
  className,
  componentLeft,
  componentRight,
}) => {
  const height = sizes[size]["input"];
  
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-lg focus:outline-none">
        {componentLeft}
      </div>

      <input
        type={type}
        className={`${height}  w-full border border-${color}-500 ${componentLeft && type === "tel" ? 'pl-[108px]' : componentLeft && type !== "tel" ? 'pl-5xl' : 'pl-lg'}  ${componentRight ? 'pr-5xl' : 'pr-lg'} ${className} text-neutral-800 px-sm py-xs justify-start items-center gap-xxs inline-flex focus:outline-none focus:border-primary-400 focus:ring focus:ring-primary-200 `}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-lg focus:outline-none">
        {componentRight}
      </div>
    </div>
  );
};

export default Input;
