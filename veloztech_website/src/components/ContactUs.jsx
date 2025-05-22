import React, { useState } from "react";
import contactImg from "../assets/images/Art001.jpg";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      console.log("Form Submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[#fc8318]">Contact Us</h1>
          <p className="mt-6  font-light text-center text-[#10323C] text-5xl">
            Reach out to us for any inquiries or support. We'd love to hear from
            you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          {/* Contact Form */}
          <div className="bg-white border-[#fc8318] border-2 shadow-xl rounded-2xl p-8 w-full max-w-lg transition-transform duration-300 hover:scale-105">
            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-6 text-center">
                ✅ Your message has been sent successfully!
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fc8318] transition duration-300 hover:border-[#fc8318]"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fc8318] transition duration-300 hover:border-[#fc8318]"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fc8318] transition duration-300 hover:border-[#fc8318]"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#fc8318] text-white py-3 rounded-lg hover:bg-[#fc8388] transition duration-300 shadow-md focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="w-full max-w-md mt-8 lg:mt- h-auto">
            <p className="text-[#10323c] text-2xl font-light mt-2">
  Fill in the form, or, if you prefer,{" "}
  <a href="mailto:example@example.com" className="text-[#fc8318] underline hover:text-[#fc8318] font-bold">
    send us an email.
  </a>
</p>

            <img
              alt="Contact"
              src={contactImg}
              className="w-full h-auto rounded-lg shadow-lg object-cover mt-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
