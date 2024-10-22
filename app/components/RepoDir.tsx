import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
interface RepoDirTypes {
  name: string;
}

interface GitHubTypes {
  name?: string;
  type?: string;
  path?: string;
  html_url?: Url;
}

const fetchRepo = async (name: string) => {
  // Simulate slow network to properly demonsrate suspense boundary
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(
    `https://api.github.com/repos/rhorsley33/${name}/contents`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const content = await response.json();
  return content;
};

const RepoDir = async ({ name }: RepoDirTypes) => {
  const content = await fetchRepo(name);
  const dir = content.filter((item: GitHubTypes) => item.type === 'dir');
  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dir.map((dir: GitHubTypes) => (
          <li key={dir.path}>
            <Link target='_blank' href={dir.html_url as Url}>
              {dir.path}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDir;
