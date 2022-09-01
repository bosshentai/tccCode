import React, { useRef, useState } from 'react'
import { OptionItem } from '../OptionItem'

type data = {
  id: string
  name: string
}

type dataListProps = {
  select: data[] | []
  onChange: (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => void
}

export const OptionList = (props: dataListProps) => {
  // const [selected,setSelected]= useState<String>();

  // console.log(itemSelectRef.current)

  // const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) =>{
  //   // setSelected(event)
  //   // setSelected(onChange(info[e.target.selectIndex]))
  //   console.log(event.target.value)
  //   setSelected(event.target.value)
  // }

  // console.log(selected)

  const info = props.select
  return (
    <select onChange={props.onChange}>
      <option
        defaultValue="None"
        selected
        disabled>
        Escolha
      </option>
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
