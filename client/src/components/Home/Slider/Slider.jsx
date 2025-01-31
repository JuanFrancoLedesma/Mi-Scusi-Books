import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import { Link } from "react-router-dom";
export default function SliderImg({ books }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="containerx">
      <div className="containerSlider">
        <div className="titleTop">
          <h3>Top 10 Best Selling Books</h3>
        </div>
        <Slider {...settings}>
          {books.map((el) => (
            <div className="card" key={el._id}>
              <div className="card-top">
                <img src={el.image} alt="" />
              </div>
              <b><span style={{ textTransform: "uppercase" }}>{el.name[0].toLocaleUpperCase() + el.name.slice(1)}</span></b>
              <Link
                to={`/book_details/${el._id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="buyBook">
                  <button className="buttonBuy">View</button>
                  <p>
                    $
                    {el.price.toString().length === 2
                      ? el.price + ".00"
                      : el.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
