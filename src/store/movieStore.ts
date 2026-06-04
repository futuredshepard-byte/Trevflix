import { create } from "zustand";
import type { Movie } from "../types/movie";

interface MovieState {
    trending: Movie[]
    setTrending: (movies: Movie[]) => void
}

export const useMovieStore = create<MovieState>((set) => ({
    trending: [],
    setTrending: (movies) => 
        set(
            { trending: movies }
        ) 
}))

