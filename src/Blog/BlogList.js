import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => setPosts(data.slice(0, 10))); // Limit to 10 posts
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-primary">Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="card mb-4">
          <div className="card-body">
            <h2 className="card-title">
              <Link to={`/blog/${post.id}`} className="text-decoration-none text-dark">
                {post.title}
              </Link>
            </h2>
            <p className="card-text">{post.body.substring(0, 100)}...</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
