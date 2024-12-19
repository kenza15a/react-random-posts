import clsx from "clsx";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Button from "../Button/Button";

const Post = ({ title, content, id, className, ...props }) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    // Mouse position relative to the card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Map mouse position to rotation angles
    const rotateAmountX = (mouseY - centerY) / 10;
    const rotateAmountY = (centerX - mouseX) / 10;
    rotateX.set(rotateAmountX);
    rotateY.set(rotateAmountY);
  };
  // Reset rotation when the mouse leaves
  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const handleClick = () => {
    navigate(`/post/${id}`);
  };

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX: useTransform(rotateX, (x) => x),
        rotateY: useTransform(rotateY, (y) => y),
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={clsx(
        " hover:shadow-[#9333EA] hover:shadow-lg bg-white w-80 min-h-60 md:min-h-60 shadow-md rounded-lg p-4 flex flex-col gap-4 items-center justify-center py-4",
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
      <Button
        buttonText="Lire l'article "
        handleClick={handleClick}
        className=" hover:scale-110 hover:shadow-xl"
      />
    </motion.div>
  );
};

export default Post;
