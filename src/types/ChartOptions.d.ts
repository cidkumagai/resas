export type ChartOptions =
  | {
      title: {
        text: string;
      };
      xAxis: {
        categories: number[];
        title: {
          text: string;
        };
      };
      yAxis: {
        title: {
          text: string;
        };
      };
      series: ChartDatas[];
    }
  | undefined;
