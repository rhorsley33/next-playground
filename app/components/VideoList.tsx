import Link from 'next/link';
interface VideoListProps {
  videos: Array<{
    id: string;
    snippet: {
      resourceId: {
        videoId: string;
      };
      thumbnails: {
        maxres: {
          url: string;
        };
      };
      title: string;
    };
  }>;
}

const VideoList = ({ videos }: VideoListProps) => (
  <ul className='w-full flex flex-wrap justify-center'>
    {videos.map((video) => (
      <li
        key={video.snippet.resourceId.videoId}
        className='card w-2/5 flex flex-col items-start gap-y-2 justify-between snack-card'
        tabIndex={1}
      >
        <img
          src={video.snippet.thumbnails.maxres.url}
          alt={video.snippet.title}
          className='snack-img'
        />
        <p
          id={video.id}
          className='snack-header text-xl font-semi-bold p-2 uppercase'
        >
          {video.snippet.title}
        </p>
        <Link
          className='text-sky-700 m-2 p-2 uppercase hover:bg-sky-100'
          href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
          target='_blank'
          aria-describedby={video.id}
        >
          Watch
        </Link>
      </li>
    ))}
  </ul>
);

export default VideoList;
