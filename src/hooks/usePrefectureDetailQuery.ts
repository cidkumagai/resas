import { useQueries, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';

import {
  PrefectureDetail,
  PrefectureDetailResponse,
} from '../types/PrefectureDetail';

export const usePrefectureDetailQuery = (
  indexes: number[],
  setYears: React.Dispatch<React.SetStateAction<number[]>>
) => {
  const getPrefetureDetail = async (
    prefCode: number
  ): Promise<PrefectureDetail> => {
    const { data } = await axios.get<PrefectureDetailResponse>(
      `${process.env.REACT_APP_API_URL}/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
      {
        headers: { 'X-API-KEY': process.env.REACT_APP_API_KEY },
      }
    );
    const { result } = data;
    setYears((prevYears) => {
      if (prevYears.length > 0) {
        return prevYears;
      }
      return result.data[0].data.map(({ year }) => year);
    });

    return { prefCode, data: result.data };
  };

  const results = useQueries<UseQueryResult<PrefectureDetail[], Error>[]>({
    queries: indexes.map((index) => {
      return {
        queryKey: ['prefectureDetail', index],
        queryFn: () => getPrefetureDetail(index),
        staleTime: Infinity,
      };
    }),
  });

  const datas: PrefectureDetail[] = results.map((result) => {
    return (result.data as PrefectureDetail) ?? [];
  });

  const isLoading = results.some((result) => result.isLoading);

  return { datas, isLoading };
};
