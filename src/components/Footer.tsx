
import Link from 'next/link'
import React from 'react'
import FooterMenu from './FooterMenu'

function Footer() {
    return (
        <>
            <div className="flex py-3 justify-between border-t border-b-slate-200">
                <div className="container justify-between flex flex-col md:flex-row gap-3 items-start md:items-center">
                    <div className='flex items-center justify-between gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white bg-accent_one p-2 rounded-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                        <span className='text-sm text-accent_one'>Powered by <Link className='font-semibold underline' href="https://eulerbytes.com">Eulerbytes</Link> </span>
                    </div>
                    <div className='w-full md:w-fit'>
                        <div className="flex gap-4 sm:gap-5 items-center flex-wrap justify-between ">
                            <FooterMenu/>
                            <span className='text-[14px] sm:text-[16px]'>© Copyright 2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer