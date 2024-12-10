import clsx from "clsx";
import React from "react";

const Post = ({ title, content, className, ...props }) => {
  return (
    <div
      className={clsx(
        "bg-white w-80 min-h-60  md:min-h-60 shadow-md rounded-lg p-4 flex flex-col gap-2 items-center justify-center hover:scale-105 transition duration-300 ease-in-out",
        className
      )}
      {...props}
    >
      <h2 className="text-l font-bold text-[#9333EA]">{title}</h2>
      <p className="text-[#374151] text-sm">{content}</p>
    </div>
  );
};

export default Post;
