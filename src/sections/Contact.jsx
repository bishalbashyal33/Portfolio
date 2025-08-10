import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/mdkdygje", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      {/* Contact Section */}
      <div className="w-full max-w-3xl mx-auto py-16">
        <h2 className="text-3xl font-bold text-[#2d2d2d] mb-4">Contact</h2>
        <p className="text-[#565551] text-lg mb-8">
          Feel free to reach out. I'll try my best to get back to you soon.
        </p>

        {/* Success/Error Messages */}
        {submitStatus === "success" && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            Thank you! Your message has been sent successfully.
          </div>
        )}
        {submitStatus === "error" && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            Sorry, there was an error sending your message. Please try again.
          </div>
        )}

        {/* Contact Form */}
        <div className="p-8 rounded-lg space-y-6">
          {/* Name Field */}
          <div>
            <label className="text-[#2d2d2d] font-medium text-sm mb-2 block">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border border-[#e1e1e1] bg-[#fafafa] text-[#2d2d2d] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[black] transition-all placeholder-gray-500"
              placeholder="Enter your name"
              disabled={isSubmitting}
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="text-[#2d2d2d] font-medium text-sm mb-2 block">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border border-[#e1e1e1] bg-[#fafafa] text-[#2d2d2d] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[black] transition-all placeholder-gray-500"
              placeholder="Enter your email"
              disabled={isSubmitting}
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="text-[#2d2d2d] font-medium text-sm mb-2 block">
              Message
            </label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full border border-[#e1e1e1] bg-[#fafafa] text-[#2d2d2d] rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[black] transition-all placeholder-gray-500"
              placeholder="Enter your message"
              disabled={isSubmitting}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;