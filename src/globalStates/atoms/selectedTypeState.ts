import { atom } from 'recoil';

import { atomKeys } from '../recoilKeys';

type SelectedTypeState = string;

const initialState: SelectedTypeState = '総人口';

export const selectedTypeState = atom({
  key: atomKeys.selectedTypeState,
  default: initialState,
});
