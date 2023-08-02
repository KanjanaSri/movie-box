import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[80vh] flex justify-center items-center bg-gradient-to-tr from-indigo-700 to-purple-800">
      <div className="w-3/4 text-xs sm:text-sm md:text-lg">
        <h1 className="font-[Roboto] tracking-wider font-bold text-xl md:text-4xl my-3.5 text-gray-200">
          Discover the World of Movies
        </h1>
        <p className="leading-relaxed my-5 font-thin text-gray-300">
          Our movie app is your gateway to a vast world of films. Whether you're
          a dedicated cinephile or simply enjoy a good movie night, we have you
          covered. With our app, you can explore an extensive library of movies
          from different genres, eras, and countries, right at your fingertips.
          We're passionate about keeping you up to date with the latest in the
          movie industry. Our app features a dedicated section where you can
          find information about upcoming releases, now playing, and popular
          movies. You'll never miss a beat when it comes to the world of movies.
        </p>
      </div>
    </div>
  );
}
