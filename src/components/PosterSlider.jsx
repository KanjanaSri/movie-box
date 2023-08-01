import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Mousewheel, Keyboard } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PosterSlider({ movies, children }) {
  const [width, setWidth] = React.useState(window.innerWidth);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  let slidesPerView = 2;
  if (width > 456) slidesPerView = 3;
  if (width > 639) slidesPerView = 4;
  if (width > 767) slidesPerView = 5;
  if (width > 1023) slidesPerView = 6;

  return (
    <div className="mx-4 md:mx-8 my-16">
      {children}

      <Swiper
        cssMode={true}
        slidesPerView={slidesPerView}
        spaceBetween={20}
        loop={true}
        mousewheel={true}
        keyboard={true}
        modules={[Mousewheel, Keyboard]}
      >
        {movies.map((movie) => (
          <SwiperSlide key={crypto.randomUUID()}>
            <div>
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`${base_url}${movie.poster_path}`}
                  className=" rounded-2xl"
                />
                <p className="text-xs sm:text-sm md:text-base my-1">
                  {movie.title}
                </p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
