import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import {
  PrefectureItem,
  PrefectureListResponse,
} from '../types/PrefectureList';

export const usePrefecturesQuery = () => {
  const getPrefetures = async () => {
    const { data } = await axios.get<PrefectureListResponse>(
      `${process.env.REACT_APP_API_URL}/prefectures`,
      {
        headers: { 'X-API-KEY': process.env.REACT_APP_API_KEY },
      }
    );
    const { result } = data;
    return result;
  };

  return useQuery<PrefectureItem[], Error>({
    queryKey: ['prefectures'],
    queryFn: getPrefetures,
    staleTime: Infinity,
  });
};