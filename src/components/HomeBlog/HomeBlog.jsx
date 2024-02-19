import React, { useEffect, useState } from "react";
import "./homeblog.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Home Blog section

const HomeBlog = () => {
  const [number, setNumber] = useState(0);
  const [blogs, setBlogs] = useState([]);

  const navigate = useNavigate();

  const openAllBlogs = () => {
    navigate("/blogs");
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/blogs");
        setBlogs(response.data);
        const randomIndex = Math.floor(Math.random() * response.data?.length);
        if (randomIndex !== number) {
          setNumber(randomIndex);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    // Update blog initially
    fetchBlogs();
  },[number]);

  const showTrendingBlog = blogs[number];

  const { item, name, image, title, description } = showTrendingBlog || {};

  return (
    <div className="h_blog GenFlex">
      <div className="h_blog_heading GenFlex">
        <h2>Learn how tea was introduced </h2>
        <p onClick={openAllBlogs}>More Blogs </p>
      </div>
      {showTrendingBlog && (
        <div className="h_blog_section GenFlex" key={item}>
          <img
            src={require(`../../assets/images/${image}`)}
            alt={name}
            className="h_blog_image"
            loading="lazy"
          />
          <div className="h_blog_label">Trending Blog</div>
          <div className="h_blog_title">{title}</div>
          <div className="h_blog_description">{description}</div>
          <div
            className="h_blog_button"
            onClick={() => navigate(`/blogs/${item}`)}
          >
            <Button content={"Read More"} bg={"white"} />
          </div>
        </div>
      )}
      <div className="h_sm_more_blogs_btn" onClick={openAllBlogs}>
        <Button content={"More Blogs"} bg={"#362819"} />
      </div>
    </div>
  );
};

export default HomeBlog;
