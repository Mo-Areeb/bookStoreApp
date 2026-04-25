import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl overflow-hidden grid md:grid-cols-2">
        
        {/* Left Side - Info */}
        <div className="bg-indigo-600 text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6 text-sm text-indigo-100">
            Agar aapko koi question hai ya project discuss karna hai, to niche form fill karein.
          </p>

          <div className="space-y-3 text-sm">
            <p>📍 Varanasi, Uttar Pradesh</p>
            <p>📞 +91 98765 43210</p>
            <p>📧 support@example.com</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="p-8">
          <h3 className="text-2xl font-semibold mb-6">Contact Form</h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
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
