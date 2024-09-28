import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    function onHandleContact() {
        navigate('/contact');
    }

    return (
        <nav className="bg-gray-900 p-4 shadow-lg border-b border-gray-600">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-500 hover:from-orange-500 hover:to-purple-400 transition-all duration-300 ease-in-out">
                    helloSpace
                </Link>

                {/* Nav Buttons */}
                <div>
                    <button
                        onClick={onHandleContact}
                        className="text-white bg-orange-500 hover:bg-orange-400 hover:text-gray-900 font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
