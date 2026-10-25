import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Input from "../components/Input";
import "./contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate(values) {
    const newErrors = {};

    if (!values.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (values.name.trim().length < 2) {
      newErrors.name = "Name must contain at least 2 characters.";
    }

    const email = values.email.trim();

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!values.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (values.message.trim().length < 10) {
      newErrors.message = "Message must contain at least 10 characters.";
    }

    return newErrors;
  }

  function handleChange(event) {
    const { name, value } = event.target;

    const updatedData = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedData);
    setSubmitted(false);

    if (touched[name]) {
      setErrors(validate(updatedData));
    }
  }

  function handleBlur(event) {
    const { name } = event.target;

    setTouched((previous) => ({
      ...previous,
      [name]: true,
    }));

    setErrors(validate(formData));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate(formData);

    setErrors(validationErrors);
    setTouched({
      name: true,
      email: true,
      message: true,
    });

    if (Object.keys(validationErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);

    // Demo submission: no backend or email service is connected.
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setErrors({});
    setTouched({});
  }

  return (
    <>
      <Navbar />

      <main className="contact-page">
        <section className="contact-card">
          <p className="contact-eyebrow">LET'S CONNECT</p>

          <h1>Contact StartupVerse</h1>

          <p className="contact-description">
            Have a question or suggestion? Fill out the form below.
          </p>

          {submitted && (
            <div className="success-message" role="status">
              Form validated successfully! This is a demo submission;
              your message has not been sent.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name ? errors.name : ""}
              placeholder="Enter your name"
            />

            <Input
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email ? errors.email : ""}
              placeholder="you@example.com"
            />

            <div className="form-group">
              <label htmlFor="message">Your Message</label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Write at least 10 characters..."
                rows="5"
                aria-invalid={Boolean(
                  touched.message && errors.message
                )}
                aria-describedby={
                  touched.message && errors.message
                    ? "message-error"
                    : undefined
                }
              />

              {touched.message && errors.message && (
                <small id="message-error" className="field-error">
                  {errors.message}
                </small>
              )}
            </div>

            <button type="submit" className="contact-submit">
              Submit Message
            </button>
          </form>

          <Link to="/" className="contact-back">
            ← Back to Home
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;