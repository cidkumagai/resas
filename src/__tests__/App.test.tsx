import App from '../App';
import { render, renderHook, waitFor, screen } from '@testing-library/react';
import { QUERY_KEYS } from '../constants/queryKeys';
import { createQueryWrapper } from './mocks/createQueryWrapper';
import CheckBox from '../components/common/CheckBox';
import Header from '../components/common/Header';
import Loading from '../components/common/Loading';
import Option from '../components/common/Option';
import SelectBox from '../components/common/SelectBox';
import { usePrefecturesQuery } from '../hooks/usePrefecturesQuery';
import { usePrefectureDetailQuery } from '../hooks/usePrefectureDetailQuery';
import { RecoilRoot } from 'recoil';

describe('component rendering test', () => {
  test('CheckBox component test', async () => {
    render(
      <RecoilRoot>
        <CheckBox prefCode={1} prefName="北海道" />
      </RecoilRoot>
    );

    expect(screen.getByText('北海道')).toBeInTheDocument();
  });

  test('Header component test', () => {
    render(<Header title="都道府県別人口推移" />);
    expect(screen.getByText('都道府県別人口推移')).toBeInTheDocument();
  });

  test('Loading component test', () => {
    render(<Loading />);
    expect(
      screen.getByText('通信中...しばらくお待ちください')
    ).toBeInTheDocument();
  });

  test('SelectBox component and Option test', () => {
    render(
      <SelectBox info="表示タイプ">
        <Option value="総人口" />
        <Option value="年少人口" />
        <Option value="生産年齢人口" />
        <Option value="老年人口" />
      </SelectBox>
    );
    expect(screen.getByText('表示タイプ :')).toBeInTheDocument();
    expect(screen.getByText('総人口')).toBeInTheDocument();
    expect(screen.getByText('年少人口')).toBeInTheDocument();
    expect(screen.getByText('生産年齢人口')).toBeInTheDocument();
    expect(screen.getByText('老年人口')).toBeInTheDocument();
  });
});

describe('API test', () => {
  test('not mock test', async () => {
    const { queryWrapper } = createQueryWrapper();

    const { result } = renderHook(() => usePrefecturesQuery(), {
      wrapper: queryWrapper,
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(true);
      expect(result.current.data).toEqual(undefined);
    });
  });

  test('mock test', async () => {
    const { queryClient, queryWrapper } = createQueryWrapper();
    queryClient.setQueryData(
      [QUERY_KEYS.PREFECTURES],
      [
        {
          prefCode: 1,
          prefName: '北海道',
        },
      ]
    );
    queryClient.setQueryData([QUERY_KEYS.PREFECTURE_DETAIL, 1], {
      dataList: [
        {
          prefCode: 1,
          data: [
            {
              label: '総人口',
              data: [
                {
                  year: 1960,
                  value: 5039206,
                },
                {
                  year: 1965,
                  value: 5171800,
                },
                {
                  year: 1970,
                  value: 5310795,
                },
                {
                  year: 1975,
                  value: 5407577,
                },
                {
                  year: 1980,
                  value: 5483916,
                },
                {
                  year: 1985,
                  value: 5572598,
                },
              ],
            },
          ],
        },
      ],
      isLoading: false,
    });

    const { result: prefecturesResult } = renderHook(
      () => usePrefecturesQuery(),
      {
        wrapper: queryWrapper,
      }
    );

    const { result: prefectureDetailResult } = renderHook(
      () => usePrefectureDetailQuery([1]),
      {
        wrapper: queryWrapper,
      }
    );

    await waitFor(() => {
      expect(prefecturesResult.current.isLoading).toBe(false);
      expect(prefecturesResult.current.data).toEqual([
        {
          prefCode: 1,
          prefName: '北海道',
        },
      ]);
      expect(prefectureDetailResult.current.isLoading).toBe(false);
      expect(prefectureDetailResult.current.dataList).toEqual([
        {
          dataList: [
            {
              prefCode: 1,
              data: [
                {
                  label: '総人口',
                  data: [
                    {
                      year: 1960,
                      value: 5039206,
                    },
                    {
                      year: 1965,
                      value: 5171800,
                    },
                    {
                      year: 1970,
                      value: 5310795,
                    },
                    {
                      year: 1975,
                      value: 5407577,
                    },
                    {
                      year: 1980,
                      value: 5483916,
                    },
                    {
                      year: 1985,
                      value: 5572598,
                    },
                  ],
                },
              ],
            },
          ],
          isLoading: false,
        },
      ]);
    });
  });
});

describe('App test', () => {
  test('App render test', async () => {
    const { queryClient, queryWrapper } = createQueryWrapper();
    queryClient.setQueryData(
      [QUERY_KEYS.PREFECTURES],
      [
        {
          prefCode: 1,
          prefName: '北海道',
        },
      ]
    );

    render(<App />, { wrapper: queryWrapper });
    expect(screen.getByText('都道府県別人口推移')).toBeInTheDocument();
    expect(screen.getByText('都道府県')).toBeInTheDocument();
    expect(screen.getByText('北海道')).toBeInTheDocument();
  });
});
