import { useEffect, useState } from 'react'

import styles from './styles.module.scss'

import whiteCross from '../../../../assets/icons/whiteCross.svg'
import blueCross from '../../../../assets/icons/blueCross.svg'
import { useParams } from 'react-router-dom'
import axios from 'axios'


type propsType = {
  onClose: () => void
}

type PaymentInfo = {
  personalTrainerId: string,
  personalTrainerName: string
  persontalTrainerValue: string
  trainingPlanId: string
  trainingPlanName: string
  trainingPlanValue: string
  discountPlanId: string
  discountName: string
  discountValue: string
}

export const Payment = (props: propsType) => {
  const getPaymentUrl = 'http://localhost:5000/api/payment/'

  const postPaymentUrl = "http://localhost:5000/api/payment/"

  const { id } = useParams()

  console.log(id);

  const [paymentInfo, setPaymentInfo] =
    useState<PaymentInfo>()

  const [total, setTotal] = useState<string>()

  useEffect(() => {
    // const getInfo = axios(getClientUrl + id)

    async function loadPayment() {
      const getInfo = await axios.get(getPaymentUrl + id)

      setPaymentInfo(getInfo.data)
    }

    loadPayment()
  }, [])

  useEffect(() => {

     const totalValue = Number(paymentInfo?.trainingPlanValue) + Number(paymentInfo?.persontalTrainerValue) - Number(paymentInfo?.discountValue)
    setTotal(totalValue.toString())
  }, [paymentInfo])


  // console.log(paymentInfo)

  const formAddPaymentHandler = async (event: React.FormEvent<HTMLFormElement>) =>{

    event.preventDefault()
    const formData = {
      clientId: id,
      trainingPlanId : paymentInfo?.trainingPlanId,
      personalTrainerId: paymentInfo?.personalTrainerId,
      discountId: paymentInfo?.discountPlanId
    }

    // console.log(formData)
    try {
      await axios.post(postPaymentUrl,formData)
      props.onClose()
    } catch (error) {
      console.log(error)
    }
  }

  const [closeButtonIsHover, setCloseButtonIsHover] =
    useState(false)


  const hoverHandler = () => {
    setCloseButtonIsHover(true)
  }

  const leaveHandler = () => {
    setCloseButtonIsHover(false)
  }

  const iconChange = !closeButtonIsHover
    ? whiteCross
    : blueCross

  const trainingPlanNameIsNull = paymentInfo?.trainingPlanName === 'null'
  const personalTrainerNameIsNull = paymentInfo?.personalTrainerName === 'null'
  const discountNameIsNull = paymentInfo?.discountName === 'null'


  return (
    <div className={styles.addPaymentContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.left}>
            <h1>Pagamento</h1>
          </div>
          <button
            className={styles.right}
            onMouseEnter={hoverHandler}
            onMouseLeave={leaveHandler}
            onClick={props.onClose}
          >
            <img src={iconChange} alt="close" />
          </button>
        </div>
      </div>
      <form onSubmit={formAddPaymentHandler} 
      className={styles.formContainer}>
        <div className={styles.title}>
          <h2>Detalhes</h2>
          <h2>Preço</h2>
        </div>
        <div className={styles.itemContainer}>
          <p>
            <strong>Plano de Treino:</strong>
            {trainingPlanNameIsNull ? '---' : paymentInfo?.trainingPlanName}
            {/* {paymentInfo?.trainingPlanName} */}
          </p>
          <p>{paymentInfo?.trainingPlanValue}$00</p>
        </div>
        <div className={styles.itemContainer}>
          <p>
            <strong>Personal Trainer:</strong>
            {personalTrainerNameIsNull ? '---' : paymentInfo?.personalTrainerName}
            {/* {paymentInfo?.personalTrainerName} */}
          </p>
          <p>{paymentInfo?.persontalTrainerValue}$00</p>
        </div>
        <div className={styles.itemContainer}>
          <p>
            <strong>Desconto:</strong>
            {discountNameIsNull ? '---' : paymentInfo?.discountName}
            {/* {paymentInfo?.discountName} */}
          </p>
          <p>{paymentInfo?.discountValue}$00</p>
        </div>
        <div className={styles.itemContainer}>
          <p>
            <strong>Total:</strong>
          </p>
          <p>{total}$00</p>
        </div>
        <div className={styles.btnSubmitContainer}>
          <button>Confirmar</button>
        </div>
      </form>
    </div>
  )
}
