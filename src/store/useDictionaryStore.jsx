import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useDictionaryStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (term) => {
        const { favorites } = get();
        set({
          favorites: favorites.includes(term)
            ? favorites.filter((t) => t !== term)
            : [...favorites, term],
        });
      },
    }),
    {
      name: "startup_dict_favs",
    }
  )
);