import { DefaultPage } from '../../../shared/components/UIElements/DefaultPage'
import styles from './styles.module.scss'

export const Welcome = () => {
  return (
    <DefaultPage className={styles.welcomeContainer}>
      <p>Bem-vindo</p>
    </DefaultPage>
  )
}
