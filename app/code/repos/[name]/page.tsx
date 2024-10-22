import { Suspense } from 'react';
import Repo from '@/app/components/Repo';
import RepoDir from '@/app/components/RepoDir';
import Link from 'next/link';
interface RepoPageProps {
  params: {
    name: string;
  };
}

const RepoPage = ({ params: { name } }: RepoPageProps) => {
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>
        Back to Repositories
      </Link>
      <Suspense fallback={<p>Loading Repo...</p>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<p>Loading Directories...</p>}>
        <RepoDir name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
