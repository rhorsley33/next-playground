import type { Metadata } from 'next';
import Header from './components/utility/Header';
import { Lato } from 'next/font/google';
import classNames from 'classnames';
import './globals.css';
import { GlobalProvider } from './context/GlobalContext';
import { Toaster } from 'react-hot-toast';

const lato = Lato({
  weight: ['100', '300', '400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Next.js Coding Playground',
  description: 'A coding playground for Next.js and Testing React Components',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={classNames(lato.className, 'bg-slate-900')}>
        <GlobalProvider>
          <Header />
          <main className='w-full sm:w-10/12 mx-auto'>{children}</main>
          <Toaster
            position='top-center'
            reverseOrder={false}
            toastOptions={{
              duration: 5000,
              success: { style: { background: '#3fde30', color: '#0f172b' } },
              error: { style: { background: 'red', color: 'white' } },
            }}
          />
        </GlobalProvider>
      </body>
    </html>
  );
}
