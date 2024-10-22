import React from 'react';
import Link from 'next/link';
import LoginButton from './components/LoginButton';
import Courses from './components/Courses';

const page = () => {
  return (
    <div>
      <LoginButton />
      <Courses />
    </div>
  );
};

export default page;
