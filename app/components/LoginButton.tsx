'use client';
const LoginButton = () => {
  const handleLogin = () => {
    window.location.href = '/api/auth';
  };

  return (
    <button
      className='text-sky-700 text-underline hover:bg-sky-100 p-2 m-2'
      onClick={handleLogin}
    >
      Login with Google
    </button>
  );
};

export default LoginButton;
