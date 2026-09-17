import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import Skills from "./pages/Skills";
import Dictionary from "./pages/Dictionary";
import Fundamentals from "./pages/Fundamentals";
import Podcasts from "./pages/Podcasts";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/fundamentals" element={<Fundamentals />} />
          <Route path="/podcasts" element={<Podcasts />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;