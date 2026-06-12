import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Search from "./pages/Search";
import MovieDetails from "./pages/MovieDetails";
import { useEffect } from "react";



export default function App() {
  useEffect(() => {
  const link = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
  if (link) {
    link.href = '/fav.png';
  }
}, []);

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      
    </Routes>
  );
}