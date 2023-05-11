export type PrefectureDetail = {
  label: string;
  data: {
    year: number;
    value: number;
    rate?: number;
  }[];
};

// https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=[id] のレスポンス
export type PrefectureDetailResponse = {
  message: null;
  result: {
    boundaryYear: number;
    data: PrefectureDetail[];
  };
};
