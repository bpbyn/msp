import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import { Providers } from '@/providers/providers';
import Nav from '@/components/navbar/nav';
import SideNav from '@/components/navbar/side-nav';

const fontSans = Urbanist({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'MSP',
  description: 'A loan app.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${fontSans.className} grid h-[100lvh] grid-rows-[auto,1fr]`}
      >
        <Providers>
          <Nav />
          <div className="grid grid-cols-[auto,1fr]">
            <SideNav />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
