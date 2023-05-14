import { selector } from 'recoil';

import { checkedListState } from '../atoms/checkedListState';
import { SELECTOR_KEYS } from '../../constants/recoilKeys';

export const checkedListSelector = selector({
  key: SELECTOR_KEYS.CHECKED_LIST_SELECTOR,
  get: ({ get }) => {
    const checkedList = get(checkedListState);
    return checkedList;
  },
});
