const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

console.log("TMDB API KEY:", API_KEY);

const BASE_URL = "https://api.themoviedb.org/3";

export async function getTrendingMovies() {
  const response = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );

  if (!response.ok) {
    // console.log("Status:", response.status);

    // const errorText = await response.text();
    // console.log(errorText);

    // throw new Error("Failed to fetch movies");
  }

  const data = await response.json();

  return data.results;
}

export async function getMovieDetails(movieId: string) {
    const response = await fetch(
        `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch movie details");
    }

    return await response.json();
}