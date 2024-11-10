'use client';
import { useState, useEffect } from 'react';
import UserTable from '@/app/components/user-management/UserTable';
import UserActions from '@/app/components/user-management/UserActions';
import Pagination from '@/app/components/utility/Pagination';
import { useDebounce } from 'use-debounce';
import SearchBar from '../utility/SearchBar';
import LoadingPage from '@/app/loading';

const UserTableContainer = () => {
  interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    age: number;
  }

  const [users, setUsers] = useState<User[]>([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [leftClick, setLeftClick] = useState(0);
  const [rightClick, setRightClick] = useState(10);
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebounce(query, 500);
  const limit = 9;

  const updateArrows = (offset: number) => {
    setLeftClick(offset - 10 < 0 ? 0 : offset - 10);
    setRightClick(
      offset + 10 > total ? Math.floor(total / 10) * 10 : offset + 10
    );
  };

  const fetchUsers = async (offset = 0, limit = 10, search = '') => {
    try {
      // const searchParam = search ? `&search=${search}` : '';
      // const queryString = `${process.env.NEXT_PUBLIC_BASE_URL}/api/users?limit=${limit}&offset=${offset}${searchParam}`;
      // const response = await fetch(queryString);
      // const data = await response.json();

      // Return the data so that it can be handled in the calling function
      const data = {
        total: 3,
        users: [
          { id: 1, first_name: 'John', last_name: 'Doe', email: 'jdoe@mail.com', age: 33 },
          { id: 2, first_name: 'Jane', last_name: 'Smith', email: 'jsmith@mail.com', age: 29 },
          { id: 3, first_name: 'Alice', last_name: 'Johnson', email: 'ajohnson@mail.com', age: 42 }
        ]
      };
      return data;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchUsers(0, limit, debouncedQuery);
      if (data) {
        const totalUsers = data.total;
        setUsers(data.users);
        setTotal(totalUsers);
        setPages(Math.ceil(totalUsers / limit));
        setCurrentPage(1); // Assuming you're loading the first page
      }
    };

    loadData();
  }, [debouncedQuery]);

  const updateUsers = async (offset: number, limit: number) => {
    updateArrows(offset); // Update arrows based on new offset
    const data = await fetchUsers(offset, limit, debouncedQuery); // Wait for fetchUsers to complete
    if (data) {
      const totalUsers = data.total;
      setUsers(data.users);
      setTotal(totalUsers);
      setPages(Math.ceil(totalUsers / limit));
      setCurrentPage(offset / limit + 1);
    }
  };

  const userSearch = (searchTerm: string) => {
    setQuery(searchTerm);
  };

  return (
    <div className='container mx-auto'>
      <div className='my-8'>
        <div className='flex justify-between'>
          <SearchBar onSearch={userSearch} />
          <UserActions />
        </div>
        {users.length > 0 ? (
          <>
            <UserTable users={users} />
            <Pagination
              update={updateUsers}
              pages={pages}
              currentpage={currentPage}
              leftClick={leftClick}
              rightClick={rightClick}
            />
          </>
        ) : (
          <LoadingPage />
        )}
      </div>
    </div>
  );
};

export default UserTableContainer;
