import React from "react";
import { Link } from "react-router-dom";

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
      >
        {movies.map((movie) => (
          <SwiperSlide
            key={crypto.randomUUID()}
            style={{
              background: `url(${base_url}${movie.backdrop_path}) no-repeat center`,
              backgroundSize: "cover",
            }}
          >
            <div className="py-10 lg:py-20 px-7 bg-gradient-to-t from-black/100 to-black/70">
              <div className="sm:w-10/12 md:w-9/12 lg:w-8/12 mx-auto sm:flex gap-10 justify-center items-center flex-row-reverse">
                <img
                  src={`${base_url}${movie.poster_path}`}
                  className="mx-auto rounded-xl w-44 sm:w-52 md:w-60 shadow-2xl"
                />

                <div className="mx-auto pt-5 text-gray-300 sm:py-10">
                  <h1 className="text-gray-200 font-semibold sm:text-2xl md:text-4xl">
                    {movie.title}
                  </h1>
                  <p className="text-xs sm:text-sm md:text-lg my-2 sm:my-4">
                    {movie.overview.split(" ").slice(0, 20).join(" ") + "..."}
                  </p>
                  <div className="text-xs my-2 flex gap-2 divide-x-2">
                    <span>Year {movie.release_date.split("-").at(0)}</span>
                    <span className="px-2">Rating {movie.vote_average}</span>
                  </div>

                  <button className="text-sm border-2 border-[var(--purple)] py-1 px-3 mt-2 rounded-2xl">
                    <Link to={`/movie/${movie.id}`}>View</Link>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
