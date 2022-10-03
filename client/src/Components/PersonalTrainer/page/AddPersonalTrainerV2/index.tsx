import { useState, useRef } from 'react'
import styles from './styles.module.scss'
import whiteCross from '../../../../assets/icons/whiteCross.svg'
import blueCross from '../../../../assets/icons/blueCross.svg'
import { validName } from '../../../shared/util/validName'
import { validEmail } from '../../../shared/util/validEmail'
import { validPhoneNumber } from '../../../shared/util/validPhoneNumber/index'
import { validCNI } from '../../../shared/util/validCNI'
import { validNIF } from '../../../shared/util/validNIF'
import { validBirth } from '../../../shared/util/validBirth'



const urlPathGetAllUser = 'http://localhost:5000/api/user/allemail'

type propsType = {
  onClose: () => void
}

export const AddPersonalTrainerV2 = (props: propsType) => {
  const [isHover, setHover] = useState(false)

  const hoverHandler = () => {
    setHover(true)
  }

  const leaveHandler = () => {
    setHover(false)
  }

  const iconChange = !isHover ? whiteCross : blueCross

  // name
  const nameInputRef = useRef<HTMLInputElement>(null)
  const [isNameOK, setIsNameOk] = useState(true)

  // email
  const emailInputRef = useRef<HTMLInputElement>(null)
  const [isEmailOk, setIsEmailOk] = useState(true)

  // phone
  const phoneInputRef = useRef<HTMLInputElement>(null)
  const [isPhoneOk, setIsPhoneOk] = useState(true)

  // CNI
  const cniInputRef = useRef<HTMLInputElement>(null)
  const [isCNIOk, setIsCNIOk] = useState(true)

  // NIF
  const nifInputRef = useRef<HTMLInputElement>(null)
  const [isNIFOk, setIsNIFOk] = useState(true)

  // Birth
  const birthInputRef = useRef<HTMLInputElement>(null)
  const [isBirthOk, setIsBirthOk] = useState(true)

  const formAddPersonalTrainerHandler = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    // name
    const enteredName = nameInputRef.current!.value
    const nameIsNotEmpty = enteredName.trim().length !== 0
    const nameIsValid = validName(enteredName)
    const nameIsOk = nameIsNotEmpty && nameIsValid

    // email - not finished
    const enteredEmail = emailInputRef.current!.value
    const emailIsNotEmpty = enteredEmail.trim().length !== 0
    const emailIsValid = validEmail(enteredEmail)

    const emailIsOk = emailIsNotEmpty && emailIsValid

    // phone
    const enteredPhone = phoneInputRef.current!.value
    const phoneIsNotEmpty = enteredPhone.trim().length !== 0
    const phoneIsValid = validPhoneNumber(enteredPhone)
    const phoneIsOk = phoneIsNotEmpty && phoneIsValid

    // CNI
    const enteredCNI = cniInputRef.current!.value
    const cniIsNotEmpty = enteredCNI.trim().length !== 0
    const cniIsValid = validCNI(enteredCNI)
    const cniIsOk = cniIsNotEmpty && cniIsValid

    // NIF
    const enteredNIF = nifInputRef.current!.value
    const nifIsNotEmpty = enteredNIF.trim().length !== 0
    const nifIsValid = validNIF(enteredNIF)
    const nifIsOk = nifIsNotEmpty && nifIsValid

    // Birth
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
      setIsPhoneOk(false)
    }

    if (!cniIsOk) {
      setIsCNIOk(false)
    }
    if (!nifIsOk) {
      setIsNIFOk(false)
    }

    if (!birthIsOk) {
      setIsBirthOk(false)
    }

    // true
    if (nameIsOk) {
      setIsNameOk(true)
    }

    if (emailIsOk) {
      setIsEmailOk(true)
    }

    if (phoneIsOk) {
      setIsPhoneOk(true)
    }

    if (cniIsOk) {
      setIsCNIOk(true)
    }
    if (nifIsOk) {
      setIsNIFOk(true)
    }

    if (birthIsOk) {
      setIsBirthOk(true)
    }

    const formOk =
      nameIsOk &&
      emailIsOk &&
      phoneIsOk &&
      cniIsOk &&
      nifIsOk &&
      birthIsOk

    if (formOk) {
    }
  }

  const nameControllerClass = isNameOK
    ? `${styles.inputValid}`
    : `${styles.inputInvalid}`

  const emailControllerClass = isEmailOk
    ? `${styles.inputValid}`
    : `${styles.inputInvalid}`

  const phoneControllerClass = isPhoneOk
    ? `${styles.inputValid}`
    : `${styles.inputInvalid}`

  const cniControllerClass = isCNIOk
    ? `${styles.inputValid}`
    : `${styles.inputInvalid}`

  const nifControllerClass = isNIFOk
    ? `${styles.inputValid}`
    : `${styles.inputInvalid}`

  const birthControllerClass = isBirthOk
    ? `${styles.inputValid}`
    : `${styles.inputInvalid}`

  return (
    <>
      <div className={styles.addPersonalTrainerContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.left}>
            <h1>Registrar Personal Trainer</h1>
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
          onSubmit={formAddPersonalTrainerHandler}
          className={styles.formContainer}>
          <div>
            <div className={styles.textInput}>
              <label>Nome Completo</label>
              <input
                type="text"
                ref={nameInputRef}
                placeholder="Insira o nome do Personal Trainer"
                className={nameControllerClass}
              />
            </div>
            <div className={styles.textInput}>
              <label>Email</label>
              <input
                type="email"
                ref={emailInputRef}
                placeholder="Insira o email do Personal Trainer"
                className={emailControllerClass}
              />
            </div>
          </div>
          <div>
            <div className={styles.textInput}>
              <label>Telemóvel</label>
              <input
                type="text"
                ref={phoneInputRef}
                placeholder="Insira o numero do Telemóvel do Personal Trainer"
                className={phoneControllerClass}
              />
            </div>
            <div className={styles.textInput}>
              <label>CNI</label>
              <input
                type="text"
                ref={cniInputRef}
                placeholder="Insira o CNI do Personal Trainer"
                className={cniControllerClass}
              />
            </div>
          </div>
          <div>
            <div className={styles.textInput}>
              <label>NIF</label>
              <input
                type="text"
                ref={nifInputRef}
                placeholder="Insira o nif do Personal Trainer"
                className={nifControllerClass}
              />
            </div>
            <div className={styles.textInput}>
              <label>Data de Nascimento</label>
              <input
                type="text"
                ref={birthInputRef}
                placeholder="Insira a data de Nascimento do Personal Trainer"
                className={birthControllerClass}
              />
            </div>
          </div>
          <div className={styles.btnSubmitContainer}>
            <button>Inscrever</button>
          </div>
        </form>
      </div>
    </>
  )
}
