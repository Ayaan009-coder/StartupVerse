import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) return;

    // Demo login only — no real authentication yet.
    sessionStorage.setItem("startupverse_logged_in", "true");

    navigate("/", { replace: true });
  }

  return (
    <main className="login-page">
      <div className="login-orbit orbit-one"></div>
      <div className="login-orbit orbit-two"></div>

      <section className="login-card">
        <div className="login-brand">
          <span className="brand-symbol">✦</span>
          <span>StartupVerse</span>
        </div>

        <p className="login-eyebrow">YOUR STARTUP JOURNEY STARTS HERE</p>

        <h1>
          Welcome <span>back.</span>
        </h1>

        <p className="login-subtitle">
          Your next big idea deserves a great beginning.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <Input
            label="Email address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="you@example.com"
          />

          <Input
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            placeholder="Enter your password"
          />

          <button type="submit" className="login-button">
            Enter StartupVerse <span>→</span>
          </button>
        </form>

        <p className="login-note">
          Learn. Build. Grow. Your journey begins here.
        </p>
      </section>
    </main>
  );
}

export default Login;
