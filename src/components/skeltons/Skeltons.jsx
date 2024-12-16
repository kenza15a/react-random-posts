import clsx from "clsx";
import React from "react";
import { motion } from "framer-motion";
const Skeltons = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const postVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 0.5, y: 0 },
  };

  return (
    <section
      className="w-full xl:w-[70vw] flex flex-col justify-center items-center mx-auto gap-4"
      id="posts"
      name="posts"
    >
      <div className="flex flex-col mt-4  py-4 items-center justify-center">
        <motion.div
          className="flex flex-row gap-4 justify-center py-4 flex-wrap"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            variants={postVariants}
            transition={{
              duration: 2,
              delay: 0.3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div
              className={clsx(
                "bg-gray-400 w-60 md:w-80 min-h-60  md:min-h-60 shadow-md rounded-lg p-4 flex flex-col gap-2 items-center justify-center hover:scale-105 transition duration-300 ease-in-out"
              )}
            ></div>
          </motion.div>
          <motion.div
            variants={postVariants}
            transition={{
              duration: 2,
              delay: 0.3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div
              className={clsx(
                "bg-gray-400 w-60 md:w-80 min-h-60  md:min-h-60 shadow-md rounded-lg p-4 flex flex-col gap-2 items-center justify-center hover:scale-105 transition duration-300 ease-in-out"
              )}
            ></div>
          </motion.div>
          <motion.div
            variants={postVariants}
            transition={{
              duration: 2,
              delay: 0.3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div
              className={clsx(
                "bg-gray-400 w-60 md:w-80 min-h-60  md:min-h-60 shadow-md rounded-lg p-4 flex flex-col gap-2 items-center justify-center hover:scale-105 transition duration-300 ease-in-out"
              )}
            ></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skeltons;
