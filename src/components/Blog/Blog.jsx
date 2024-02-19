import React from "react";
import "./blog.css";
import { useNavigate, useParams } from "react-router-dom";
import blogs from "../../blogs.json";
import Button from "../Button/Button";

// single Blog component according to the selection

const Blog = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const currentBlog = blogs.blogs.filter((blog) => blog.item === id);

  return (
    <div className="GenFlex">
      <div className="blog">
        {currentBlog.map((filteredBlog) => (
          <div key={filteredBlog.item} className="blog_contents GenFlex">
            <div className="lg_blog_title GenFlex">
              <h1>{filteredBlog.title}</h1>
              <p
                className="lg_explore_more_btn"
                onClick={() => navigate("/blogs")}
              >
                Explore more Blogs{" "}
              </p>
            </div>
            <br />
            <p>{filteredBlog.blog}</p>
            <br />
            {Object.keys(filteredBlog).map((key) =>
              key.startsWith("blog_sec") && filteredBlog[key] ? (
                <div key={key}>
                  <p>{filteredBlog[key]}</p>
                  <br />
                </div>
              ) : null
            )}
            <br />
            <img
              src={require(`../../assets/images/${filteredBlog.image}`)}
              alt={filteredBlog.name}
              className="blog_img"
            />
          </div>
        ))}
        <div
          className="sm_more_blogs_btn GenFlex"
          onClick={() => navigate("/blogs")}
        >
          <Button content={"Explore More Blogs"} bg={"transparent"} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
