import { TrainingPlanItem} from "../TrainingPlanItem";

import styles from "./styles.module.scss";

type trainingPlain = {
  id: string;
  name: string;
  value: number;
}


type trainingPlanProps = {
  trainingPlans: trainingPlain[] | [];
}


export const TrainingPlanList = (props: trainingPlanProps) => {
  const trainingPlans = props.trainingPlans;

  return (
    <ul className={styles.trainingPlanlist}>
      {trainingPlans.map((trainingPlan: trainingPlain) => (
        <TrainingPlanItem
          key={trainingPlan.id}
          id={trainingPlan.id}
          name={trainingPlan.name}
          amount={trainingPlan.value}
        />
      ))}
    </ul>
  )
}

