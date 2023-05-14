import { atom } from 'recoil';

import { ATOM_KEYS } from '../../constants/recoilKeys';

type YearsState = number[];

const initialState: YearsState = [];

export const yearsState = atom({
  key: ATOM_KEYS.YEARS_STATE,
  default: initialState,
});
