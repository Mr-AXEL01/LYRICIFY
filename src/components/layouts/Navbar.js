import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 shadow-lg"> {/* Added shadow for depth */}
            <div className="container mx-auto flex justify-between items-center">
                <h3 className="text-xl font-bold">MusicApp</h3>
                
                <div className="flex space-x-4 items-center">
                    <input type="text" placeholder="Search music..." className="p-2 w-60 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 placeholder-gray-400" />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"> {/* Added animation */}
                        Search
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
