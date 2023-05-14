import { atom } from 'recoil';

import { ATOM_KEYS } from '../../constants/recoilKeys';

type YearsState = number[];

const initialState: YearsState = [];

// レスポンスの年の一覧を格納する
export const yearsState = atom({
  key: ATOM_KEYS.YEARS_STATE,
  default: initialState,
});
