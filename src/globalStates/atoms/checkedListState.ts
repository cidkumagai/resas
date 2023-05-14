import { atom } from 'recoil';

import { ATOM_KEYS } from '../../constants/recoilKeys';

type CheckedListState = number[];

const initialState: CheckedListState = [];

export const checkedListState = atom({
  key: ATOM_KEYS.CHECKED_LIST_STATE,
  default: initialState,
});
