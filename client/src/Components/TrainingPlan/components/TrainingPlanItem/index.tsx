import styles from './styles.module.scss'

type TrainingPlanProps = {
  id: string
  name: string
  amount: number
}

export const TrainingPlanItem = (
  props: TrainingPlanProps,
) => {
  const { id, name, amount } = props

  return (
    <li
      key={id}
      id={id}
      className={styles.trainingPlanContainer}>
      <div>
        <span>{name}</span>
      </div>
      <div className={styles.amount}>
        <span>Preço</span>
        <span>{amount}</span>
      </div>
    </li>
  )
}
