// import { DefaultInsidePage } from '../../shared/components/UIElements/DefaultInsidePage/index';
import { DefaultPage } from '../../shared/components/UIElements/DefaultPage'

import styles from './styles.module.scss'

export const Login = () => {
  return (
    <div>
      <div className={styles.formContainer}>
        <h1>Login</h1>
        <div className={styles.labelInputContainer}>
          <label>Email</label>
          <input type="text" placeholder='Insira o email'/>
        </div>

        <div className={styles.labelInputContainer}>
          <label>Palavra-passe</label>
          <input placeholder='Insira a palavra-passe' />
        </div>

        <button>Logar</button>
       
      </div>
    </div>
  )
}
