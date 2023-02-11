import styles from './styles.module.scss'

import whiteCross from '../../../../assets/icons/whiteCross.svg'
import blueCross from '../../../../assets/icons/blueCross.svg'
// import whiteCheck from '../../../../assets/icons/whiteCheck.svg'
import React, { useEffect, useRef, useState } from 'react'
// import { RecordWithTtl } from 'dns'
import { validName } from '../../../shared/util/validName'
import { validEmail } from '../../../shared/util/validEmail'
import { validPhoneNumber } from '../../../shared/util/validPhoneNumber'
import { validBirth } from '../../../shared/util/validBirth'
import { OptionList } from '../../components/OptionList'
import axios, { Axios, AxiosResponse } from 'axios'

// not finished

const urlPathGetDiscount =
  'http://localhost:5000/api/discount/'

const urlPathGetTrainingPlan =
  'http://localhost:5000/api/trainingplan/'

const urlPathGetPersonalTrainer =
  'http://localhost:5000/api/personalTrainer/'

const urlPathGetAllUser =
  'http://localhost:5000/api/user/allemail'

type propsType = {
  onClose: () => void
}

type trainingPlanInfo = {
  id: string
  name: string
}

type personalTrainerInfo = {
  id: string
  name: string
}

type discountInfo = {
  id: string
  name: string
}

type userInfo = {
  email: string
}

export const AddClient = (props: propsType) => {
  // name
  const nameInputRef = useRef<HTMLInputElement>(null)
  const [isNameOk, setIsNameOk] = useState(true)

  // email
  const emailInputRef = useRef<HTMLInputElement>(null)
  const [isEmailOk, setIsEmailOk] = useState(true)
  const [listUserEmail, setListUserEmail] = useState<
    userInfo[]
  >([])

  //phone number
  const phoneInputRef = useRef<HTMLInputElement>(null)
  const [isNumberOk, setIsNumberOk] = useState(true)

  // Birth
  const birthInputRef = useRef<HTMLInputElement>(null)
  const [isBirthOk, setIsBirthOk] = useState(true)

  // CNI
  const cniInputRef = useRef<HTMLInputElement>(null)
  const [isCNIOk, setIsCNIOk] = useState(true)

  //training Plan
  const [listTrainingPlan, setListTrainingPlan] = useState<
    trainingPlanInfo[]
  >([])
  const [selectedTrainingPlan, setSelectedTrainingPlan] =
    useState<String>()
  const [isTrainingChecked, setIsTrainingChecked] =
    useState(false)
  const [
    nullTrainingPlanSelect,
    setNullTrainingPlanSelect,
  ] = useState<trainingPlanInfo[]>([])

  // Personal Trainer
  const [listPersonalTrainer, setListPersonalTrainer] =
    useState<personalTrainerInfo[]>([])
  const [
    isPersonalTrainerChecked,
    setIsPersonalTrainerChecked,
  ] = useState(false)

  const [
    selectedPersonalTrainer,
    setSelectedPersonalTrainer,
  ] = useState<String>()

  const [
    nullPersonalTrainerSelect,
    setNullPersonalTrainerSelect,
  ] = useState<personalTrainerInfo[]>([])

  // Discount
  const [listDiscount, setListDiscount] = useState<
    discountInfo[]
  >([])
  const [isDiscountChecked, setIsDiscountChecked] =
    useState(false)
  const [nullDiscountSelect, setNullDiscountSelect] =
    useState<discountInfo[]>([])
  const [selectedDiscount, setSelectedDiscount] =
    useState<String>()

  /// Have to create useState the data In it -- lomba

  const [isHover, setHover] = useState(false)

  // console.log('Renderizou')

  // trainingPLan
  useEffect(() => {
    // try {
    // setListTrainingPlan(DUMMY_DATA)

    try {
      axios
        .get(urlPathGetTrainingPlan)
        .then((response: AxiosResponse) => {
          setListTrainingPlan(response.data)
        })
    } catch (error) {
      console.log('Error' + error)
    }
  }, [])

  // PersonalTrainer
  useEffect(() => {

    try {
      axios
        .get(urlPathGetPersonalTrainer)
        .then((response: AxiosResponse) => {
          setListPersonalTrainer(response.data)
        })
    } catch (error) {
      console.log('Error: ' + error)
    }
  }, [])

  // Discount
  useEffect(() => {
    try {
      axios
        .get(urlPathGetDiscount)
        .then((response: AxiosResponse) => {
          setListDiscount(response.data)
        })
    } catch (error) {
      console.log('Error: ' + error)
    }
  }, [])

  // email
  useEffect(() => {
    axios
      .get(urlPathGetAllUser)
      .then((response: AxiosResponse) => {
        setListUserEmail(response.data)
      })
  }, [])
  // Training PLan

  const listTrainingPlanFiltered = listTrainingPlan.filter(
    (item) => item.name !== 'null',
  )

  // training plan

  useEffect(() => {
    const listTrainingPlanNullItem =
      listTrainingPlan.filter(
        (item) => item.name === 'null',
      )

    setNullTrainingPlanSelect(listTrainingPlanNullItem)
  }, [listTrainingPlan])

  // personal Trainer
  useEffect(() => {
    const listPersonalTrainerNullItem =
      listPersonalTrainer.filter(
        (item) => item.name === 'null',
      )

    setNullPersonalTrainerSelect(
      listPersonalTrainerNullItem,
    )
  }, [listPersonalTrainer])



  // Discount
  useEffect(() => {
    const listDiscountNullItem = listDiscount.filter(
      (item) => item.name === 'null',
    )

    setNullDiscountSelect(listDiscountNullItem)
  }, [listDiscount])



  const listDiscountFiltered = listDiscount.filter(
    (item) => item.name !== 'null',
  )

  // UseEffect to Checked the Chosen one

  const trainingPlanSelectedHandler = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedTrainingPlan(event.target.value)
  }

  const personalTrainerSelectedHandler = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedPersonalTrainer(event.target.value)
  }

  const discountSelectedHandler = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    return setSelectedDiscount(event?.target.value)
  }



  const hoverHandler = () => {
    setHover(true)
  }

  const leaveHandler = () => {
    setHover(false)
  }

  const checkTrainingHandler = () => {
    setIsTrainingChecked(!isTrainingChecked)

  }

  const checkPersonalTrainerHandler = () => {
    setIsPersonalTrainerChecked(!isPersonalTrainerChecked)
  }

  const checkDiscountHandler = () => {
    setIsDiscountChecked(!isDiscountChecked)
  }

  const formAddClientHandler = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    //name
    const enteredName = nameInputRef.current!.value
    const nameIsNotEmpty = enteredName.trim().length !== 0
    const nameIsValid = validName(enteredName)
    const nameIsOk = nameIsNotEmpty && nameIsValid

    //email
    const enteredEmail = emailInputRef.current!.value
    const emailIsNotEmpty = enteredEmail.trim().length !== 0
    const emailIsValid = validEmail(enteredEmail)

    const emailIsUsed = listUserEmail.some(
      (item) => item.email === enteredEmail,
    )


    const emailIsOk =
      emailIsNotEmpty && emailIsValid && !emailIsUsed

    // phone
    const enteredPhone = phoneInputRef.current!.value
    const phoneIsNotEmpty = enteredPhone.trim().length !== 0
    const phoneIsValid = validPhoneNumber(enteredPhone)
    const phoneIsOk = phoneIsNotEmpty && phoneIsValid

    // birth
    const enteredBirth = birthInputRef.current!.value
    const birthIsNotEmpty = enteredBirth.trim().length !== 0
    const birthIsValid = validBirth(
      Number(enteredBirth.slice(8, 10)),
      Number(enteredBirth.slice(5, 7)),
      Number(enteredBirth.slice(0, 4)),
    )

    const birthIsOk = birthIsNotEmpty && birthIsValid

    if (!nameIsOk) {
      setIsNameOk(false)
    }

    if (!emailIsOk) {
      setIsEmailOk(false)
    }

    if (!phoneIsOk) {
      setIsNumberOk(false)
    }

    if (!birthIsOk) {
      setIsBirthOk(false)
    }


    if (nameIsOk) {
      setIsNameOk(true)
    }

    if (emailIsOk) {
      setIsEmailOk(true)
    }

    if (phoneIsOk) {
      setIsNumberOk(true)
    }

    if (birthIsOk) {
      setIsBirthOk(true)
    }

    const formOk =
      nameIsOk && emailIsOk && phoneIsOk && birthIsOk

    if (formOk) {
    

      const urlPost = 'http://localhost:5000/api/client/add'

      const formData = {
        name: enteredName,
        email: enteredEmail,
        phone: enteredPhone,
        birth: enteredBirth,
        trainingplanId: isTrainingChecked
          ? selectedPersonalTrainer
          : nullTrainingPlanSelect.at(0)?.id,
        personalTrainerId: isPersonalTrainerChecked
          ? selectedPersonalTrainer
          : nullPersonalTrainerSelect.at(0)?.id,
        discountId: isDiscountChecked
          ? selectedDiscount
          : nullDiscountSelect.at(0)?.id,
      }

      console.log(formData)

      try {
        await axios.post(urlPost,formData)
        props.onClose()
      } catch (error) {
          console.log(error)
      }

    
    }
  }

  const iconChange = !isHover ? whiteCross : blueCross

  const nameControllerClass = isNameOk
    ? `${styles.inputValid}`
    : `${styles.inputInvalid}`

  const emailControllerClass = isEmailOk
    ? `${styles.inputValid}`
    : `${styles.inputInvalid}`

  const phoneControllerClass = isNumberOk
    ? `${styles.inputValid}`
    : `${styles.inputInvalid}`

  const birthControllerClass = isBirthOk
    ? `${styles.inputValid}`
    : `${styles.inputInvalid}`


  return (
    <div className={styles.addClientContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.left}>
          <h1>Registar Cliente</h1>
        </div>
        <button
          onMouseEnter={hoverHandler}
          onMouseLeave={leaveHandler}
          className={styles.right}
          onClick={props.onClose}>
          <img
            src={iconChange}
            alt="close"
          />
        </button>
      </div>
      <form
        onSubmit={formAddClientHandler}
        className={styles.formContainer}>
        <div>
          <div className={styles.textInput}>
            <label>Nome Completo</label>
            <input
              type="text"
              ref={nameInputRef}
              placeholder="Insira o nome do Cliente"
              className={nameControllerClass}
            />
          </div>
          <div className={styles.textInput}>
            <label>Email</label>
            <input
              type="email"
              ref={emailInputRef}
              placeholder="Insira o email do Cliente"
              className={emailControllerClass}
            />
          </div>
        </div>
        <div>
          <div className={styles.textInput}>
            <label>Telemovel</label>
            <input
              type="text"
              ref={phoneInputRef}
              placeholder="Insira o numero telemovel do Cliente"
              className={phoneControllerClass}
            />
          </div>

          <div className={styles.textInput}>
            <label>Data de Nascimento</label>
            <input
              type="date"
              ref={birthInputRef}
              placeholder="Insira a data de Nascimento do Cliente"
              className={birthControllerClass}
            />
          </div>
        </div>
        <div className={styles.checkboxSelectContainer}>
          <div className={styles.checkInput}>
            <label>Plano de Treino</label>
            <input
              type="checkbox"
              checked={isTrainingChecked}
              onChange={checkTrainingHandler}
            />
          </div>
          {isTrainingChecked && (
            <div className={styles.selectContainer}>
              <OptionList
                select={listTrainingPlanFiltered}
                onChange={trainingPlanSelectedHandler}
              />
            </div>
          )}
        </div>
        <div className={styles.checkboxSelectContainer}>
          <div className={styles.checkInput}>
            <label>Personal Trainer</label>
            <input
              type="checkbox"
              checked={isPersonalTrainerChecked}
              onChange={checkPersonalTrainerHandler}
            />
          </div>
          {isPersonalTrainerChecked && (
            <div className={styles.selectContainer}>
              <OptionList
                select={listPersonalTrainer}
                onChange={personalTrainerSelectedHandler}
              />
            </div>
          )}
        </div>
        <div className={styles.checkboxSelectContainer}>
          <div className={styles.checkInput}>
            <label>Desconto</label>
            <input
              type="checkbox"
              checked={isDiscountChecked}
              onChange={checkDiscountHandler}
            />
          </div>
          {isDiscountChecked && (
            <div className={styles.selectContainer}>
              <OptionList
                select={listDiscountFiltered}
                onChange={discountSelectedHandler}
              />
            </div>
          )}
        </div>
        <div className={styles.btnSubmitContainer}>
          <button>Inscrever</button>
        </div>
      </form>
    </div>
  )
}
