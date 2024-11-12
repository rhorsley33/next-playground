'use client';
import { useEffect, useState } from 'react';
import LoginButton from '../components/utility/LoginButton';
import VideoList from '../components/VideoList';
import LoadingPage from '../loading';
const SnacksPage = () => {
  const [videos, setVideos] = useState([]);
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      setAuthorized(false);
      setLoading(false);
    } else {
      const videoResponse = async (term: string | null) => {
        const response = await fetch(`/api/videos?query=${term}`);
        const data = await response.json();
        if (response.ok && data.items) {
          setVideos(data.items || []);
          setAuthorized(true);
          setLoading(false);
        } else {
          console.error('Error fetching playlists:', response.statusText);
        }
      };
      videoResponse(accessToken);
    }
  }, []);

  if (!authorized) {
    return <LoginButton />;
  }

  return (
    <>
      {loading && authorized && <LoadingPage />}
      <VideoList videos={videos} />;
    </>
  );
};

export default SnacksPage;
