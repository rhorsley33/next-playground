'use client';
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

export type GlobalContextType = {
  transactions: { id: number; title: string; amount: number }[];
  addTransaction: (transaction: TransactionProps) => void;
  deleteTransaction: (id: number) => void;
};

interface TransactionProps {
  transaction: {
    id: number;
    title: string;
    amount: number;
  };
}

// TODO Move this to my DB so data can persist
const initialState = {
  transactions: [
    {
      id: 1,
      title: 'Payday',
      amount: 1000,
    },
  ],
};

export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

import { ReactNode } from 'react';

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id: number) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(transaction: TransactionProps) {
    const newTransaction = transaction.transaction;
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: newTransaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
