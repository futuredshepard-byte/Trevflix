import { useState } from "react";
import Layout from "../components/Layout";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
}

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const API_KEY = "af05814db5a570bc3e45213b38632189";

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setSearched(true);
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    const data = await res.json();
    setResults(data.results || []);
    setLoading(false);
  };

  return (
    <Layout>
      <div className="px-10 py-8">
       
        <div className="flex gap-3 mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search movies..."
            className="flex-1 bg-zinc-800 text-white px-5 py-3 rounded outline-none border border-zinc-700 focus:border-[#FFD700] text-base"
          />
          <button
            onClick={handleSearch}
            className="bg-[#FFD700] text-black font-bold px-7 py-3 rounded"
          >
            Search
          </button>
        </div>

      p
        {loading && (
          <p className="text-gray-400 text-center">Searching...</p>
        )}

        
        {searched && !loading && results.length === 0 && (
          <p className="text-gray-400 text-center">No results found for "{query}"</p>
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