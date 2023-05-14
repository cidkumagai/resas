import App from '../App';
import { render, renderHook, waitFor, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { usePrefecturesQuery } from '../hooks/usePrefecturesQuery';
import { ReactElement } from 'react';
import { QUERY_KEYS } from '../constants/queryKeys';

test('failure query component', async () => {
  const createQueryWrapper = () => {
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
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );
    };
    return { queryClient, queryWrapper };
  };

  const { queryClient, queryWrapper } = createQueryWrapper();
  queryClient.setQueryData(
    [QUERY_KEYS.PREFECTURES],
    [
      {
        prefCode: 1,
        prefName: '北海道',
      },
      {
        prefCode: 2,
        prefName: '青森県',
      },
    ]
  );

  // const { result } = renderHook(() => usePrefecturesQuery(), {
  //   wrapper: queryWrapper,
  // });

  // await waitFor(() => {
  //   expect(result.current.isSuccess).toBe(true);
  // });

  // console.log(result.current.data);
  render(<App />, { wrapper: queryWrapper });

  screen.debug();
});
