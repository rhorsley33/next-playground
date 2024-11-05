'use client';
import React from 'react';
import classNames from 'classnames';
import expenseStyles from '@/app/styles/expense-tracker.module.css';

const Header = () => {
  return (
    <>
      <h1 className={expenseStyles.headerOne}>Expense Tracker</h1>
    </>
  );
};

export default Header;
