import React from "react";

const Loading = () => {
  return (
    <div className="animate-pulse text-black duration-1000 ease-in-out flex flex-row  gap-3 justify-center items-center py-12">
      <span className="border-4 border-[#9333EA] rounded-full w-6 h-6 bg-white inline-block animate-spin"></span>
      <p className="animate-pulse text-lg font-semibold"> Chargement en cours...</p>
      
    </div>
  );
};

export default Loading;
