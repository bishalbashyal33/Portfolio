import React from 'react';
import mountainsImage from '../assets/mountains.jpg';

const MyStory = () => {
    return (
        <div>
            {/* Text Content Section */}
            <div className="w-full max-w-6xl mx-auto py-16 px-8">
                <h2 className="text-4xl font-bold text-[#00A3FF] mb-8">My Story</h2>
                <div className="text-white/80 max-w-3xl">
                    <p className="leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    </p>
                </div>
            </div>

            {/* Full Width Image Section - No Bottom Padding */}
            <div className="w-screen relative left-1/2 right-1/2 -mx-[50.51vw] h-[400px] align-bottom">
                <img
                    src={mountainsImage}
                    alt="Person in orange jacket by mountain lake"
                    className="w-full h-full object-cover align-bottom"
                />
            </div>
        </div>
    );
};

export default MyStory;