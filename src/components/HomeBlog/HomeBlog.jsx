import React from "react";
import "./homeblog.css";
import Button from "../Button/Button";
import { blogs } from "../../blogs";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const openAllBlogs = () => {
    navigate("/blogs");
  };

  const evenHour = new Date().getHours() % 2 === 0;

  const showBlog = evenHour ? blogs[0] : blogs[1];

  const { item, name, image, title, description } = showBlog;

  return (
    <div className="h_blog GenFlex">
      <div className="h_blog_heading GenFlex">
        <h2>Learn how tea was introduced </h2>
        <p onClick={openAllBlogs}>More Blogs </p>
      </div>
      <div className="h_blog_section GenFlex" key={item}>
        <img src={image} alt={name} className="h_blog_image" />
        <div className="h_blog_title">{title}</div>
        <div className="h_blog_description">{description}</div>
        <div
          className="h_blog_button"
          onClick={() => navigate(`/blogs/${item}`)}
        >
          <Button content={"Read More"} bg={"white"} />
        </div>
      </div>
      <div className="h_sm_more_blogs_btn" onClick={openAllBlogs}>
        <Button content={"More Blogs"} bg={"#362819"} />
      </div>
    </div>
  );
};

export default Blog;
