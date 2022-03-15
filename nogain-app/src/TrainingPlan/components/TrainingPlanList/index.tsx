import { TrainingPlanItem} from "../TrainingPlanItem";

type trainingPlain = {
  id: string;
  name: string;
  amount: number;
}


type trainingPlanProps = {
  trainingPlans: trainingPlain[] | [];
}


export const TrainingPlanList = (props: trainingPlanProps) => {
  const trainingPlans = props.trainingPlans;

  return (
    <ul className="training-plan-list">
      {trainingPlans.map((trainingPlan: trainingPlain) => (
        <TrainingPlanItem
          key={trainingPlan.id}
          id={trainingPlan.id}
          name={trainingPlan.name}
          amount={trainingPlan.amount}
        />
      ))}
    </ul>
  )
}

