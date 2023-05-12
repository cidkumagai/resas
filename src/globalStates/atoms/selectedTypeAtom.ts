import { atom } from 'recoil';

type SelectedTypeState = string;

const initialState: SelectedTypeState = '総人口';

export const selectedTypeState = atom({
  key: 'selectedTypeState',
  default: initialState,
});
