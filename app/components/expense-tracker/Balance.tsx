'use client';
import React, { useContext } from 'react';
import expenseStyles from '@/app/styles/expense-tracker.module.css';
import { GlobalContext } from '@/app/context/GlobalContext';

const Balance = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('Balance component must be used within a GlobalProvider');
  }

  const { transactions } = context;

  const total = transactions.map((transaction) => {
    return transaction.amount;
  });
  const amount = total
    .reduce((sum, num) => {
      return (sum += num);
    }, 0)
    .toFixed(2);

  return (
    <div className={expenseStyles.container}>
      <h2 className='text-xl text-slate-900 ml-4'>Your Balance</h2>
      <h4
        className='text-lg font-bold text-slate-900 ml-4'
        id='balance'
      >{`$ ${amount}`}</h4>
    </div>
  );
};

export default Balance;
