import React from 'react'
import Image from "next/image";
import Header from './Header';

export const Banner = () => {
    return (
        <>
            <Header />
            <div className='bg-accent_one pb-[60px] pt-[120px]'>
                <div className="container gap-7 flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2">
                        <h1 className='font-bungee uppercase leading-[1.1] text-white mb-5 text-[32px] sm:text-[42px] '>
                            The
                            <span className='uppercase text-yellowish leading-snug font-bungee'> UNIGNORABILITY </span>
                            ASSESSMENT
                        </h1>
                        <p className='leading-6 sm:leading-7 font-medium font-sans text-white mb-5 text-[16px] sm:text-[18px]'>Developed by Marketing Experts to benchmark your current marketing performance and identify opportunities for your marketing engine to print more money.</p>
                        <p className='leading-6 sm:leading-7 font-medium font-sans text-white mb-5 text-[16px] sm:text-[18px]'>Simply <span className='text-yellowish'>answer yes/no questions</span> about your business  current marketing activities. </p>
                        <ul>
                            <li className='leading-6 sm:leading-7 font-sans font-medium text-white mb-1 text-[16px] flex gap-1 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellowish">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                </svg>
                                Quick-fire questions in <span className='text-yellowish'>2 minutes or less.</span>
                            </li>
                            <li className='leading-6 sm:leading-7 font-sans font-medium text-white mb-1 text-[16px] flex gap-1 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellowish">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                </svg>
                                Get tailored insights into your answers.
                            </li>
                            <li className='leading-6 sm:leading-7 font-sans font-medium text-white mb-1 text-[16px] flex gap-1 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellowish">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                </svg>
                                It’s <span className='text-yellowish'>completely free.</span>
                            </li>
                            <li className='leading-6 sm:leading-7 font-sans font-medium text-white mb-5 text-[16px] flex gap-1 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-yellowish">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                </svg>
                                Instant results.
                            </li>
                        </ul>
                        <p className='leading-6 sm:leading-7 font-medium font-sans text-white mb-12 text-[16px] sm:text-[18px]'>Plus get your free <span className='text-[#ff9900]'>personalized</span> pdf report packed with <span className='text-[#ff9900]'>actionable insights</span>.</p>

                    </div>
                    <div className="hidden sm:block w-2/3 md:w-1/2">
                        <Image
                            src="/images/people-analytics.svg"
                            alt='newsletter graphic'
                            width={500}
                            height={300}
                            className='w-full'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
