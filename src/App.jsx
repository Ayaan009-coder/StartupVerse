
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import Skills from "./pages/Skills";
import Fundamentals from "./pages/Fundamentals";
import Dictionary from "./pages/Dictionary";
import Resources from "./pages/Resources";
import Cart from "./context/Cart";

import { DictionaryProvider } from "./context/DictionaryContext";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <ThemeProvider>
      <DictionaryProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/fundamentals" element={<Fundamentals />} />
              <Route path="/dictionary" element={<Dictionary />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </DictionaryProvider>
    </ThemeProvider>
  );
}

export default App;

