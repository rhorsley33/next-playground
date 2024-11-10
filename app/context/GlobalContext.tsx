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
      title: 'Pho',
      amount: -20,
    },
    {
      id: 2,
      title: 'Income',
      amount: 800,
    },
    {
      id: 3,
      title: 'Movies',
      amount: -25,
    },
    {
      id: 4,
      title: 'Phone',
      amount: -100,
    },
    {
      id: 5,
      title: 'Hustle',
      amount: 200,
    },
  ],
};

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

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
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
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
