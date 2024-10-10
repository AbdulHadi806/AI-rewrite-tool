"use client"

import React, { useState } from 'react';
import MainMenu from './MainMenu';
import Link from 'next/link';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex py-3 justify-between border-b border-b-slate-200">
                <div className="container justify-between flex items-center">
                    <Link href="/">
                        <div className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white bg-accent_one p-2 rounded-full">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                            <span className='sm:text-xl text-md text-accent_one'>Reescrever Texto Online</span>
                        </div>
                    </Link>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                            )}
                        </button>
                    </div>
                    <div className={`hidden md:flex`}>
                        <MainMenu isMobile={false} closeMenu={() => setIsOpen(false)}/>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <MainMenu isMobile={true} closeMenu={() => setIsOpen(false)} />
                </div>
            )}
        </>
    );
}

export default Header;
