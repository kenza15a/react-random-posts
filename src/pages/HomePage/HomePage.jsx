import React from "react";
import Navbar from "../../components/Nabar/Navbar";
import Footer from "../../components/Footer/Footer";

import PostsSection from "../../components/PostsSection/PostsSection";
const HomePage = () => {
  return (
    <>
      <div className=" flex flex-col min-h-screen ">
        

        <main className="bg-gray-100 flex-grow w-full h-full justify-center items-center py-8">
          <PostsSection />
        </main>

      
      </div>
    </>
  );
};

export default HomePage;
