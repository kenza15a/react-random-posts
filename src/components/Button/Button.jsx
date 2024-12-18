import clsx from "clsx";
import React from "react";

const Button = ({
  buttonText,
  handleClick,
  buttonType,
  className,
  ...props
}) => {
  return (
    <button
      type={buttonType}
      className={clsx(
        "bg-[#9333EA] hover:bg-blue-700 hover:scale-105  text-white text-sm cursor-pointer rounded  transition duration-300 ease-in-out px-2 h-max py-2 ",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {buttonText}
    </button>
  );
};

export default Button;
