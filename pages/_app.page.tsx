import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Inter } from 'next/font/google';

import '../styles/globals.scss';

import type { AppProps } from 'next/app';

const inter = Inter({ subsets: ['latin'] });

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
}
