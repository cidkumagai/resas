type Props = {
  value: string;
};
const Option = ({ value }: Props) => {
  return <option value={value}>{value}</option>;
};

export default Option;
