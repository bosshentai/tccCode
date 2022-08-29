import styles from './styles.module.scss'

import whiteCross from '../../../../assets/icons/whiteCross.svg'
import blueCross from '../../../../assets/icons/blueCross.svg'
import whiteCheck from '../../../../assets/icons/whiteCheck.svg'
import React, { useRef, useState } from 'react'
import { RecordWithTtl } from 'dns'
import { validName } from '../../../shared/util/validName'
import { validEmail } from '../../../shared/util/validEmail'

type propsType = {
  onClose: () => void
}

export const AddClient = (props: propsType) => {
  // name
  const nameInputRef = useRef<HTMLInputElement>(null)
  const [isNameOk, setIsNameOk] = useState(true)

  // email
  const emailInputRef = useRef<HTMLInputElement>(null)
  const [isEmailOk, setIsEmailOk] = useState(true)


  //phone number
  const phoneInputRef = useRef<HTMLInputElement>(null)
  const [isNumberOk,setNumberOk] = useState(true)


  const [isHover, setHover] = useState(false)

  const [isChecked, setIsChecked] = useState(false)

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
    const emailIsOk = emailIsNotEmpty && emailIsValid

    if (!nameIsOk) {
      setIsNameOk(false)
    }

    if (!emailIsOk) {
      setIsEmailOk(false)
    }

    if (nameIsOk && emailIsOk) {
      setIsNameOk(true)
      setIsEmailOk(true)
    }
  }

  const hoverHandler = () => {
    setHover(true)
  }

  const leaveHandler = () => {
    setHover(false)
  }

  const checkHandler = () => {
    setIsChecked(!isChecked)
  }

  const iconChange = !isHover ? whiteCross : blueCross

  const nameControllerClass = isNameOk
    ? `${styles.inputValid}`
    : `${styles.inputInvalid}`

  const emailControllerClass = isEmailOk
    ? `${styles.inputValid}`
    : `${styles.inputInvalid}`

  // const checkIconChange = isChecked ? whiteCheck : ''

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
            <input />
          </div>

          <div className={styles.textInput}>
            <label>Data de Nascimento</label>
            <input type="date" />
          </div>
        </div>
        <div className={styles.checkboxSelectContainer}>
          <div className={styles.checkInput}>
            <label>Plano de Treino</label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={checkHandler}
            />
          </div>
          {isChecked && (
            <div className={styles.selectContainer}>
              <select
                className={styles.selectItem}
                name="personalTrainer">
                <option value="none">None</option>
                <option value="two">Two</option>
              </select>
            </div>
          )}
        </div>
        <div className={styles.checkboxSelectContainer}>
          <div className={styles.checkInput}>
            <label>Personal Trainer</label>
            <input type="checkbox" />
          </div>
        </div>
        <div className={styles.checkboxSelectContainer}>
          <div className={styles.checkInput}>
            <label>Desconto</label>
            <input type="checkbox" />
          </div>
        </div>
        <button>Inscrever</button>
      </form>
    </div>
  )
}
