import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchPostById } from "../../services/fetchRandomPosts";
import Loading from "../../components/Loading/Loading";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { IoMdArrowBack } from "react-icons/io";

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
      <section className="w-full h-full">
        <Breadcrumbs articleTitle={postDetails.title} />

        <div className="flex flex-col gap-4 w-[90vw] md:w-[100vw] justify-center items-center px-6 md:px-12 py-8 md:py-12">
          <h1 className="text-4xl font-bold mb-4">{postDetails.title}</h1>
          <p className="text-lg text-gray-700">
            {postDetails.body}
            {postDetails.body}
            {postDetails.body}
            {postDetails.body}
            {postDetails.body}
          </p>
          <Link to="/" className="text-[#9333EA] text-sm font-bold mt-12">
            <span className="flex flex-row gap-2 justify-center items-center">
              {" "}
              <IoMdArrowBack />
              Retour à la liste des articles
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default PostDetails;
