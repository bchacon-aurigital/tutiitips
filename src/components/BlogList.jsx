import React from "react";
import { SectionWrapper } from "../hoc";

import BlogThumbnail from "./BlogThumbnail";
import { blogPosts } from "../blogData";

const BlogList = () => {
  return (
    <div className="bg-blog-sec-bg mx-auto min-h-screen bg-cover flex flex-col gap-8 md:pb-16 items-center pb-8">
      {/* <h1 className='text-secondary drop-shadow-2xl uppercase mx-auto text-6xl tracking-widest pt-8'>BLOG</h1> */}
      <div className='bg-white w-full text-center text-5xl text-black mix-blend-screen px-8 py-4 my-8 tracking-wide'>BLOG</div>

      {blogPosts.map((post) => (
        <BlogThumbnail
          key={post.id}
          // id={blog.id}
          // title={blog.title}
          // summary={blog.summary}
          post={post}
        />
      ))}
    </div>
  );
};

export default SectionWrapper(BlogList, "blog");

