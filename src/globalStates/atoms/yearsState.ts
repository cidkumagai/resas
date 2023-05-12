import { atom } from 'recoil';

type YearsState = number[];

const initialState: YearsState = [];

export const yearsState = atom({
  key: 'yearsState',
  default: initialState,
});
