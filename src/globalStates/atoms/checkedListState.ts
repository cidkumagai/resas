import { atom } from 'recoil';

import { ATOM_KEYS } from '../../constants/recoilKeys';

type CheckedListState = number[];

const initialState: CheckedListState = [];

// checkされた都道府県のidの一覧を格納する
export const checkedListState = atom({
  key: ATOM_KEYS.CHECKED_LIST_STATE,
  default: initialState,
});
