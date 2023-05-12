import { useSetRecoilState } from 'recoil';

import { checkedListState } from '../../../globalStates/atoms/checkedListState';

type Props = {
  prefCode: number;
  prefName: string;
};

const CheckBox = ({ prefCode, prefName }: Props) => {
  const setCheckedList = useSetRecoilState(checkedListState);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <label className="prefecture_list_item_label">
      <input
        type="checkbox"
        className="prefecture_list_item_checkbox"
        value={prefCode}
        onChange={(e) => handleCheckboxChange(e)}
      />
      {prefName}
    </label>
  );
};

export default CheckBox;
