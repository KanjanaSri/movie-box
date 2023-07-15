const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_BEARER}`,
  },
};

export const fetchMoviesById = async (id, setMovie, setIsLoading, setError) => {
  try {
    setIsLoading(true);
    setError("");

    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}`,
      options
    );

    if (!res.ok) throw new Error(`Something went wrong with fetching movie`);

    const data = await res.json();
    if (data.Response === "False") throw new Error("Movie not found");

    setMovie(data);
    setError("");
  } catch (err) {
    console.log(err.message);
    setError(err.message);
  } finally {
    setIsLoading(false);
  }
};
