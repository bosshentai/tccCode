

type optionInfo = {
  id: string;
  name: string;
}

export const OptionItem = (props: optionInfo) => {
  const {id , name} = props;

  return (
    <option key={id} value={id}>{name}</option>
  )
}