import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

// Pages
import MovieFinder from './MovieFinder/MovieFinder';
import Punishment from './Punishment/MinCalculator';
import ImageGallery from './ImageGallery/ImageGallery';
import { BlogPage, SinglePost } from "./Blog/Blog";

export default function App() {
    return (
        <div className="container" style={{ paddingTop: "70px" }}>
            {/* Navbar */}
            <nav className="navbar navbar-dark bg-dark fixed-top px-3">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand fw-bold">My Homework</Link>
                    <div>
                        <ul className="navbar-nav d-flex flex-row gap-4">
                            <li className="nav-item">
                                <Link to="/movies" className="nav-link text-white">Movie Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/punishment" className="nav-link text-white">Image Generator</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/gallery" className="nav-link text-white">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link text-white">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<MovieFinder />} />
                <Route path="/punishment" element={<Punishment />} />
                <Route path="/gallery" element={<ImageGallery />} />

                {/* Blog Routes */}
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:postId" element={<SinglePost />} />
            </Routes>
        </div>
    );
}
