import { useRef } from 'react'
import { OptionItem } from '../OptionItem'

type data = {
  id: string
  name: string
}

type dataListProps = {
  data: data[] | []
}

export const OptionList = (props: dataListProps) => {

  const itemSelectRef = useRef(null)


  // console.log(itemSelectRef)

  const info = props.data
  return (
    <select ref={itemSelectRef}>
      {info.map((data: data) => (
        <OptionItem
          key={data.id}
          id={data.id}
          name={data.name}
        />
      ))}
    </select>
  )
}
