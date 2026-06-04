import type { Movie } from "../types/movie";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({
  movie,
}: MovieCardProps) {
  return (
    <div className="cursor-pointer transition hover:scale-105">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg"
      />

      <h3 className="mt-2 text-sm">
        {movie.title}
      </h3>
    </div>
  );
}