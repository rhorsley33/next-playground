'use client';
import React from 'react';
import expenseStyles from '@/app/styles/expense-tracker.module.css';

const Header = () => {
  return (
    <>
      <h1 className='w-full mx-auto py-4 text-2xl text-center inset-0 bg-gradient-to-t from-gray-500 to-transparent text-slate-900 border-b border-slate-900'>
        Expense Tracker
      </h1>
    </>
  );
};

export default Header;
