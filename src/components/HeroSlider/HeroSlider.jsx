import React from "react";
import { Link } from "react-router-dom";
import "./HeroSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSlider({ movies }) {
  const base_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper-hero"
      >
        {movies.map((movie) => (
          <SwiperSlide
            key={crypto.randomUUID()}
            style={{
              background: `url(${base_url}${movie.backdrop_path}) no-repeat center`,
              backgroundSize: "cover",
            }}
          >
            <div className="details-wrapper">
              <div className="movie-info">
                <div className="text">
                  <h1>{movie.title}</h1>
                  <p>
                    {movie.overview.split(" ").slice(0, 20).join(" ") + "..."}
                  </p>
                  <span>Year {movie.release_date.split("-").at(0)}</span>
                  <span>|</span>
                  <span>Rating {movie.vote_average}</span>
                  <div className="more">
                    <Link to={`/movie/${movie.id}`}>More</Link>
                  </div>
                </div>

                <div className="poster">
                  <img src={`${base_url}${movie.poster_path}`} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
