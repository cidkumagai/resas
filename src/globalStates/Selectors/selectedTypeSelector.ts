import { selector } from 'recoil';

import { selectedTypeState } from '../atoms/selectedTypeState';
import { SELECTOR_KEYS } from '../../constants/recoilKeys';

export const selectedTypeSelector = selector({
  key: SELECTOR_KEYS.SELECTED_TYPE_SELECTOR,
  get: ({ get }) => {
    const selectedType = get(selectedTypeState);

    return selectedType;
  },
});
