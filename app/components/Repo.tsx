import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
interface RepoProps {
  name: string;
}
const fetchRepo = async (name: string) => {
  const response = await fetch(
    `https://api.github.com/repos/rhorsley33/${name}`
  );
  const repo = await response.json();
  return repo;
};
const Repo = async ({ name }: RepoProps) => {
  const repo = await fetchRepo(name);
  return (
    <>
      <div className='card-header flex items-center gap-4'>
        <h2>{repo.name}</h2>
        <span className='language text-xs rounded-2xl ring-2 ring-blue-500 p-2'>
          {repo.language}
        </span>
      </div>
      <p>{repo.description}</p>
      <div className='card-stats'>
        <div className='card-stat'>
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className='card-stat'>
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className='card-stat'>
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
