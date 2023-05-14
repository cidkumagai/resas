import { selector } from 'recoil';

import { yearsState } from '../atoms/yearsState';
import { SELECTOR_KEYS } from '../../constants/recoilKeys';

// レスポンスの年の一覧を返却する
export const yearsSelector = selector({
  key: SELECTOR_KEYS.YEARS_SELECTOR,
  get: ({ get }) => {
    const years = get(yearsState);
    return years;
  },
});
