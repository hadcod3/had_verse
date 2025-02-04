import React from 'react'
import NavItems from './NavItems';
import Image from 'next/image';
import TransitionLink from './TransitionLink';

const Header = () => {
  return (
    <header className={`hidden md:block fixed py-5 w-screen z-30 transition-colors duration-300 `}>
        <div className='absolute top-0 w-full h-full backdrop-blur-sm bg-gradient-to-b from-zinc-50/40 to-transparent dark:from-zinc-900/40 dark:to-transparent -z-10'/>
        <nav className='flex-center'>
            <NavItems/>
            <TransitionLink href='/' className='absolute flex-center bg-zinc-200/20 w-[50px] h-[50px] rounded-2xl rotate-45 border-0.05 border-zinc-50/20 z-40'>
              <Image alt='logo' src={"/assets/images/logo_primary.png"} height={100} width={100} className='-rotate-45 w-8'/>
            </TransitionLink>
        </nav>
    </header>
  )
}

export default Header