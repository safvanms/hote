import React, { useEffect, useState } from "react";
import "./homeblog.css";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";
import useContentful from "../../useContentful";

// Home Blog section

const HomeBlog = () => {
  const [trendingBlog, setTrendingBlog] = useState([]);

  const navigate = useNavigate();
  const { getAllBlogs } = useContentful();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogs = await getAllBlogs();
        const randomIndex = Math.floor(Math.random() * blogs.length);
        setTrendingBlog(blogs[randomIndex]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlogs();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openAllBlogs = () => {
    navigate("/blogs");
  };

  const { id, title, name, description, image } = trendingBlog || {};

  return (
    <div className="h_blog GenFlex">
      <div className="h_blog_heading GenFlex">
        <h2> Trending Blog for you </h2>
        <p onClick={openAllBlogs}>More Blogs </p>
      </div>
      <div className="h_blog_section GenFlex" key={id}>
        <img
          src={`https:${image}`}
          alt={name}
          className="h_blog_image"
          loading="lazy"
        />
        <div className="h_blog_label">Trending Blog</div>
        <div className="h_blog_title">{title}</div>
        <div className="h_blog_description">{description}</div>
        <div className="h_blog_button" onClick={() => navigate(`/blogs/${id}`)}>
          <Button content={"Read More"} bg={"white"} />
        </div>
      </div>

      <div className="h_sm_more_blogs_btn" onClick={openAllBlogs}>
        <Button content={"More Blogs"} bg={"#362819"} />
      </div>
    </div>
  );
};

export default HomeBlog;
