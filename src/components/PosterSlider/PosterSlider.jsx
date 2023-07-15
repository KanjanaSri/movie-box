import React from "react";
import { Link } from "react-router-dom";
import "./PosterSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Mousewheel, Keyboard } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PosterSlider({ movies, children }) {
  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <h1 className="title">{children}</h1>

      <Swiper
        cssMode={true}
        slidesPerView={6}
        spaceBetween={20}
        loop={true}
        mousewheel={true}
        keyboard={true}
        modules={[Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={crypto.randomUUID()}>
            <div className="movie">
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`${base_url}${movie.poster_path}`}
                  className="images"
                />
                <p>{movie.title}</p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
