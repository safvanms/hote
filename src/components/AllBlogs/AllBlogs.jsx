import React from "react";
import "./all_blogs.css";
import { blogs } from "../../blogs";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";


// All Blogs component 


const AllBlogs = () => {
  const navigate = useNavigate();

  const handleOpenBlog = (id) => {
    navigate(`/blogs/${id}`);
  };
  return (
    <div className="all_blogs_container">
      <h1>Trending Blogs </h1>
      <div className="all_blogs GenFlex">
        {blogs.map(({ item, name, title, image }) => (
            <div className="blogs_contents GenFlex" key={item}>
              <img src={image} alt={name} className="blog_image" />
              <div className="blogs_title">{title}</div>
              <div
                className="blogs_button"
                onClick={() => handleOpenBlog(item)}
              >
                <Button content={"Read More"} bg={"white"} />
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
