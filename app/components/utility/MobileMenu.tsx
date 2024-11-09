'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaRegWindowClose } from 'react-icons/fa';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        className='text-white flex w-1/12 justify-end sm:hidden'
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          ></path>
        </svg>
      </button>
      <div>
        <div
          className={`fixed top-0 right-0 h-full w-full max-w-xs bg-customblue shadow-lg z-50 transition-transform duration-300 ease-in-out
        ${isOpen ? 'transform translate-x-0' : 'transform translate-x-full'}
      `}
          style={{ transition: 'transform 0.3s ease-in-out' }}
        >
          <button
            onClick={() => setIsOpen(false)}
            className='absolute top-4 right-4 text-gray-600'
          >
            <FaRegWindowClose className='w-6 h-6' color={'white'} />
          </button>
          <ul className='mt-12 grid grid-cols-1 divide-y text-slate-100 uppercase'>
            <li className='mx-3 py-1'>
              <Link
                href='/'
                className={pathname === '/' ? 'active' : ''}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className='mx-3 py-1'>
              <Link
                href='/code/repos'
                className={pathname === '/code/repos' ? 'active' : ''}
                onClick={() => setIsOpen(false)}
              >
                Github Repos
              </Link>
            </li>
            <li className='mx-3 py-1'>
              <Link
                href='/snacks'
                className={pathname === '/snacks' ? 'active' : ''}
                onClick={() => setIsOpen(false)}
              >
                Interests
              </Link>
            </li>
            <li className='mx-3 py-1'>
              <Link
                href='/projects'
                className={pathname === '/projects' ? 'active' : ''}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className='mx-3 py-1'>
              <Link
                href='/contact'
                className={pathname === '/contact' ? 'active' : ''}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
