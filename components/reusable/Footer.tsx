import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TransitionLink from './TransitionLink'

const Footer = () => {
  return (
    <div className="relative w-full ">
        <div className='absolute top-0 w-full h-10'>
            <svg width="100%" height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />
            </svg>
            <div className='relative py-5 px-24 w-full flex-center'>
                <div className='flex-between w-full'>
                    <div className='flex-center gap-3 text-subtitle'>
                        <TransitionLink href={"/about"}>About</TransitionLink>
                        <TransitionLink href={"/blog"}>Blog</TransitionLink>
                        <TransitionLink href={"/reference"}>References</TransitionLink>
                        <TransitionLink href={"/resource"}>Resources</TransitionLink>
                    </div>
                    <div className='flex-center gap-3 text-subtitle'>
                        <Link href={"/"}>Youtube</Link>
                        <Link href={"/"}>Instagram</Link>
                        <Link href={"/"}>Github</Link>
                        <Link href={"/"}>Buymeacoffe</Link>
                    </div>
                </div>
                <TransitionLink href={"/"} className='absolute flex-center font-archivo font-semibold text-lg dark:text-teal-300'>
                    <p className=''>Had Verse</p>
                    <p className='absolute dark:hover:blur-sm transition-all'>Had Verse</p>
                </TransitionLink>
            </div>
            <div className='w-full h-3'>
                <svg width="100%" height="100%">
                    <line x1="100%" y1="0" x2="0" y2="0" stroke="white" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />
                </svg>
                <div className='w-full flex-center'>
                    <p className='text-subtitle'>© 2025 HAD CODE. All rights reserved</p>
                </div>
            </div>
        </div>
        <div className=' mx-20'>
            <svg width="100%" height="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" className='stroke-current text-black dark:text-white' strokeWidth="1" strokeDasharray="9, 9" />
            </svg>
        </div>
    </div>
  )
}

export default Footer