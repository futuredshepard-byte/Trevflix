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
   <nav className="fixed top-0 z-50 w-full bg-black/100 backdrop-blur-sm">
  <div className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-10">
    
    <h1 className="text-[#FFD700] text-2xl font-bold sm:text-4xl">
      TREVFLIX
    </h1>

    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={handleSearch}
      placeholder="Search movies..."
      className="
        w-full
        rounded
        border border-zinc-700
        bg-zinc-800
        px-4 py-2
        text-sm text-white
        outline-none
        focus:border-[#FFD700]
        sm:w-64
      "
    />
  </div>

  <div className="flex gap-6 text-[#FFD700]">
        {/* <a href="/home">Home</a> */}
         {/* <a href="/search">Search</a> */}
      </div>
      
</nav>
  );
}

