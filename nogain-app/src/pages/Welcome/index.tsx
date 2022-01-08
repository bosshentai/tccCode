import { DefaultPage } from "../../components/layout/DefaultPage";
import styles from "./styles.module.scss";

export const Welcome = () => {
  return (
    <DefaultPage className={styles.welcomeContainer}>
      <p>Bem-vindo</p>
    </DefaultPage>
  );
};
