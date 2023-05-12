import { selector } from 'recoil';

import { checkedListState } from '../atoms/checkedListState';
import { selectorKeys } from '../recoilKeys';

export const checkedListSelector = selector({
  key: selectorKeys.checkedListSelector,
  get: ({ get }) => {
    const checkedList = get(checkedListState);
    return checkedList;
  },
});
