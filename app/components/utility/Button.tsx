'use client';

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
            ? 'bg-slate-300 hover:bg-white'
            : 'bg-slate-900 text-white hover:bg-slate-700'
        } text-slate-900 mr-3 py-2 px-4 rounded mb-4 float-right w-3/4`}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
