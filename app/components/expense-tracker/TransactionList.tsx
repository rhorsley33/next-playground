'use client';
import React, { useContext } from 'react';
import expenseStyles from '@/app/styles/expense-tracker.module.css';
import Transaction from './Transaction';
import { GlobalContext } from '@/app/context/GlobalContext';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className={expenseStyles.list}>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
