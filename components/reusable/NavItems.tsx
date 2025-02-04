"use client";
import { menuLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import React from 'react'
import { ModeToggle } from '../ui/mode-toggle';
import { Button } from '../ui/button';
import { PiSignIn } from 'react-icons/pi';
import TransitionLink from './TransitionLink';

const NavItems = () => {
    const pathname = usePathname();

    return (
        <ul className='md:flex-evenly w-full flex-col md:flex-row z-20'>
            {menuLinks.map((link) => {
                const isActive = pathname === link.route
                return (
                    <li 
                        key={link.route}
                        className={`${
                            isActive ? 'text-black dark:text-zinc-50' : "text-gray-700 dark:text-zinc-200"
                        } overflow-y-hidden overflow-x-visible h-7 w-fit `}>
                        <div className='cursor-pointer h-7 flex-col text-subtitle transition-all duration-200 ease-in-out hover:-translate-y-7'>
                            <p className='h-7'>{link.label}</p>
                            <TransitionLink href={link.route}>
                                <p className={`h-7 hover:text-black hover:dark:text-zinc-50 ${isActive ? 'text-black dark:text-zinc-50' : "text-gray-700 dark:text-zinc-200"}`}>
                                    {link.label}
                                </p>
                            </TransitionLink>
                        </div>
                    </li>
                )
            })}
            <li className='flex-center gap-x-3'>
                <Button size='icon' className='bg-gray-100/20 dark:bg-gray-500/20 text-black hover:bg-gray-300/50 dark:text-white dark:hover:bg-gray-500/50 outline-none focus:outline-none focus:border-none border-l-0.05 border-t-0.05 border-zinc-50/20'>
                    <PiSignIn  />
                </Button>
                <ModeToggle/>
            </li>
        </ul>
    )
}

export default NavItems
