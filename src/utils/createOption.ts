import { ChartData } from '../types/ChartData';
import { ChartOptions } from '../types/ChartOptions';

export function createOption(
  selectedType: string,
  years: number[],
  chartDatas: ChartData[]
): ChartOptions {
  const options =
    chartDatas.length === 0
      ? undefined
      : {
          title: {
            text: `人口推移グラフ(${selectedType})`,
          },
          xAxis: {
            categories: years,
            title: {
              text: '年度',
            },
          },
          yAxis: {
            title: {
              text: '人口数',
            },
          },
          legend: {
            align: 'center',
          },
          series: chartDatas,
        };

  return options;
}
