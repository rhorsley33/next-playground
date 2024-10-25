import UserTable from '@/app/components/UserTable';
import UserActions from '@/app/components/UserActions';
const fetchUsers = async () => {
  const limit = 10;
  const offset = 0;
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/users?limit=${limit}&offset=${offset}`
    );
    const users = await response.json();
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    return { error: 'Failed to fetch users' };
  }
};

const UserTablePage = async () => {
  const users = await fetchUsers();
  return (
    <div className='container mx-auto'>
      <div className='my-8'>
        <UserActions />
        <UserTable users={users} />
      </div>
    </div>
  );
};

export default UserTablePage;
