import React, { useEffect, useMemo, useState } from 'react';

import Highcharts from 'highcharts';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsReact from 'highcharts-react-official';
highchartsAccessibility(Highcharts);

import Header from './Header';
import { useQueryPrefectures } from '../hooks/useQueryPrefectures';
import './Top.css';
// todo: recoilの削除
import { useQueryPrefectureDetail } from '../hooks/useQueryPrefectureDetail';

const Top = () => {
  // states
  const [selectedType, setSelectedType] = useState('総人口');
  const [checkedList, setCheckedList] = useState<number[]>([]);
  const [years, setYears] = useState<number[]>([]);
  // useQuery
  const { data, isLoading, error } = useQueryPrefectures();
  const { datas: testData } = useQueryPrefectureDetail(checkedList, setYears);
  console.log(testData);
  // todo: apiからのレスポンスに置き換える
  const DATA = useMemo(
    () => [
      {
        label: '総人口',
        data: [
          {
            year: 1980,
            value: 12817,
          },
          {
            year: 1985,
            value: 12707,
          },
          {
            year: 1990,
            value: 12571,
          },
          {
            year: 1995,
            value: 12602,
          },
          {
            year: 2000,
            value: 12199,
          },
          {
            year: 2005,
            value: 11518,
          },
          {
            year: 2010,
            value: 10888,
          },
          {
            year: 2015,
            value: 10133,
          },
          {
            year: 2020,
            value: 9302,
          },
          {
            year: 2025,
            value: 8431,
          },
          {
            year: 2030,
            value: 7610,
          },
          {
            year: 2035,
            value: 6816,
          },
          {
            year: 2040,
            value: 6048,
          },
          {
            year: 2045,
            value: 5324,
          },
        ],
      },
      {
        label: '年少人口',
        data: [
          {
            year: 1980,
            value: 2906,
            rate: 22.6,
          },
          {
            year: 1985,
            value: 2769,
            rate: 21.7,
          },
          {
            year: 1990,
            value: 2346,
            rate: 18.6,
          },
          {
            year: 1995,
            value: 2019,
            rate: 16,
          },
          {
            year: 2000,
            value: 1728,
            rate: 14.1,
          },
          {
            year: 2005,
            value: 1442,
            rate: 12.5,
          },
          {
            year: 2010,
            value: 1321,
            rate: 12.1,
          },
          {
            year: 2015,
            value: 1144,
            rate: 11.2,
          },
          {
            year: 2020,
            value: 936,
            rate: 10,
          },
          {
            year: 2025,
            value: 822,
            rate: 9.7,
          },
          {
            year: 2030,
            value: 705,
            rate: 9.2,
          },
          {
            year: 2035,
            value: 593,
            rate: 8.7,
          },
          {
            year: 2040,
            value: 513,
            rate: 8.4,
          },
          {
            year: 2045,
            value: 443,
            rate: 8.3,
          },
        ],
      },
      {
        label: '生産年齢人口',
        data: [
          {
            year: 1980,
            value: 8360,
            rate: 65.2,
          },
          {
            year: 1985,
            value: 8236,
            rate: 64.8,
          },
          {
            year: 1990,
            value: 8144,
            rate: 64.7,
          },
          {
            year: 1995,
            value: 8048,
            rate: 63.8,
          },
          {
            year: 2000,
            value: 7595,
            rate: 62.2,
          },
          {
            year: 2005,
            value: 7032,
            rate: 61,
          },
          {
            year: 2010,
            value: 6387,
            rate: 58.6,
          },
          {
            year: 2015,
            value: 5538,
            rate: 54.6,
          },
          {
            year: 2020,
            value: 4756,
            rate: 51.1,
          },
          {
            year: 2025,
            value: 4187,
            rate: 49.6,
          },
          {
            year: 2030,
            value: 3693,
            rate: 48.5,
          },
          {
            year: 2035,
            value: 3251,
            rate: 47.6,
          },
          {
            year: 2040,
            value: 2681,
            rate: 44.3,
          },
          {
            year: 2045,
            value: 2261,
            rate: 42.4,
          },
        ],
      },
      {
        label: '老年人口',
        data: [
          {
            year: 1980,
            value: 1550,
            rate: 12,
          },
          {
            year: 1985,
            value: 1702,
            rate: 13.3,
          },
          {
            year: 1990,
            value: 2081,
            rate: 16.5,
          },
          {
            year: 1995,
            value: 2535,
            rate: 20.1,
          },
          {
            year: 2000,
            value: 2876,
            rate: 23.5,
          },
          {
            year: 2005,
            value: 3044,
            rate: 26.4,
          },
          {
            year: 2010,
            value: 3179,
            rate: 29.1,
          },
          {
            year: 2015,
            value: 3442,
            rate: 33.9,
          },
          {
            year: 2020,
            value: 3578,
            rate: 38.4,
          },
          {
            year: 2025,
            value: 3422,
            rate: 40.5,
          },
          {
            year: 2030,
            value: 3212,
            rate: 42.2,
          },
          {
            year: 2035,
            value: 2972,
            rate: 43.6,
          },
          {
            year: 2040,
            value: 2854,
            rate: 47.1,
          },
          {
            year: 2045,
            value: 2620,
            rate: 49.2,
          },
        ],
      },
      {
        label: '総人口',
        data: [
          {
            year: 1980,
            value: 20000,
          },
          {
            year: 1985,
            value: 20000,
          },
          {
            year: 1990,
            value: 20000,
          },
          {
            year: 1995,
            value: 20000,
          },
          {
            year: 2000,
            value: 20000,
          },
          {
            year: 2005,
            value: 20000,
          },
          {
            year: 2010,
            value: 20000,
          },
          {
            year: 2015,
            value: 20000,
          },
          {
            year: 2020,
            value: 20000,
          },
          {
            year: 2025,
            value: 20000,
          },
          {
            year: 2030,
            value: 20000,
          },
          {
            year: 2035,
            value: 20000,
          },
          {
            year: 2040,
            value: 20000,
          },
          {
            year: 2045,
            value: 20000,
          },
        ],
      },
      {
        label: '年少人口',
        data: [
          {
            year: 1980,
            value: 2906,
            rate: 22.6,
          },
          {
            year: 1985,
            value: 2769,
            rate: 21.7,
          },
          {
            year: 1990,
            value: 2346,
            rate: 18.6,
          },
          {
            year: 1995,
            value: 2019,
            rate: 16,
          },
          {
            year: 2000,
            value: 1728,
            rate: 14.1,
          },
          {
            year: 2005,
            value: 1442,
            rate: 12.5,
          },
          {
            year: 2010,
            value: 1321,
            rate: 12.1,
          },
          {
            year: 2015,
            value: 1144,
            rate: 11.2,
          },
          {
            year: 2020,
            value: 936,
            rate: 10,
          },
          {
            year: 2025,
            value: 822,
            rate: 9.7,
          },
          {
            year: 2030,
            value: 705,
            rate: 9.2,
          },
          {
            year: 2035,
            value: 593,
            rate: 8.7,
          },
          {
            year: 2040,
            value: 513,
            rate: 8.4,
          },
          {
            year: 2045,
            value: 443,
            rate: 8.3,
          },
        ],
      },
      {
        label: '生産年齢人口',
        data: [
          {
            year: 1980,
            value: 8360,
            rate: 65.2,
          },
          {
            year: 1985,
            value: 8236,
            rate: 64.8,
          },
          {
            year: 1990,
            value: 8144,
            rate: 64.7,
          },
          {
            year: 1995,
            value: 8048,
            rate: 63.8,
          },
          {
            year: 2000,
            value: 7595,
            rate: 62.2,
          },
          {
            year: 2005,
            value: 7032,
            rate: 61,
          },
          {
            year: 2010,
            value: 6387,
            rate: 58.6,
          },
          {
            year: 2015,
            value: 5538,
            rate: 54.6,
          },
          {
            year: 2020,
            value: 4756,
            rate: 51.1,
          },
          {
            year: 2025,
            value: 4187,
            rate: 49.6,
          },
          {
            year: 2030,
            value: 3693,
            rate: 48.5,
          },
          {
            year: 2035,
            value: 3251,
            rate: 47.6,
          },
          {
            year: 2040,
            value: 2681,
            rate: 44.3,
          },
          {
            year: 2045,
            value: 2261,
            rate: 42.4,
          },
        ],
      },
      {
        label: '老年人口',
        data: [
          {
            year: 1980,
            value: 1550,
            rate: 12,
          },
          {
            year: 1985,
            value: 1702,
            rate: 13.3,
          },
          {
            year: 1990,
            value: 2081,
            rate: 16.5,
          },
          {
            year: 1995,
            value: 2535,
            rate: 20.1,
          },
          {
            year: 2000,
            value: 2876,
            rate: 23.5,
          },
          {
            year: 2005,
            value: 3044,
            rate: 26.4,
          },
          {
            year: 2010,
            value: 3179,
            rate: 29.1,
          },
          {
            year: 2015,
            value: 3442,
            rate: 33.9,
          },
          {
            year: 2020,
            value: 3578,
            rate: 38.4,
          },
          {
            year: 2025,
            value: 3422,
            rate: 40.5,
          },
          {
            year: 2030,
            value: 3212,
            rate: 42.2,
          },
          {
            year: 2035,
            value: 2972,
            rate: 43.6,
          },
          {
            year: 2040,
            value: 2854,
            rate: 47.1,
          },
          {
            year: 2045,
            value: 2620,
            rate: 49.2,
          },
        ],
      },
    ],
    []
  );
  // todo: 機能が密集しているので責務を分割する
  const filteredData = DATA.filter((d) => d.label === '総人口');
  const filteredData2 = filteredData.map(({ data }) => {
    return {
      name: '都道府県',
      data,
    };
  });
  // const years = useMemo(() => DATA[0].data.map(({ year }) => year), []);

  // todo: 別ファイルでの定義の方がいいかも？
  const options =
    checkedList.length === 0
      ? undefined
      : {
          title: {
            text: '人口推移グラフ',
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
          series: filteredData2.map(({ name, data }) => {
            return {
              name,
              data: data.flatMap(({ value }) => value),
            };
          }),
        };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { checked, value } = e.target;
    const numericValue = Number(value);

    if (checked) {
      setCheckedList((prevCheckedList) => [...prevCheckedList, numericValue]);
    } else {
      setCheckedList((prevCheckedList) =>
        prevCheckedList.filter((v) => v !== numericValue)
      );
    }
  };

  return (
    <>
      <Header />
      <section>
        <h1 className="prefecture_title">都道府県</h1>
        <ul className="prefecture_list">
          {data?.map(({ prefCode, prefName }) => (
            <li key={prefCode} className="prefecture_list_item">
              <label className="prefecture_list_item_label">
                <input
                  type="checkbox"
                  className="prefecture_list_item_checkbox"
                  value={prefCode}
                  onChange={(e) => handleCheckboxChange(e, prefCode - 1)}
                />
                {prefName}
              </label>
            </li>
          ))}
        </ul>
      </section>
      {options && (
        <section>
          <div className="select_type_wrapper">
            <select className="select_type" onChange={handleSelectChange}>
              <option>総人口</option>
              <option>年少人口</option>
              <option>生産年齢人口</option>
              <option>老年人口</option>
            </select>
          </div>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
            immutable={true}
          />
        </section>
      )}
    </>
  );
};

export default Top;
