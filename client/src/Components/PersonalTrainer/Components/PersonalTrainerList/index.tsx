

import { PersonalTrainerItem } from "../PersonalTrainerItem";
import styles from "./styles.module.scss";

type personalTrainer = {
  id: string;
  name: string;
  email: string;
}

type personalTrainerListProps = {
  personalTrainers: personalTrainer[] | [];

}

export const PersonalTrainerList = (props: personalTrainerListProps) => {

  const personalTrainerData = props.personalTrainers;

  return (
    <ul className={styles.personalTrainerList}>
      {
        personalTrainerData.map((personalTrainer: personalTrainer) => (
          <PersonalTrainerItem
            key={personalTrainer.id}
            id={personalTrainer.id}
            name={personalTrainer.name}
            email={personalTrainer.email}
          />
        ))
      }
    </ul>
  )

}