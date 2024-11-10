'use client';
import React, { useContext, useState } from 'react';
import expenseStyles from '@/app/styles/expense-tracker.module.css';
import { GlobalContext, GlobalContextType } from '@/app/context/GlobalContext';

const AddTransactionForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext) as GlobalContextType;


  const resetForm = () => {
    setTitle('');
    setAmount(0);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      title,
      amount: +amount,
    };
    addTransaction({ transaction: newTransaction });
    resetForm();
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form className={expenseStyles['form']} onSubmit={onSubmit}>
        <div className={expenseStyles['form-control']}>
          <label htmlFor='text' className={expenseStyles['expense-label']}>
            Text
          </label>
          <input
            type='text'
            id='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={expenseStyles['transaction-input']}
            placeholder='Enter text...'
          />
        </div>
        <div className={expenseStyles['form-control']}>
          <label className={expenseStyles['expense-label']} htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            id='amount'
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            className={expenseStyles['transaction-input']}
            placeholder='Enter amount...'
          />
        </div>
        <button className={expenseStyles['btn']}>Add transaction</button>
      </form>
    </>
  );
};

export default AddTransactionForm;
