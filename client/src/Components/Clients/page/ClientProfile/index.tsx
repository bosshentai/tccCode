import { DefaultInsidePage } from '../../../shared/components/UIElements/DefaultInsidePage'
import { DefaultPage } from '../../../shared/components/UIElements/DefaultPage'

import whiteBack from '../../../../assets/icons/whiteBack.svg'
import whiteClose from '../../../../assets/icons/whiteLightClose.svg'
import whiteYes from '../../../../assets/icons/whitEyes.svg'

import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
import { PersonalTrainer } from '../../../PersonalTrainer/page/PersonalTrainer/index'

type clientProfile = {
  id: string
  name: string
  email: string
  birth: string
  personalTrainerID: string
  trainingPlanID: string
  discountID: string
}

export function ClientProfile() {
  // const {}

  const navigate = useNavigate()
  // const

  return (
    <DefaultPage>
      <DefaultInsidePage>
        <div className={styles.headerContainer}>
          <div className={styles.left}>
            <button
              onClick={() => {
                navigate(-1)
              }}>
              <img
                src={whiteBack}
                alt="Back"
              />
            </button>
          </div>
          <h1>Informação Do Cliente</h1>
        </div>
        <div className={styles.clientInfoContainer}>
          <div className={styles.infoContainer}>
            <label>Nome:</label>
            <p>nome do cliente</p>
          </div>
          <div className={styles.infoContainer}>
            <label>Email:</label>
            <p>email do cliente</p>
          </div>
          <div className={styles.infoContainer}>
            <label>Data de Nascimento:</label>
            <p>data de nascimento do cliente</p>
          </div>

          <div className={styles.infoContainer}>
            <div className={styles.chooseContainer}>
              <label>Plano de treino:</label>
              <p>Plano de Treino do cliente</p>
            </div>
            <div className={styles.btnContainer}>
              <button>Alterar</button>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.chooseContainer}>
              <label>Personal Trainer:</label>
              <p>Personal Trainer do cliente</p>
            </div>
            <div className={styles.btnContainer}>
              <button>Alterar</button>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.chooseContainer}>
              <label>Plano de treino:</label>
              <p>Plano de Treino do cliente</p>
            </div>
            <div className={styles.btnContainer}>
              <button>Alterar</button>
            </div>
          </div>
          {/* <button>Pagamento</button> */}
        </div>
      </DefaultInsidePage>
      <button className={styles.btnPay}>Pagamento</button>
    </DefaultPage>
  )
}