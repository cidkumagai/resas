import { useEffect, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';

import Highcharts from 'highcharts';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsReact from 'highcharts-react-official';

if (typeof Highcharts === 'object') {
  highchartsAccessibility(Highcharts);
}


import SelectBox from '../common/SelectBox';
import Option from '../common/Option';
import { checkedListSelector } from '../../globalStates/Selectors/checkedListSelector';
import { selectedTypeSelector } from '../../globalStates/Selectors/selectedTypeSelector';
import { yearsSelector } from '../../globalStates/Selectors/yearsSelector';
import { usePrefectureDetailQuery } from '../../hooks/usePrefectureDetailQuery';
import { usePrefecturesQuery } from '../../hooks/usePrefecturesQuery';
import { ChartOptions } from '../../types/ChartOptions';
import { FormattedData } from '../../types/FormattedData';
import { createChartData } from '../../utils/createChartData';
import { createOption } from '../../utils/createOption';

const Chart = () => {
  const [options, setOptions] = useState<ChartOptions | undefined>(undefined);
  const [formattedData, setFormattedData] = useState<FormattedData>([]);

  const years = useRecoilValue(yearsSelector);

  const checkedList = useRecoilValue(checkedListSelector);
  const selectedType = useRecoilValue(selectedTypeSelector);

  const { data } = usePrefecturesQuery();
  const { dataList, isLoading } = usePrefectureDetailQuery(checkedList);

  useEffect(() => {
    if (!data || isLoading) return;
    const formattedData = createChartData(dataList, data, selectedType);
    setFormattedData(formattedData);
  }, [setFormattedData, isLoading, selectedType, checkedList]);

  useEffect(() => {
    if (!formattedData) return;
    setOptions(createOption(selectedType, years, formattedData));
  }, [setOptions, formattedData]);

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
