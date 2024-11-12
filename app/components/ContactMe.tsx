import Link from 'next/link';
import Image from 'next/image';
export default function ContactMe() {
  return (
    <div className='max-w-lg mx-auto bg-white rounded-lg shadow-md p-6 space-y-6 mt-6'>
      <div className='flex justify-center'>
        <Image
          src='/images/roho.jpg'
          width={225}
          height={225}
          alt='picture of roho'
          className='w-32 h-32 rounded-full object-cover'
        />
      </div>

      <h2 className='text-2xl text-slate-900 font-semibold text-center'>
        Contact Me: 801-628-9282
      </h2>

      <div className='text-center space-y-4'>
        <div>
          <Link
            href='https://www.linkedin.com/in/robert-horsley-57a064aa/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 font-medium hover:underline'
          >
            Connect on LinkedIn
          </Link>
        </div>

        {/* Email */}
        <div>
          <a
            href='mailto:rmhorsley27@gmail.com'
            className='text-blue-500 font-medium hover:underline'
          >
            Send an Email
          </a>
        </div>

        {/* Resume Download */}
        <div>
          <Link
            href='https://roho-portfolio.s3.us-east-2.amazonaws.com/robert_horsley_oct2024.docx'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-slate-900 text-white py-2 px-4 rounded hover:bg-slate-300 hover:text-slate-900 transition'
          >
            Download My Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
