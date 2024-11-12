import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import Link from 'next/link';
interface PaginationProps {
  update: (limit: number, offset: number) => void;
  pages: number;
  currentpage: number;
  leftClick: number;
  rightClick: number;
}
const Pagination = ({
  update,
  pages,
  currentpage,
  leftClick,
  rightClick,
}: PaginationProps) => {
  const pageNumbers: number[] = Array.from({ length: pages }, (_, i) => i + 1);
  console.log(currentpage);

  return (
    <div className='text-slate-900 flex justify-center items-center space-x-4 mt-4'>
      <Link
        href='#'
        onClick={() => update(leftClick, 9)}
        className='px-2 text-lg text-slate-700 hover:text-slate-900'
      >
        <FaChevronCircleLeft color={'#e2e8f0'} />
      </Link>
      {pageNumbers.map((number: number) => (
        <Link
          href='#'
          key={number}
          style={
            currentpage === number
              ? {
                  backgroundColor: '#f3f356',
                  color: '#0f172b',
                  pointerEvents: 'none',
                }
              : {}
          }
          data-page={number}
          onClick={() => update((number - 1) * 10, 9)}
          className='px-3 py-1 mx-1 rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300 hover:text-slate-900'
        >
          {number}
        </Link>
      ))}
      <Link
        href='#'
        onClick={() => update(rightClick, 9)}
        className='px-2 text-lg text-slate-700 hover:text-slate-900'
      >
        <FaChevronCircleRight color={'#e2e8f0'} />
      </Link>
    </div>
  );
};

export default Pagination;
