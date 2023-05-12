import Chart from '../../chart';
import CheckBox from '../../common/CheckBox';
import Header from '../../common/Header';
import { usePrefecturesQuery } from '../../../hooks/usePrefecturesQuery';

import './Top.css';

const Top = () => {
  // useQuery
  const { data: prefectures, isLoading } = usePrefecturesQuery();

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Header />
      <section>
        <h1 className="prefecture_title">都道府県</h1>
        <ul className="prefecture_list">
          {prefectures?.map(({ prefCode, prefName }) => (
            <li key={prefCode} className="prefecture_list_item">
              <CheckBox prefCode={prefCode} prefName={prefName} />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <Chart />
      </section>
    </>
  );
};

export default Top;
