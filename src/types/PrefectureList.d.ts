// アプリ内で利用するための都道府県リスト型定義
export type PrefectureItem = {
  prefCode: number;
  prefName: string;
};

// https://opendata.resas-portal.go.jp/api/v1/prefectures のレスポンス
export type PrefectureListResponse = {
  message: null;
  result: PrefectureItem[];
};
