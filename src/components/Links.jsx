import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
    { url: '/search', text: '🔍 All'},
    { url: '/images', text: '📸 Images'},
    { url: '/news', text: '📰 News'},
    { url: '/videos', text: '🎥 Videos'},
]

export const Links = () => {
    return (
        <div className="flex sm:justify-around justify-between items-center mt-4">
            {links.map(({ url, text }) => (
                <NavLink to={url} className="m-2 mb-0 hover:text-green-600" activeClassName="text-green-600 border-b-2 dark:text-green-300 border-green-600 pb-2">
                    {text}
                </NavLink>
            ))}
        </div>
    )
}

