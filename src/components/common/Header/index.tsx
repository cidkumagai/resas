import { FC } from 'react';
import { Helmet } from 'react-helmet';

import './Header.css';

type Props = {
  title: string;
};
const Header: FC<Props> = ({ title }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <header className="header">
        <h1 className="header_title">{title}</h1>
      </header>
    </>
  );
};

export default Header;
