import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center px-6">
      {/* Contact Section */}
      <div className="w-full max-w-3xl mx-auto py-16">
        <h2 className="text-3xl font-bold text-[#2d2d2d] mb-4">Contact</h2>
        <p className="text-[#565551] text-lg mb-8">
          Feel free to reach out. I'll try my best to get back to you soon.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="p-8 rounded-lg space-y-6">
          {/* Name Field */}
          <div>
            <label className="text-[#2d2d2d] font-medium text-sm mb-2 block">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-[#e1e1e1] bg-[#fafafa] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[black] transition-all"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="text-[#2d2d2d] font-medium text-sm mb-2 block">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full border border-[#e1e1e1] bg-[#fafafa] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[black] transition-all"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="text-[#2d2d2d] font-medium text-sm mb-2 block">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full border border-[#e1e1e1] bg-[#fafafa] rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[black] transition-all"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-[black] transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
