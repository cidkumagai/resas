import { selector } from 'recoil';

import { yearsState } from '../atoms/yearsState';

export const yearsSelector = selector({
  key: 'yearsSelector',
  get: ({ get }) => {
    const years = get(yearsState);
    return years;
  },
});
