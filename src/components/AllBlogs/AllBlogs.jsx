import React, { useEffect, useState } from "react";
import "./all_blogs.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// All Blogs component

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get("http://localhost:3000/blogs");
      setBlogs(response.data);
    };
    fetchBlogs();
  }, []);

  // navigating into the Blog page according to the id
  const handleOpenBlog = (id) => {
    navigate(`/blogs/${id}`);
  };

  // Filter blogs based on search term and category
  
  const filteredBlogs = blogs.filter((blog) =>
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="all_blogs_container">
      <div className="all_blogs_head GenFlex">
        <h1>Blogs</h1>
        <div className="search_blogs_section GenFlex">
          <input
            type="text"
            placeholder="Search Blogs here ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="all_blogs GenFlex">
        {filteredBlogs.length > 0
          ? filteredBlogs.map(({ item, name, title, image }) => (
              <div className="blogs_contents GenFlex" key={item}>
                <img
                  src={require(`../../assets/images/${image}`)}
                  alt={name}
                  className="blog_image"
                  loading="lazy"
                />
                <div className="blogs_title">{title}</div>
                <div
                  className="blogs_button"
                  onClick={() => handleOpenBlog(item)}
                >
                  <Button content={"Read more"} bg={"white"} />
                </div>
              </div>
            ))
          : "No such blogs found ! "}
      </div>
    </div>
  );
};

export default AllBlogs;
