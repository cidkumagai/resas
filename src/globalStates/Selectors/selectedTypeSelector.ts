import { selector } from 'recoil';

import { selectedTypeState } from '../atoms/selectedTypeAtom';

export const selectedTypeSelector = selector({
  key: 'selectedTypeSelector',
  get: ({ get }) => {
    const selectedType = get(selectedTypeState);

    return selectedType;
  },
});
