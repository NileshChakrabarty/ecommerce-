import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import ProfileButton from './Profile'; // Make sure this path is correct

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { loginState, setLoginState } = useAuth();
    const navigate = useNavigate();

    // Example profile picture URL; you should replace this with the actual user profile picture URL from your auth context or state
    const profilePicture = "https://example.com/path-to-your-profile-picture.jpg";

    function handleit() {
        navigate("/SignUp");
    }

    const handleLogout = () => {
        setLoginState(false);
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleCart = () => {
        if (loginState) {
            navigate("/cart");
        } else {
            alert("You are not logged in!");
            navigate("/SignUp");
        }
    }

    return (
        <nav className="bg-white text-black p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">
                    <Link to={"/"}>
                        <button className='cursor-pointer'>Ai<span className='text-red-500'>NaZ</span></button>
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-6">
                    <button onClick={handleCart} className="bg-black hover:bg-red-500 text-white py-2 px-4 rounded flex items-center">
                        Cart
                    </button>
                    {!loginState ? (
                        <button onClick={handleit} className="bg-black hover:bg-red-500 text-white py-2 px-4 rounded">Sign In</button>
                    ) : (
                        <>
                            <ProfileButton 
                                isLoggedIn={loginState} 
                                profilePicture={profilePicture} 
                                onLogout={handleLogout} 
                            />
                        </>
                    )}
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="flex flex-col space-y-2">
                        {!loginState ? (
                            <button onClick={handleit} className="block w-full text-left px-4 py-2 bg-black text-white font-bold rounded">
                                Sign In
                            </button>
                        ) : (
                            <button onClick={handleLogout} className="block w-full text-left px-4 py-2 bg-black text-white font-bold rounded">
                                Sign Out
                            </button>
                        )}
                        <button onClick={handleCart} className="block w-full text-left px-4 py-2 bg-black text-white font-bold rounded">
                            Cart
                        </button>
                    </div>
                    {/* <a href="/Sale" className="hover:bg-white block px-4 py-2">Sale</a>
                    <a href="/NewArrivals" className="hover:bg-white block px-4 py-2">New Arrivals</a>
                    <a href="/Contact" className="hover:bg-white block px-4 py-2">Contact</a> */}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
