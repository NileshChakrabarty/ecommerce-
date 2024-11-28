import React, { useState } from 'react';
import b7 from "../assets/b7.jpg";

const ProfileButton = ({ isLoggedIn, profilePicture, onLogout }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        onLogout();
        setDropdownOpen(false); // Close dropdown after logout
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={toggleDropdown}
                className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden border-2 border-black focus:outline-none"
            >
                <img
                    src={b7}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </button>

            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                    <div className="py-2">
                        {/* <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-indigo-100">
                            View Profile
                        </a> */}
                        <button 
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-indigo-100"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileButton;
