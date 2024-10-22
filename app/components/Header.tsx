import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
            <Link href='/'>The Roho</Link>
        </div>
        <div className='flex justify-center links'>
            <Link href='/about'>About</Link>
            <Link href='/about/team'>Team</Link>
            <Link href='/code/repos'>My Git</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
