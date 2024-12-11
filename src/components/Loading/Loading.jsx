import React from "react";
import { motion } from "framer-motion";
const Loading = () => {
  const divVariant = {
    step1: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 60 },
  };
  return (
    <motion.div
      variants={divVariant}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 1,
        delay: 0.2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <div className=" text-black duration-1000 ease-in-out flex flex-row  gap-3 justify-center items-center py-12">
        <span className="border-4 border-[#9333EA] rounded-full w-6 h-6 bg-white inline-block animate-spin"></span>
        <p className="animate-pulse text-lg font-semibold">
          {" "}
          Chargement en cours...
        </p>
      </div>
    </motion.div>
  );
};

export default Loading;
