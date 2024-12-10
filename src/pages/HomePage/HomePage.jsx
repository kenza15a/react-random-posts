import React, { useState } from "react";
import Navbar from "../../components/Nabar/Navbar";
import Footer from "../../Footer/Footer";
import Button from "../../components/Button/Button";
import Post from "../../components/Post/Post";
import { fetchRandomPosts } from "../../services/fetchRandomPosts";
import Loading from "../../components/Loading/Loading";
/* import { motion } from "framer-motion"; */
const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const randomPosts = await fetchRandomPosts(); // appelant  le service pour récupérer les posts
      setPosts(randomPosts); //mise a jour de l'etat avec les posts récupérés
      setTimeout(() => {
        setPosts(randomPosts);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Error fetching posts in HomePage:", error);
    }
  };
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <div className=" flex flex-col min-h-screen">
        <Navbar />
        <main className="bg-gray-100 flex-grow w-full justify-center items-center py-8">
          <h1 className="text-4xl font-bold text-center text-black">
            Articles aléatoires
          </h1>
          {!posts.length && (
            <p className="text-center text-lg animate-pulse">
              Aucun article chargé..
            </p>
          )}
          {loading ? (
            <Loading />
          ) : (
            <div className="flex flex-col mt-4  py-4 items-center justify-center">
              <Button
                buttonText="Générer de nouveaux articles"
                handleClick={handleClick}
              />
              <div
                id="posts"
                name="posts"
                className="flex flex-row gap-4 justify-center py-4 flex-wrap"
              >
                {posts.map((post) => (
                  <Post key={post.id} title={post.title} content={post.body} />
                ))}
              </div>
              {/*  <motion.div
                id="posts"
                name="posts"
                className="flex flex-row gap-4 justify-center py-4 flex-wrap"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {posts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    variants={postVariants}
                    transition={{ duration: 0.5, delay: index * 0.3 }} // Adjust animation timing
                  >
                    <Post title={post.title} content={post.body} />
                  </motion.div> 
                ))}
              </motion.div>*/}
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
