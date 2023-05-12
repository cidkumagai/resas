import { atom } from 'recoil';

import { atomKeys } from '../recoilKeys';

type YearsState = number[];

const initialState: YearsState = [];

export const yearsState = atom({
  key: atomKeys.yearsState,
  default: initialState,
});
