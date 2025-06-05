"use client";

import React, { useState } from 'react';
import "./header.css";
import Gente from './sections_information/gente';

const stylePasive = "text-white cursor-pointer rounded-4xl font-medium py-2 px-4"
const styleActive = "text-[#111117] cursor-pointer rounded-4xl bg-white font-medium py-2 px-4"
const items = [
  { text: "Gente", style: styleActive },
  { text: "Gente", style: stylePasive },
  { text: "Gente", style: stylePasive },
  { text: "Gente", style: stylePasive }
];
function Header() {
   const [position, setPosition] = useState('translate(100%)');
   const [filter, setFilter] = useState('blur(0px)');

  return (
    <> 
    <div className='flex'>
        <button
        id='button-nav'
        data-collapse-toggle="navbar-multi-level"
        onClick={() => (setPosition(position === 'translate(100%)' ? 'translate(0%)' : 'translate(100%)'), setFilter(filter === 'blur(0px)' ? 'blur(18px)' : 'blur(0px)'))}
        
        type="button"
        className="flex items-center justify-between w-8 py-2 px-3 text-gray-900 rounded-sm md:hover:bg-transparent md:border-0 md:p-0 md:w-12 h-12 cursor-pointer
        "
        aria-controls="navbar-multi-level"
        aria-expanded="false"
      >
        <svg
          id='svg-nav'
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
      <div className='w-full h-screen flex' style= {{ transform: position }} id='container-header'>
        <div id='content-middle' className='w-1/3
 h-screen'>
           <div id='background'></div>
           <img id='image-background' src="https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/color-fondo-imagen-r.png" alt="" />
        </div>
        <div id='header-middle' className='w-4/6 h-screen flex flex-col'>
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
                <Gente></Gente>
            </div>
        </div>
      </div>
        
    </>
  );
}

export default Header;
