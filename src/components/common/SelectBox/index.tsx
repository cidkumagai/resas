import { useSetRecoilState } from 'recoil';

import { selectedTypeState } from '../../../globalStates/atoms/selectedTypeState';

import './SelectBox.css';

type Props = {
  info: string;
  children: React.ReactNode;
};

const SelectBox = ({ info, children }: Props) => {
  const setSelectedType = useSetRecoilState(selectedTypeState);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  };

  return (
    <label className="select_type_wrapper">
      {`${info} :`}
      <select className="select_type" onChange={handleSelectChange}>
        {children}
      </select>
    </label>
  );
};

export default SelectBox;
