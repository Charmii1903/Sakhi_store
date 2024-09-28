"use client";

import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
          ...formData,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessage("Thank you for contacting us. We will get back to you soon!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative py-6 px-4 bg-gradient-to-r from-orange-100 to-orange-200">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/dress_1785255.png')] opacity-5"></div>

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 relative ">Contact Us</h1>
      
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6 relative z-10 bg-white p-8 rounded-xl shadow-lg border border-orange-200">
        <div>
          <label htmlFor="name" className="block text-lg mb-2 text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-orange-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 transition-shadow"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg mb-2 text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-orange-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 transition-shadow"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg mb-2 text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition-shadow"
            placeholder="Enter your message"
            rows={5}
          />
        </div>

        {errorMessage && (
          <div className="text-red-600 text-sm text-center">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="text-green-600 text-sm text-center">{successMessage}</div>
        )}

        <button
          type="submit"
          className={`bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 hover:translate-y-1 transition-transform duration-200 w-full shadow-lg ${
            isSubmitting ? "cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
