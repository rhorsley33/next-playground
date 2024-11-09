import React from 'react';
import Skills from './components/Skills';
import HomePage from './components/HomePage';

const page = () => {
  return (
    <>
      <h1 className='2xl:text-8xl lg:text-6xl text-4xl text-center uppercase mt-10 mb-4 font-thin'>
        Introducing . . . Roho
      </h1>
      <p className='sight-description 2xl:text-2xl lg:text-xl text-lg text-center font-light mb-8 antialiased'>
        Courtesy of: Next.js - Postgres - Tailwind
      </p>
      <div className='flex flex-row flex-wrap w-full'>
        <HomePage />
        <Skills />
      </div>
    </>
  );
};

export default page;
