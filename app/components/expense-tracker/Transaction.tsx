'use client';
import React, { useState, useContext } from 'react';
import expenseStyles from '@/app/styles/expense-tracker.module.css';
import { GlobalContext, GlobalContextType } from '@/app/context/GlobalContext';
import classNames from 'classnames';
interface TransactionProps {
  transaction: {
    id: number;
    title: string;
    amount: number;
  };
}
const Transaction = ({ transaction }: TransactionProps) => {
  const [hovered, setHovered] = useState(false);
  const sign = transaction.amount < 0 ? '-' : '+';
  const { deleteTransaction } =  useContext(GlobalContext) as GlobalContextType;
  return (
    <li
      className={classNames({
        [expenseStyles.minus]: transaction.amount < 0,
        [expenseStyles.plus]: transaction.amount > 0,
      })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {transaction.title}{' '}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className={expenseStyles.deletebtn}
        style={{ opacity: hovered ? 1 : 0 }}
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
