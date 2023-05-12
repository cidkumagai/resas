import { selectedTypeState } from '../atoms/selectedTypeAtom';
import { selector } from 'recoil';

export const selectedTypeSelector = selector({
  key: 'selectedTypeSelector',
  get: ({ get }) => {
    const selectedType = get(selectedTypeState);

    return selectedType;
  },
});
