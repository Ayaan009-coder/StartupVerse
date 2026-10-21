import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import Skills from "./pages/Skills";
import Fundamentals from "./pages/Fundamentals";
import Dictionary from "./pages/Dictionary";
import { DictionaryProvider } from "./context/DictionaryContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <DictionaryProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/fundamentals" element={<Fundamentals />} />
            <Route path="/dictionary" element={<Dictionary />} />
          </Routes>
        </BrowserRouter>
      </DictionaryProvider>
    </ThemeProvider>
  );
}

export default App;