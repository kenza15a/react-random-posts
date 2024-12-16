import clsx from "clsx";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const Post = ({ title, content, id, className, ...props }) => {
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleClick = () => {
    navigate(`/post/${id}`); // Use navigate instead of Navigate component
  };
  return (
    <div
      className={clsx(
        "bg-white w-80 min-h-60  md:min-h-60 shadow-md rounded-lg p-4 flex flex-col gap-4 items-center justify-center py-4 hover:scale-105 transition duration-300 ease-in-out ",
        className
      )}
      {...props}
    >
      <Link to={`/post/${id}`} className="text-blue-600 hover:underline">
        <h2 className="text-l font-bold text-[#9333EA] mb-2">{title}</h2>
      </Link>

      <p className="text-[#374151] text-sm max-h-20 overflow-hidden">
        {content}
      </p>
      <Button buttonText="Lire l'article " handleClick={handleClick} />
    </div>
  );
};

export default Post;
