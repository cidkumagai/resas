import { selector } from 'recoil';
import { checkedListState } from '../atoms/checkedListState';

export const checkedListSelector = selector({
  key: 'checkedListSelector',
  get: ({ get }) => {
    const checkedList = get(checkedListState);
    return checkedList;
  },
});
