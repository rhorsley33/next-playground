'use client';
import { useState, useEffect } from 'react';
import UserTable from '@/app/components/user-management/UserTable';
import UserActions from '@/app/components/user-management/UserActions';
import Pagination from '@/app/components/utility/Pagination';
import { useDebounce } from 'use-debounce';
import SearchBar from '../utility/SearchBar';

const UserTableContainer = () => {
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [leftClick, setLeftClick] = useState(0);
  const [rightClick, setRightClick] = useState(10);
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebounce(query, 500);
  const limit = 10;

  const updateArrows = (offset: number) => {
    setLeftClick(offset - 10 < 0 ? 0 : offset - 10);
    setRightClick(
      offset + 10 > total ? Math.floor(total / 10) * 10 : offset + 10
    );
  };

  const fetchUsers = async (offset = 0, limit = 10, search = '') => {
    try {
      const searchParam = search ? `&search=${search}` : '';
      const queryString = searchParam
        ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/users?limit=${limit}&offset=${offset}?${searchParam}`
        : `${process.env.NEXT_PUBLIC_BASE_URL}/api/users?limit=${limit}&offset=${offset}`;
      const response = await fetch(queryString);
      const data = await response.json();
      const totalUsers = data.total[0].count;
      setUsers(data.users);
      setTotal(totalUsers);
      setPages(Math.ceil(totalUsers / limit));
      setCurrentPage(offset / limit + 1);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    if (debouncedQuery) {
      fetchUsers(0, 10, debouncedQuery);
    } else {
      fetchUsers();
    }
  }, [debouncedQuery]);

  const updateUsers = async (offset: number, limit: number) => {
    updateArrows(offset);
    const newUsers = await fetchUsers(offset, limit); // Waits for fetchUsers to complete and update state
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
        <UserTable users={users} />
        <Pagination
          update={updateUsers}
          pages={pages}
          currentpage={currentPage}
          leftClick={leftClick}
          rightClick={rightClick}
        />
      </div>
    </div>
  );
};

export default UserTableContainer;
