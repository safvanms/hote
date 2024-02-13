import React from "react";
import "./blog.css";
import { useParams } from "react-router-dom";
import blogs from "../../blogs.json";

const Blog = () => {
  const { id } = useParams();

  const currentBlog = blogs.blogs.filter((blog) => blog.item === id);

  return (
    <div className="GenFlex">
      <div className="blog">
        {currentBlog.map((filteredBlog) => (
          <div key={filteredBlog.item} className="blog_contents GenFlex">
            <h1>{filteredBlog.title}</h1>
            <br />
            <p>{filteredBlog.blog}</p>
            <br />
            <p>{filteredBlog.blog_sec_2}</p>
            <br />
            <p>{filteredBlog.blog_sec3}</p>
            <br />
            <p>{filteredBlog.blog_sec4}</p>
            <br />
            <p>{filteredBlog.blog_sec5}</p>
            <br />
            <p>{filteredBlog.blog_sec6}</p>
            <br />
            <p>{filteredBlog.blog_sec7}</p>
            <br />
            <p>{filteredBlog.blog_sec8}</p>
            <br />
            <p>{filteredBlog.blog_sec9}</p>
            <br />
            <p>{filteredBlog.blog_sec10}</p>
            <br />
            <p>{filteredBlog.blog_sec11}</p>
            <br />
            <p>{filteredBlog.blog_sec12}</p>
            <br />
            <p>{filteredBlog.blog_sec13}</p>
            <br />
            <p>{filteredBlog.blog_sec14}</p>
            <br />
            <p>{filteredBlog.blog_sec15}</p>
            <br />
            <p>{filteredBlog.blog_sec16}</p>
            <br />
            <p>{filteredBlog.blog_sec17}</p>
            <br />
            <p>{filteredBlog.blog_sec18}</p>
            <br />
            <p>{filteredBlog.blog_sec19}</p>
            <br />
            <p>{filteredBlog.blog_sec20}</p>
            <br />
            <p>{filteredBlog.blog_sec21}</p>
            <br />
            <p>{filteredBlog.blog_sec22}</p>
            <br />
            <img
              src={filteredBlog.image}
              alt={filteredBlog.name}
              className="blog_img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
