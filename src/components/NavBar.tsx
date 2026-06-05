import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-black/100 px-10 py-4 backdrop-blur-sm">
      <h1 className="text-[#FFD700] text-4xl font-bold">TREVFLIX</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleSearch}
        placeholder="Search movies..."
        className="bg-zinc-800 text-white px-4 py-2 rounded outline-none border border-zinc-700 focus:border-[#FFD700] w-64 text-sm"
      />

      <div className="flex gap-6 text-[#FFD700]">
        {/* <a href="/home">Home</a> */}
        {/* <a href="/search">Search</a> */}
      </div>
    </nav>
  );
}