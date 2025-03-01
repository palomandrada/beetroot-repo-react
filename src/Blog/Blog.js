import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Fetch Blog Posts from API
export const BlogPage = () => {
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
              <Link to={`/blog/${post.id}`} className="text-decoration-none text-dark">{post.title}</Link>
            </h2>
            <p className="card-text">{post.body.substring(0, 100)}...</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Single Post View
export const SinglePost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(data => setPost(data));
  }, [postId]);

  if (!post) return <h2 className="text-danger text-center mt-5">Loading...</h2>;

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-primary">{post.title}</h1>
      <p className="lead">{post.body}</p>
      <Link to="/blog" className="btn btn-secondary mt-3">Back to Blog</Link>
    </div>
  );
};
