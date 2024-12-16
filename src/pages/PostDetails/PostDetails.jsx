import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  fetchRandomPosts,
  fetchPostById,
} from "../../services/fetchRandomPosts";
import Loading from "../../components/Loading/Loading";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const PostDetails = () => {
  const { id } = useParams();
  const [postDetails, setPostDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await fetchPostById(id); // Fetch the specific post by ID
        setPostDetails(post);
      } catch (err) {
        console.error("Error fetching post details:", err);
        setError(err.message);
      }
    };

    fetchPost();
  }, [id]);

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  if (!postDetails) {
    return <Loading />;
  }

  return (
    <>
      {" "}
      <Breadcrumbs articleTitle={postDetails.title} />
      <main className="flex-grow flex-col  w-full justify-center items-center py-8 min-h-screen  px-6">
        <div className=" flex flex-col gap-4  w-[90VW] md:w-[60vw] justify-center items-center px-6  md:px-12 ">
          <h1 className="text-4xl font-bold mb-4">{postDetails.title}</h1>
          <p className="text-lg text-gray-700">
            {postDetails.body}
            {postDetails.body}
            {postDetails.body}
            {postDetails.body}
            {postDetails.body}
          </p>
        </div>
        <Link to="/" className="text-[#9333EA] text-sm font-bold pl-12 mt-12">
          Retour à la liste des articles
        </Link>
      </main>
    </>
  );
};

export default PostDetails;
