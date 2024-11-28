import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand and Description */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-4">AINAZ Fashion</h2>
                    <p className="text-gray-400">Discover the latest trends in fashion with AINAZ. Stay chic and stylish with our curated collections for every occasion.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">Shop</a></li>
                        <li><a href="#" className="hover:underline">New Arrivals</a></li>
                        <li><a href="#" className="hover:underline">Best Sellers</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>

                {/* Newsletter and Social Media */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
                    <form className="mb-4">
                        <label htmlFor="newsletter" className="block text-gray-400 mb-2">Subscribe to our newsletter</label>
                        <div className="flex items-center">
                            <input
                                type="email"
                                id="newsletter"
                                className="w-full p-2 rounded-l-lg bg-gray-800 text-gray-200 border border-gray-600"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="bg-gold-500 hover:bg-gold-600 text-white p-2 rounded-r-lg">
                                Subscribe
                            </button>
                        </div>
                    </form>

                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white"><i className="pi pi-facebook"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="pi pi-twitter"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="pi pi-instagram"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="pi pi-pinterest"></i></a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-10 border-t border-gray-800 pt-4 text-center text-gray-500">
                <p>&copy; 2024 AINAZ Fashion. All rights reserved.</p>
            </div>
        </footer>
    );
}
