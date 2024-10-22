'use client';
const LoginButton = () => {
  const handleLogin = () => {
    window.location.href = '/api/auth';
  };

  return <button onClick={handleLogin}>Login with Google</button>;
};

export default LoginButton;
