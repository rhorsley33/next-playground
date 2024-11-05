import type { Metadata } from 'next';
import Header from './components/utility/Header';
import { Poppins } from 'next/font/google';
import classNames from 'classnames';
import './globals.css';
import { GlobalProvider } from './context/GlobalContext';

const poppins = Poppins({
  weight: ['300', '400', '700', '900'],
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
      <body className={`${poppins.className}, bg-sky-50`}>
        <GlobalProvider>
          <Header />
          <main className='container'>{children}</main>
        </GlobalProvider>
      </body>
    </html>
  );
}
