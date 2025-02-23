import React, { Component } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery-bundle.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-zoom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgZoom from "lightgallery/plugins/zoom";
import "./ImageGallery.css"; // Import CSS for Masonry layout

class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async () => {
    try {
      const response = await fetch(
        "https://api.unsplash.com/photos/random?count=10&client_id=jk1zs7Or6uA-AbnUaC4w6SQSataZd5RB3AKtOfMp_70"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (Array.isArray(data)) {
        this.setState({ images: data });
      } else {
        this.setState({ images: [] });
      }
    } catch (error) {
      console.error("Error fetching images:", error);
      this.setState({ images: [] });
    }
  };

  render() {
    return (
      <div className="container text-center py-4">
        <h2 className="mb-4">Image Generator</h2>
        <button
          onClick={this.fetchImages}
          className="btn btn-primary mb-4"
        >
          Load New Images
        </button>

        {this.state.images.length === 0 ? (
          <p className="text-muted">No images loaded yet.</p>
        ) : (
          <div className="masonry-gallery">
            {this.state.images.map((image) => (
              image.urls ? (
                <div className="masonry-item" key={image.id}>
                  <LightGallery speed={500} plugins={[lgThumbnail, lgFullscreen, lgZoom]}>
                    <a href={image.urls.full} className="d-block">
                      <img
                        src={image.urls.small}
                        alt={image.alt_description || "Image"}
                        className="img-fluid rounded shadow-sm w-100"
                      />
                    </a>
                  </LightGallery>
                </div>
              ) : null
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default ImageGallery;
