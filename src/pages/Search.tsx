import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";


interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
}

export default function Search() {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const query = searchParams.get("q") || "";
  const API_KEY = "af05814db5a570bc3e45213b38632189";

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results || []);
        setLoading(false);
      });
  }, [query]);

  return (
    <Layout>
        <div>
            
        </div>
      <div className="px-10 py-8">
         <Link
          to="/home"
          className="inline-block mb-6 text-yellow-500 hover:underline"
        >
          ← Back to Home
        </Link>
        {query ? (
          <>
            <h1 className="text-[#FFD700] text-3xl font-bold mb-6 justify-center flex">
              Results for "{query}"
            </h1>
            {loading && <p className="text-gray-400 text-center">Searching...</p>}
            {!loading && results.length === 0 && (
              <p className="text-gray-400 text-center">No results found for "{query}"</p>
            )}
          </>
        ) : (
          <p className="text-gray-400 text-center">Type something in the search bar to find movies.</p>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {results.map((movie) => (
            <div key={movie.id} className="cursor-pointer group">
              <div className="rounded overflow-hidden bg-zinc-800">
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full group-hover:opacity-80 transition"
                  />
                ) : (
                  <div className="w-full h-44 flex items-center justify-center text-gray-500 text-sm">
                    No Image
                  </div>
                )}
              </div>
              <p className="text-white text-sm mt-2 truncate">{movie.title}</p>
              <p className="text-gray-400 text-xs">{movie.release_date?.slice(0, 4)} • ⭐ {movie.vote_average?.toFixed(1)}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}