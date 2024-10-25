'use client';

import { on } from 'events';

interface ButtonProps {
  title: string;
  onClick: () => void;
  disabled: boolean;
  action: string;
}

const Button = ({
  title,
  disabled,
  onClick,
  action,
}: ButtonProps): JSX.Element => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`${
          action === 'primary'
            ? 'bg-slate-900 hover:bg-slate-700'
            : 'bg-gray-500 hover:bg-gray-700'
        } text-white font-bold py-2 px-4 rounded`}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
