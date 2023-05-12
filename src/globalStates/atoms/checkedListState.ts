import { atom } from 'recoil';

import { atomKeys } from '../recoilKeys';

type CheckedListState = number[];

const initialState: CheckedListState = [];

export const checkedListState = atom({
  key: atomKeys.checkedListState,
  default: initialState,
});
