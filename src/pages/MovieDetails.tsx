import Layout from "../components/Layout";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/tmdb";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    const movieId = id;

    async function loadMovie() {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    }

    loadMovie();
  }, [id]);

  if (!movie) {
    return (
      <Layout>
        <h1 className="p-8">Loading...</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-8">
        <Link
          to="/home"
          className="inline-block mb-6 text-yellow-500 hover:underline"
        >
          ← Back to Home
        </Link>

        <div className="flex gap-8">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-72 rounded-lg"
          />

          <div>
            <h1 className="text-5xl font-bold mb-4">
              {movie.title}
            </h1>

            <p className="mb-4">
              ⭐ {movie.vote_average}
            </p>

            <p className="mb-4">
              📅 {movie.release_date}
            </p>

            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}