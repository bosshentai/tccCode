import { useEffect, useState } from 'react'
import { DefaultInsidePage } from '../../../shared/components/UIElements/DefaultInsidePage'
import { DefaultPage } from '../../../shared/components/UIElements/DefaultPage'

import whiteBack from '../../../../assets/icons/whiteBack.svg'
import whiteClose from '../../../../assets/icons/whiteLightClose.svg'
import whiteYes from '../../../../assets/icons/whitEyes.svg'

import styles from './styles.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { PersonalTrainer } from '../../../PersonalTrainer/page/PersonalTrainer/index'
import axios, { AxiosResponse } from 'axios'
import ReactDOM from 'react-dom'
import { Backdrop } from '../../../shared/components/UIElements/Backdrop'
import { Payment } from '../Payment'
// import AxiosResponse from 'axios';

const portalElement = document.getElementById('overlays') as HTMLElement;

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
  const getClientUrl = 'http://localhost:5000/api/client/'
  // const {}

  const { id } = useParams()
  const navigate = useNavigate()
  // const


  const [paymentIsShow,setPaymentIsShow] = useState(false);


  const showPaymentHandler = () =>{
    setPaymentIsShow(true);
  }

  const closePaymentHandler = () =>{
    setPaymentIsShow(false)
  }

  const [clientInfo, setClientInfo] =
    useState<clientProfile>()

  useEffect(() => {
    axios
      .get(getClientUrl + id)
      .then((response: AxiosResponse) => {
        setClientInfo(response.data)
      })
  }, [id, navigate])

  return (
    <>
    {
      paymentIsShow && ReactDOM.createPortal(
        <>
        <Backdrop onClose={closePaymentHandler}/>
        <Payment onClose={closePaymentHandler}/>
        </>,portalElement
      )
    }
    <DefaultPage>
      <DefaultInsidePage>
        <div className={styles.headerContainer}>
          <div className={styles.left}>
            <button
              onClick={() => {
                navigate(-1)
              }}
            >
              <img src={whiteBack} alt="Back" />
            </button>
          </div>
          <h1>Informação Do Cliente</h1>
        </div>
        <div className={styles.clientInfoContainer}>
          <div className={styles.infoContainer}>
            <label>Nome:</label>
            <p>{clientInfo?.name}</p>
          </div>
          <div className={styles.infoContainer}>
            <label>Email:</label>
            <p>{clientInfo?.email}</p>
          </div>
          <div className={styles.infoContainer}>
            <label>Data de Nascimento:</label>
            <p>{clientInfo?.birth}</p>
          </div>

          <div className={styles.infoContainer}>
            <div className={styles.chooseContainer}>
              <label>Plano de treino:</label>
              <p>{clientInfo?.trainingPlanID}</p>
            </div>
            <div className={styles.btnContainer}>
              <button>Alterar</button>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.chooseContainer}>
              <label>Personal Trainer:</label>
              <p>{clientInfo?.personalTrainerID}</p>
            </div>
            <div className={styles.btnContainer}>
              <button>Alterar</button>
            </div>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.chooseContainer}>
              <label>Plano de treino:</label>
              <p>{clientInfo?.discountID}</p>
            </div>
            <div className={styles.btnContainer}>
              <button>Alterar</button>
            </div>
          </div>
          {/* <button>Pagamento</button> */}
        </div>
      </DefaultInsidePage>
      <div className={styles.btnPayContainer}>
        <button className={styles.btnPay} onClick={showPaymentHandler}>Pagamento</button>
      </div>
    </DefaultPage>
    </>
  )
}
