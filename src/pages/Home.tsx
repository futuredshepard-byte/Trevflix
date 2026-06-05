// import HeroBanner from "../components/HeroBanner";
import Layout from "../components/Layout";
import { useEffect } from "react";
import { getTrendingMovies } from "../services/tmdb";
import { useMovieStore } from "../store/movieStore";
import { Link } from "react-router-dom";

export default function Home() {
  const trending = useMovieStore((state) => state.trending);

  const setTrending = useMovieStore(
    (state) => state.setTrending
  );

  useEffect(() => {
    async function loadMovies() {
      try {
        const movies = await getTrendingMovies();
        setTrending(movies);
      } catch (error) {
        console.error(
          "Error fetching trending movies:",
          error
        );
      }
    }

    loadMovies();
  }, [setTrending]);

  return (
    <Layout>
      {/* <HeroBanner /> */}

      <div className="p-8">
        <h1 className="mb-6 text-3xl font-bold">
          Trending Movies
        </h1>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {trending.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded-lg"
              />

              <h3 className="mt-2">
                {movie.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}