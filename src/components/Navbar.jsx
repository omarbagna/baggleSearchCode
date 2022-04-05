import React from 'react'
import { Link } from 'react-router-dom';
import { Search } from './Search'
import headImage from '../assets/Head.png'


export const Navbar = ({ darkTheme, setDarkTheme }) => {
    return (
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center border-b dark:border-gray-700 border-gray-200">
            <div className="flex justify-between items-center space-x-5 w-screen">
                <Link to="/">
                    <img src={headImage} alt="logo" className="w-20 h20 py-1 px-2" /> 
                </Link>
                <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-300 dark:text-gray-900 text-green-300 bg-gray-500 border rounded-full px-4 py-2 hover:shadow-lg">
                    {darkTheme ? 'Light 💡' : 'Dark 🌙'}
                </button>
            </div>
            <Search />
        </div>
    );
}

