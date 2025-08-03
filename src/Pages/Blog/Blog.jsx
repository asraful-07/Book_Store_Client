import React from "react";
import OurBlog from "../../Components/OurBlog";
import FeaturedPosts from "../../Components/FeaturedPosts";
import Newsletter from "../../Components/Newsletter";

const Blog = () => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <OurBlog />
      <FeaturedPosts />
      <Newsletter />
    </div>
  );
};

export default Blog;
