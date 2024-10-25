'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const CallbackPage = () => {
  const router = useRouter();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      const fetchAccessToken = async () => {
        const response = await fetch('/api/auth/token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code }),
        });
        const data = await response.json();

        if (response.ok) {
          const accessToken = data.access_token;
          localStorage.setItem('accessToken', accessToken);
          router.push('/snacks');
        } else {
          console.error(`Error fetching access token: ${data.error}`);
        }
      };
      fetchAccessToken();
    }
  }, [router]);

  return (
    <div>
      <h1>Callback Page</h1>
      <p>Authorization code received: Check the console for the code.</p>
    </div>
  );
};

export default CallbackPage;
