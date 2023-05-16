import Chart from '../../Chart';
import CheckBox from '../../common/CheckBox';
import Header from '../../common/Header';
import Loading from '../../common/Loading';
import { usePrefecturesQuery } from '../../../hooks/usePrefecturesQuery';

import './Top.css';

const Top = () => {
  const headerTitle = '都道府県別人口推移';
  const { data: prefectures, isLoading } = usePrefecturesQuery();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header title={headerTitle} />
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
