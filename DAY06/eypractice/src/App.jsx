import React from "react";
import c7 from "./assets/c7.avif";
import c8 from "./assets/c8.avif";
import c9 from "./assets/c9.avif";
import croptop from "./assets/croptop.jfif";
import dresses from "./assets/dresses.jfif";
import ethnic from "./assets/ethnic.jfif";
import pro from "./assets/pro.jfif";
import tsh from "./assets/tsh.jfif";
import women from "./assets/women.jfif";
import womenfoot from "./assets/womenfoot.jfif";
import womenwork from "./assets/womenwork.jfif";

function App() {
  const carouselImageStyle = {
    height: "500px",
    width: "100%",
    objectFit: "cover",
  };

  const cardImageStyle = {
    height: "300px",
    width: "100%",
    objectFit: "cover",
  };

  const cardStyle = {
    width: "18rem",
    margin: "1rem auto",
  };

  const cardTextStyle = {
    textAlign: "center",
    fontWeight: "bold",
  };

  const cardItems = [
    { src: tsh, text: "T-Shirts" },
    { src: croptop, text: "Crop Tops" },
    { src: women, text: "Casuals" },
    { src: womenwork, text: "Work Wear" },
    { src: ethnic, text: "Ethnic Wear" },
    { src: dresses, text: "Dresses" },
    { src: pro, text: "Prom Dresses" },
    { src: womenfoot, text: "Foot Wear" },
  ];

  return (
    <>
      {/* Carousel Section */}
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={c7} style={carouselImageStyle} alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={c8} style={carouselImageStyle} alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={c9} style={carouselImageStyle} alt="Slide 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Cards Section */}
      <div className="container text-center mt-4">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {cardItems.map((item, index) => (
            <div className="col" key={index}>
              <div style={cardStyle} className="card">
                <img src={item.src} style={cardImageStyle} alt={item.text} />
                <div className="card-body">
                  <p style={cardTextStyle}>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;