import { atom } from 'recoil';

type CheckedListState = number[];

const initialState: CheckedListState = [];

export const checkedListState = atom({
  key: 'checkedListState',
  default: initialState,
});
