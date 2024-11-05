'use client';
import React, { useContext } from 'react';
import classNames from 'classnames';
import expenseStyles from '@/app/styles/expense-tracker.module.css';
import { GlobalContext } from '@/app/context/GlobalContext';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

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
      <h2 className={expenseStyles.headerTwo}>Your Balance</h2>
      <h4 className={expenseStyles.headerFour} id='balance'>{`$ ${amount}`}</h4>
    </div>
  );
};

export default Balance;
