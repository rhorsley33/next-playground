'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();
  return (
    <header className='header bg-slate-900'>
      <div className='block sm:hidden w-11/12'>
        <Image
          src='/images/roho-logo.png'
          width={200}
          height={200}
          alt='roho logo'
          className='mx-auto relative left-8'
        />
      </div>
      <MobileMenu />
      <div className='navigation-wrapper hidden sm:block'>
        <div className='active-icon'></div>
        <ul className='nav-items'>
          <li>
            <Link className={pathname === '/' ? 'active' : ''} href='/'>
              Home
            </Link>
          </li>
          <li>
            <Link
              className={pathname === '/code/repos' ? 'active' : ''}
              href='/code/repos'
            >
              Github Repos
            </Link>
          </li>
          <li>
            <Link
              href='/snacks'
              className={pathname === '/snacks' ? 'active' : ''}
            >
              Interests
            </Link>
          </li>
          <li>
            <Link
              href='/projects'
              className={pathname === '/projects' ? 'active' : ''}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className={pathname === '/contact' ? 'active' : ''}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
