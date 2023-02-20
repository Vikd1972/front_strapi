import React, { useEffect, useState } from "react";

import ItemBlog from "./ItemBlog/ItemBlog";
import { API } from "../../../constant";

import BlogWrapper from "./Blog.stayles";

const topics = [
  'physics',
  'astronomy',
  'literature',
  'life',
  'other',
  'all'
]

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${API}/blogs?populate=*`);
      const data = await response.json();
      setBlogs(data.data)
    } catch (error) {
      console.error(error);
    }
  };

  const setFilter = async (topic) => {
    let response;
    if (topic === 'all') {
      response = await fetch(`${API}/blogs?populate=*`);
    } else {
      response = await fetch(`${API}/blogs?populate=*&filters[topic][$eq]=${topic}`);
    }
    const data = await response.json();
    setBlogs(data.data)
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <BlogWrapper>
      <div className="filter">
        <div className="add-message">
          add new message
        </div>
        ---------
        {topics.map((topic) => (
          <div
            key={topic}
            className="topic"
            onClick={() => setFilter(topic)}>
            {topic}
          </div>
        ))}
      </div>
      <div className="blogs">
        {blogs.map((blog) => (
          <ItemBlog key={blog.id} blog={blog.attributes} />
        ))}
      </div>
    </BlogWrapper>
  )
};

export default Blog;