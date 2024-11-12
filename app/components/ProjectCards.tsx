import Link from 'next/link';

export default function ProjectCards() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-4'>
      <div className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 pb-6'>
        <h2 className='w-full bg-slate-300 text-slate-900 pt-2 pb-2 text-center text-2xl font-semibold mb-2'>
          User Management Table
        </h2>
        <p className='text-slate-900 mb-4 p-4'>
          Display, create, and search for users stored in a PostgreSQL database.
        </p>
        <Link
          href='/projects/user-table'
          className='ml-2 text-slate-300 font-medium hover:bg-yellow-200 hover:text-slate-900 bg-slate-900 mb-2 p-3 rounded-full'
        >
          Explore User Table
        </Link>
      </div>

      <div className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 pb-6'>
        <h2 className='w-full bg-slate-300 text-slate-900 pt-2 pb-2 text-center text-2xl font-semibold mb-2'>
          Expense Tracker
        </h2>
        <p className='text-slate-900 mb-4 p-4'>
          Manage and track expenses using React Context API for state
          management.
        </p>
        <Link
          href='/projects/expense-tracker'
          className='ml-2 text-slate-300 font-medium hover:bg-yellow-200 hover:text-slate-900 bg-slate-900 mb-2 p-3 rounded-full'
        >
          Explore Expense Tracker
        </Link>
      </div>
    </div>
  );
}
