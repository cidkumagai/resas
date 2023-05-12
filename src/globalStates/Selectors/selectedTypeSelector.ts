import { selector } from 'recoil';

import { selectedTypeState } from '../atoms/selectedTypeState';
import { selectorKeys } from '../recoilKeys';

export const selectedTypeSelector = selector({
  key: selectorKeys.selectedTypeSelector,
  get: ({ get }) => {
    const selectedType = get(selectedTypeState);

    return selectedType;
  },
});
