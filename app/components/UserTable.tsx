import UserTableData from './UserTableData';
import styles from '@/app/styles/user-table.module.css';
interface UserDataProps {
  users: {
    id: number;
    name: string;
    email: string;
    age: number;
  }[];
}
const UserTable = ({ users }: UserDataProps) => {
  return (
    <>
      <table className='table-auto w-full text-sm divide-y divide-gray-200 mx-auto overflow-scroll'>
        <thead className={`${styles['table-header']} bg-slate-900`}>
          <tr>
            <th className='border-b dark:border-slate-600 font-medium pl-8 text-slate-100 dark:text-slate-900 text-left'>
              Name
            </th>
            <th className='border-b dark:border-slate-600 font-medium p-4 text-slate-100 dark:text-slate-900 text-left'>
              Email
            </th>
            <th className='border-b dark:border-slate-600 font-medium p-4 text-slate-100 dark:text-slate-900 text-left'>
              Age
            </th>
          </tr>
        </thead>
        <tbody className='bg-white dark:bg-slate-800'>
          {users.map((user, index) => (
            <tr
              key={user.id}
              className={`h-5 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            >
              <UserTableData user={user} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
