'use client';
import React, { useContext } from 'react';
import Header from '@/app/components/expense-tracker/Header';
import Balance from '@/app/components/expense-tracker/Balance';
import IncomeExpense from '@/app/components/expense-tracker/IncomeExpense';
import TransactionList from '@/app/components/expense-tracker/TransactionList';
import AddTransactionForm from '@/app/components/expense-tracker/AddTransactionForm';
import expenseStyles from '@/app/styles/expense-tracker.module.css';
import { GlobalProvider } from '@/app/context/GlobalContext';

const ExpenseTracker = () => {
  return (
    <GlobalProvider>
      <div
        className={`${expenseStyles['expense-tracker-demo']} text-slate-900`}
      >
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransactionForm />
      </div>
    </GlobalProvider>
  );
};

export default ExpenseTracker;
