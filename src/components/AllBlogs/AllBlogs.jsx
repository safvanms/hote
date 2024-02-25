import React, { useEffect, useState } from "react";
import "./all_blogs.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import useContentful from "../useContentful";

// All Blogs component

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { getAllBlogs } = useContentful();

  useEffect(() => {
    const fetchBlogs = async () => {
      const fetchedBlogs = await getAllBlogs();
      setBlogs(fetchedBlogs);
    };
    fetchBlogs();
    //eslint-disable-next-line react-hooks/exhaustive-deps
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
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map(
            (
              { id, name, title, image } // Adjust mapping based on Contentful response structure
            ) => (
              <div className="blogs_contents GenFlex" key={id}>
                <img
                  src={`https:${image}`} // Assuming the image URL is absolute
                  alt={name}
                  className="blog_image"
                  loading="lazy"
                />
                <div className="blogs_title">{title}</div>
                <div
                  className="blogs_button"
                  onClick={() => handleOpenBlog(id)}
                >
                  <Button content={"Read more"} bg={"white"} />
                </div>
              </div>
            )
          )
        ) : searchTerm ? (
          <div>Sorry, no blogs match your search term.</div>
        ) : (
          <div>Searching blogs...</div>
        )}
      </div>
    </div>
  );
};

export default AllBlogs;
