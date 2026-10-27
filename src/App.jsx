import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import { useState } from "react";

import Home from "./pages/Home";
import Roadmap from "./pages/Roadmap";
import Skills from "./pages/Skills";
import Fundamentals from "./pages/Fundamentals";
import Dictionary from "./pages/Dictionary";
import Resources from "./pages/Resources";
import Cart from "./context/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import { DictionaryProvider } from "./context/DictionaryContext";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";

function ProtectedRoutes() {
  const [isLoggedIn] = useState(
    () => sessionStorage.getItem("startupverse_logged_in") === "true"
  );

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

function App() {
  return (
    <ThemeProvider>
      <DictionaryProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />

              <Route element={<ProtectedRoutes />}>
                <Route path="/" element={<Home />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/fundamentals" element={<Fundamentals />} />
                <Route path="/dictionary" element={<Dictionary />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact" element={<Contact />} />
              </Route>

              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </DictionaryProvider>
    </ThemeProvider>
  );
}

export default App;
