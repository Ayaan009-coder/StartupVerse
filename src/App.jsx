import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import Skills from "./pages/Skills";
import Fundamentals from "./pages/Fundamentals";
import Dictionary from "./pages/Dictionary";
import SuccessStories from "./pages/SuccessStories";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/roadmap" element={<Roadmap />} />

        <Route path="/skills" element={<Skills />} />

        <Route path="/fundamentals" element={<Fundamentals />} />

        <Route path="/dictionary" element={<Dictionary />} />

        <Route
          path="/success-stories"
          element={<SuccessStories />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;