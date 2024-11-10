'use client';
import React, { useContext } from 'react';
import expenseStyles from '@/app/styles/expense-tracker.module.css';
import { GlobalContext } from '@/app/context/GlobalContext';
const IncomeExpense = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('Balance component must be used within a GlobalProvider');
  }

  const { transactions } = context;
  
  const incomeItems: number[] = [];
  const expenseItems: number[] = [];

  transactions.forEach((item) => {
    if (item.amount > 0) {
      incomeItems.push(item.amount);
    } else {
      expenseItems.push(item.amount);
    }
  });

  const expenses = Math.abs(
    expenseItems.reduce((total, sum) => {
      return (total += sum);
    }, 0)
  ).toFixed(2);

  const income = Math.abs(
    incomeItems.reduce((total, sum) => {
      return (total += sum);
    }, 0)
  ).toFixed(2);

  return (
    <div className={expenseStyles['income-expense-wrapper']}>
      <div>
        <h4>Income</h4>
        <p
          className={`${expenseStyles.money} ${expenseStyles.plus}`}
        >{`+$${income}`}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className={`${expenseStyles.money} ${expenseStyles.minus}`}>
          {`-$${expenses}`}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
