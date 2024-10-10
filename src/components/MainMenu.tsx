import React from 'react';
import Link from 'next/link';

function MainMenu({ isMobile, closeMenu }) {
    return (
        <>

            <nav className={`${isMobile ? 'animate-slide-down bg-gray-50 left-0 absolute w-full' : ''}`}>
                <div className="container">
                    <ul className={`flex ${isMobile ? 'flex-col gap-y-3 py-4' : 'gap-x-3 items-center'}`}>
                        <li className='hover:underline text-md'>
                            <Link href="/" onClick={closeMenu}>Ferramenta de reescrita</Link>
                        </li>
                        <li className='hover:underline text-md'>
                            <Link href="/blogs" onClick={closeMenu}>Blogs</Link>
                        </li>
                        <li className='hover:underline text-md'>
                            <Link href="/contact" onClick={closeMenu}>contato</Link>
                        </li>
                    </ul>
                </div >
            </nav>
        </>
    );
}

export default MainMenu;
