import React, { useState } from "react";
import Post from "../Post/Post";
import { motion } from "framer-motion";
import Loading from "../Loading/Loading";
import Button from "../Button/Button";
import { fetchRandomPosts } from "../../services/fetchRandomPosts";
import Skeltons from "../skeltons/Skeltons";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../redux/postSlice";

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

  /*   const [posts, setPosts] = useState([]); */
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    try {
      const randomPosts = await fetchRandomPosts();
      dispatch(setPosts(randomPosts)); // Save posts to Redux store
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  /*   const handleClick = async () => {
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
  }; */
  return (
    <section
      className="w-full xl:w-[70vw] flex flex-col justify-center items-center mx-auto gap-4"
      id="posts"
      name="posts"
    >
      <h1 className="italic  text-4xl font-bold text-center text-black">
        Articles aléatoires
      </h1>
      <Button
        buttonText={posts.length ? "Générer de nouveaux articles" : "Charger des articles"}
        handleClick={handleClick}
      />
      {!posts.length && (
        <div className="flex flex-col mt-4  py-4 items-center justify-center">
          <p className="text-center text-lg animate-pulse">
            Aucun article chargé.. Générez vos artciles !
          </p>
          <Skeltons />
        </div>
      )}
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col mt-4  py-4 items-center justify-center">
          <motion.div
            className="flex flex-row gap-4 justify-center py-4 flex-wrap"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            {/* {posts.map((post, index) => (
              <motion.div
                key={post.id}
                variants={postVariants}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <Post title={post.title} content={post.body} />
              </motion.div>
            ))} */}
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                variants={postVariants}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <Post id={post.id} title={post.title} content={post.body} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default PostsSection;
