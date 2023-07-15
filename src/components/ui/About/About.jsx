import "./About.css";

export default function About() {
  return (
    <div className="abount-container">
      <div className="about-content">
        <h1>Discover the World of Movies</h1>
        <p>
          Our movie app is your gateway to a vast world of films. Whether you're
          a dedicated cinephile or simply enjoy a good movie night, we have you
          covered. With our app, you can explore an extensive library of movies
          from different genres, eras, and countries, right at your fingertips.
        </p>
        <p>
          We're passionate about keeping you up to date with the latest in the
          movie industry. Our app features a dedicated section where you can
          find information about upcoming releases, now playing, and popular
          movies. You'll never miss a beat when it comes to the world of movies.
        </p>
      </div>
      {/* Background Image Attribution */}
      <div className="freepik">
        Image by{" "}
        <a
          target="_blank"
          href="https://www.freepik.com/free-vector/abstract-background-with-circles-dots_7065265.htm?query=vector%20bg#from_view=detail_alsolike"
        >
          Freepik
        </a>
      </div>
    </div>
  );
}
