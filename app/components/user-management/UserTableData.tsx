import React from 'react';
interface UserProps {
  user: {
    first_name: string;
    last_name: string;
    email: string;
    age: number;
  };
}

const UserTableData = ({ user }: UserProps) => {
  return (
    <>
      <td className='border-b border-slate-100 dark:border-slate-700 w-1/4 p-4 pl-8 text-slate-500 dark:text-slate-400'>
        {user.first_name}
      </td>
      <td className='border-b border-slate-100 dark:border-slate-700 w-1/4 p-4 pl-8 text-slate-500 dark:text-slate-400'>
        {user.last_name}
      </td>
      <td className='border-b border-slate-100 dark:border-slate-700 p-4 w-2/4 text-slate-500 dark:text-slate-400'>
        {user.email}
      </td>
      <td className='border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400'>
        {user.age}
      </td>
    </>
  );
};

export default UserTableData;
