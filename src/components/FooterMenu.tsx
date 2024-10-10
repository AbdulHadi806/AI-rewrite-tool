import React from 'react'
import Link from 'next/link';


function FooterMenu() {
    return (
        <>
        

            <nav>
                <ul className='flex gap-x-3 md:flex-row flex-col items-center'>
                    <li className='hover:underline'>
                        <Link href="/privacy-policy">Política de Privacidade</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default FooterMenu