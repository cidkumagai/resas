import { FC } from 'react';

import './Header.css';

type Props = {
  title: string;
};
const Header:FC<Props> = ({title}) => {
  return (
    <header className='header'>
      <h1 className='header_title'>{title}</h1>
    </header>
  );
};

export default Header;
