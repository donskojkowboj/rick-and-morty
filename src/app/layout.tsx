import { Metadata } from 'next';
import { ReactNode } from 'react';
import Link from 'next/link';
import localFont from 'next/font/local';

import { Header } from '@/components/Header';
import { Container } from '@/components/Container';

import '@/styles/globals.scss';
import '@/styles/reset.scss';

const wubbaLubbaFont = localFont({
  src: '../fonts/WubbaLubbaDubDub.ttf',
  variable: '--font-wubba-lubba',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Rick and Morty App',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={wubbaLubbaFont.variable}>
        <Container>
          <Link href="/">
            <Header />
          </Link>
          {children}
        </Container>
      </body>
    </html>
  );
};

export default RootLayout;
