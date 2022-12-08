import React from 'react'
import { OptionItem } from '../OptionItem'

import styles from "./styles.module.scss";

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


  const info = props.select
  return (
    <select onChange={props.onChange} className={styles.selectContainer}>
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
