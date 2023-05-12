import { PrefectureDetail } from '../types/PrefectureDetail';
import { PrefectureItem } from '../types/PrefectureList';

export function createChartData(
  detailList: PrefectureDetail[],
  prefList: PrefectureItem[],
  selectedType: string
) {
  const formattedData = detailList.map(({ prefCode, data: prefData }) => {
    const name = prefList[prefCode - 1].prefName;
    console.log(prefData.filter(({ label }) => label === selectedType));
    const data = prefData
      .filter(({ label }) => label === selectedType)[0]
      .data.map(({ value }) => value);

    return { name, data };
  });

  return formattedData;
}
