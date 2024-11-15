import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../blogData";
import { blogBg } from "../assets";

const Blog = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load Powr script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.powr.io/powr.js?platform=html";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="blog-entry min-h-screen bg-fixed bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${blogBg})` }}
    >
      <div className="pt-20 md:pt-24 p-10 max-w-3xl mx-auto">
        <p className="text-lg text-verdeclaro text-center my-4">{post.summary}</p>
        <h1 className="text-4xl text-verdeoscuro text-center font-bold mb-12">
          {post.title}
        </h1>
        <div className="text-lg text-verdeoscuro leading-relaxed text-justify space-y-6">
          {post.content}
        </div>
        {/* Sección de comentarios */}
      </div>
      <div className="flex justify-center">
      <div
          className="powr-comments mt-12 w-full lg:w-1/2 "
          id={post.powrId} // ID Powr único
        ></div>
    </div>
    </div>
  );
};

export default Blog;
