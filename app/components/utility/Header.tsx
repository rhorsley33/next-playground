'user';
import React from 'react';
import Link from 'next/link';
const Header = () => {
  return (
    <header className='header bg-slate-900'>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>The Roho</Link>
        </div>
        <div className='flex justify-center links'>
          <div className='relative group'>
            <Link href='/projects'>Projects</Link>
            <div className='hidden group-hover:block absolute top-full left-0 bg-white shadow-md submenu'>
              <Link
                href='/projects/user-table'
                className='block px-2 sub-menu-link py-2'
              >
                User Table
              </Link>
            </div>
          </div>
          <Link href='/code/repos'>My Git</Link>
          <Link href='/snacks'>Snacks</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
