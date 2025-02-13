import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
            <div className="flex-grow flex flex-col items-center justify-center">
                <div className="w-full mx-auto py-16 px-4"> {/* Adjusted container for form */}
                    {/* Contact Section */}
                    <div className="text-left mb-12">
                        <h2 className="text-4xl font-bold text-[#00A3FF] mb-6">Contact</h2>
                        
                        {/* Description */}
                        <p className="text-white/80">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full max-w-md mx-auto"> {/* Centered form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Field */}
                            <div className="flex flex-row">
                                <label className="text-[#00A3FF] mb-2 text-sm px-8 font-bold">Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="bg-white/90 rounded px-4 py-2 w-full border"
                                />
                            </div>

                            {/* Email Field */}
                            <div className="flex flex-row">
                                <label className="text-[#00A3FF] mb-2 text-sm px-8 font-bold">Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="bg-white/90 rounded px-4 py-2 w-full border"
                                />
                            </div>

                            {/* Message Field */}
                            <div className="flex flex-row">
                                <label className="text-[#00A3FF] mb-2 px-8 font-bold text-sm">Message</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    className="bg-white/90 rounded px-4 py-2 w-full h-32 resize-none border"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-end"> {/* Aligned Send Button to the right */}
                                <button
                                    type="submit"
                                    className="border border-[#00A3FF] text-[#00A3FF] px-12 py-2 rounded hover:bg-[#00A3FF]/10 transition-colors"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default Contact;
