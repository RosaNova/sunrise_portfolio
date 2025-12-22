import React from "react";
import Title from "../components/Title";
import BlogContainer from "@/components/blog/BlogContainer";
import Button from "@/components/button/Button";

const Blog = () => {
  return (
    <div id="blog" className=" px-[70px] bg-greenMain">
      <Title title={"My Blog"} />
      <BlogContainer/>
      
    </div>
  );
};

export default Blog;
