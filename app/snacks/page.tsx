'use client';
import { useEffect, useState } from 'react';

const SnacksPage = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchSnacks = async () => {
      const accessToken = sessionStorage.getItem('accessToken');
      console.log(accessToken);
      if (accessToken) {
        const response = await fetch(
          'https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log('Playlists:', data.items);
          setPlaylists(data.items);
        } else {
          console.error('Error fetching playlists:', response.statusText);
        }
      }
    };

    fetchSnacks();
  }, []);

  return (
    <div>
      <h1>Your Playlists</h1>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>
            <h2>{playlist.snippet.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SnacksPage;
