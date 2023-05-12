import { selector } from 'recoil';

import { yearsState } from '../atoms/yearsState';
import { selectorKeys } from '../recoilKeys';

export const yearsSelector = selector({
  key: selectorKeys.yearsSelector,
  get: ({ get }) => {
    const years = get(yearsState);
    return years;
  },
});
