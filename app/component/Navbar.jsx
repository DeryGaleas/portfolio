"use client";
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';
import { useState } from 'react';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import { MenuOverlay } from './MenuOverlay';

const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    }

]

export const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
            <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>Logo</Link>

            <div className='mobile-menu block md:hidden'>
                {
                    navbarOpen ? (
                        <button onClick={()=> setNavbarOpen(false)} className='text-slate-200 flex items-center px-3 py-2 border border-slate-200 rounded hover:text-white hover:border-white'>
                            <Bars3Icon className="h-5 w-5"/>
                        </button>
                    ): (
                        <button onClick={()=> setNavbarOpen(true)} className='text-slate-200 flex items-center px-3 py-2 border border-slate-200 rounded hover:text-white hover:border-white'>
                            <XMarkIcon className="h-5 w-5"/>
                        </button>
                    )
                }
            </div>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {
                        navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  )
}
