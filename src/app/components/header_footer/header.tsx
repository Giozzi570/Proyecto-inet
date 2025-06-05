"use client";

import React, { useState } from 'react';
import "./header.css";
const style = "text-[#111117] rounded-4xl font-medium bg-white py-2 px-4"
const items = [
  { text: "Gente", style: style },
  { text: "Gente", style: style },
  { text: "Gente", style: style },
  { text: "Gente", style: style }
];
function Header() {
  const [active, setActive] = useState(false);

  return (
    <> 
    <div className='flex'>
        <button
        id='button-nav'
        data-collapse-toggle="navbar-multi-level"
        onClick={() => setActive(prev => !prev)}
        type="button"
        className="cursor-pointer"
        aria-controls="navbar-multi-level"
        aria-expanded="false"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div id='header-middle' className='w-4/6 bg-deep-koamaru-950 h-screen'>
            <div className='flex column'>
                <nav className='w-full p-6'>
                    <header>
                        <ul className='flex justify-around gap-5'>
                            {items.map((item,index) => (
                                <li key={index} className={item.style}>
                                    {item.text}
                                </li>
                            ) )}
                            
                        </ul>
                    </header>
                </nav>
                <div></div>
            </div>
        </div>
    </div>
        
    </>
  );
}

export default Header;
