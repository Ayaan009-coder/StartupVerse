import { createContext, useContext, useState, useEffect } from "react";

const DictionaryContext = createContext();

export function DictionaryProvider({ children }) {
  // Favorites local storage se load karna
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("startup_dict_favs");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Jab bhi favorites change ho, localStorage mein save ho jaye
  useEffect(() => {
    localStorage.setItem("startup_dict_favs", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (term) => {
    setFavorites((prev) =>
      prev.includes(term) ? prev.filter((t) => t !== term) : [...prev, term]
    );
  };

  return (
    <DictionaryContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </DictionaryContext.Provider>
  );
}

export const useDictionary = () => useContext(DictionaryContext);