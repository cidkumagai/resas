import { atom } from 'recoil';

import { AtomKeys } from '../recoilKeys';
import {
  PrefectureDetail,
  PrefectureDetailResponse,
} from '../../types/PrefectureDetail';

export const prefecturesState = atom<PrefectureDetail[]>({
  key: AtomKeys.PREFECTURES_STATE,
  default: [],
});
