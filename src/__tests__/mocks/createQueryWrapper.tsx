import { ReactElement } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

export const createQueryWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: Infinity,
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {},
    },
  });

  const queryWrapper = ({ children }: { children: ReactElement }) => {
    return (
      <HelmetProvider>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </RecoilRoot>
      </HelmetProvider>
    );
  };
  return { queryClient, queryWrapper };
};
