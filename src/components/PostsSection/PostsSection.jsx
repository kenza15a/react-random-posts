import React, { useState } from "react";
import Post from "../Post/Post";
import { motion } from "framer-motion";
import Loading from "../Loading/Loading";
import Button from "../Button/Button";
import { fetchRandomPosts } from "../../services/fetchRandomPosts";
const PostsSection = () => {
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
  return (
    <section className="w-full" id="posts" name="posts">
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
          <motion.div
            className="flex flex-row gap-4 justify-center py-4 flex-wrap"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                variants={postVariants}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <Post title={post.title} content={post.body} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default PostsSection;
