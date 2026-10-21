import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useDictionaryStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      search: "",
      category: "All",

      setSearch: (search) => set({ search }),
      setCategory: (category) => set({ category }),

      toggleFavorite: (term) => {
        const { favorites } = get();
        set({
          favorites: favorites.includes(term)
            ? favorites.filter((t) => t !== term)
            : [...favorites, term],
        });
      },

      isFavorite: (term) => get().favorites.includes(term),
    }),
    {
      name: "startup_dict_favs", // Saved in localStorage automatically
    }
  )
);