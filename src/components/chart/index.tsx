import { useEffect, useMemo, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import Highcharts from 'highcharts';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsReact from 'highcharts-react-official';
highchartsAccessibility(Highcharts);

import SelectBox from '../common/SelectBox';
import Option from '../common/Option';
import { yearsState } from '../../globalStates/atoms/yearsState';
import { checkedListSelector } from '../../globalStates/Selectors/checkedListSelector';
import { selectedTypeSelector } from '../../globalStates/Selectors/selectedTypeSelector';
import { usePrefectureDetailQuery } from '../../hooks/usePrefectureDetailQuery';
import { usePrefecturesQuery } from '../../hooks/usePrefecturesQuery';
import { ChartOptions } from '../../types/ChartOptions';
import { createChartData } from '../../utils/createChartData';
import { createOption } from '../../utils/createOption';

const Chart = () => {
  const [options, setOptions] = useState<ChartOptions | undefined>(undefined);
  const [formattedData, setFormattedData] = useState<
    {
      name: string;
      data: number[];
    }[]
  >([]);

  const [years, setYears] = useRecoilState(yearsState);

  const checkedList = useRecoilValue(checkedListSelector);
  const selectedType = useRecoilValue(selectedTypeSelector);

  const { data } = usePrefecturesQuery();
  const { datas, isLoading } = usePrefectureDetailQuery(checkedList, setYears);

  useEffect(() => {
    if (!data || isLoading) return;
    setFormattedData(createChartData(datas, data, selectedType));
  }, [data, isLoading, selectedType]);

  useEffect(() => {
    if (!formattedData) return;
    setOptions(createOption(selectedType, years, formattedData));
  }, [formattedData]);

  const PopulationTypeSelectBox = useMemo(
    () => (
      <SelectBox info="表示タイプ">
        <Option value="総人口" />
        <Option value="年少人口" />
        <Option value="生産年齢人口" />
        <Option value="老年人口" />
      </SelectBox>
    ),
    []
  );

  return (
    <>
      {options && (
        <>
          {PopulationTypeSelectBox}
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
            immutable={true}
          />
        </>
      )}
    </>
  );
};

export default Chart;
