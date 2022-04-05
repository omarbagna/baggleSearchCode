import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce'


import { useResultContext } from '../contexts/ResultContextProvider';
import { Links } from './Links'

export const Search = () => {
    const [text, setText] = useState('Bagna Omar');
    const { setSearchTerm } = useResultContext();
    const [debouncedValue] = useDebounce(text, 300);

    useEffect(() => {
        if(debouncedValue) setSearchTerm(debouncedValue)
    }, [debouncedValue])


    return (
        <div className="relative w-full sm:mx-28 md:mx-40 sm:-mt-14 mt-3">
            <input 
                value={text}
                type="text"
                className=" w-full h-10 bg-green-200 dark:bg-gray-600 dark:text-gray-200 rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
                placeholder="Search Baggle"
                onChange={(e) => setText(e.target.value)}
            />
            {!text && (
                <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500" onClick={() => setText('')}>
                    🕵️
                </button>
            )}
            <Links />
        </div>
    )
}

