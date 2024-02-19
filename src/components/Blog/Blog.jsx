import React, { useEffect, useState } from "react";
import "./blog.css";
import { useNavigate, useParams } from "react-router-dom";
import useContentful from "../useContentful";
import Button from "../Button/Button";

// Single Blog component according to the selection

const Blog = () => {
  const [currentBlog, setCurrentBlog] = useState(null);
  const { getAllBlogs } = useContentful();

  const navigate = useNavigate();
  const { id } = useParams();

  const ID = parseInt(id, 10);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogs = await getAllBlogs();
        const selectedBlog = blogs.find((blog) => parseInt(blog.id, 10) === ID);
        setCurrentBlog(selectedBlog || null);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchBlog();
  }, [ID, getAllBlogs]);

  const { title, content, image } = currentBlog || {};

  return (
    <div className="GenFlex">
      <div className="blog">
        {!currentBlog && <div className="GenFlex">Please wait...</div>}
        <div className="blog_contents GenFlex">
          <div className="lg_blog_title GenFlex">
            <h1>{title}</h1>
            <p
              className="lg_explore_more_btn"
              onClick={() => navigate("/blogs")}
            >
              Explore more Blogs{" "}
            </p>
          </div>
          <br />
          {content?.split("\n\n").map((paragraph, index) => (
            <p key={index} className="blogContent">
              {paragraph}
            </p>
          ))}
          <br />
          <img src={`https:${image}`} alt="Blog_Image" className="blog_img" />
        </div>
        <div
          className="sm_more_blogs_btn GenFlex"
          onClick={() => navigate("/blogs")}
        >
          {currentBlog && (
            <Button content={"Explore More Blogs"} bg={"transparent"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
