import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  // input change handle
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // form submit handle
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    // simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    // success message
    setSuccess("Message sent successfully!");

    // reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden grid md:grid-cols-2">
        
        {/* Left Side */}
        <div className="bg-indigo-600 text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6 text-sm text-indigo-100">
            If you have any questions or want to discuss a project, please fill out the form below.
          </p>

          <div className="space-y-3 text-sm">
            <p>📍 Varanasi, Uttar Pradesh</p>
            <p>📞 +91 98765 43210</p>
            <p>📧 support@example.com</p>
          </div>
        </div>


        {/* Right Side Form */}
        <div className="p-8">
          <h3 className="text-2xl font-semibold mb-6">Contact Form</h3>

          {success && (
            <p className="mb-4 text-green-600 font-medium">{success}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;