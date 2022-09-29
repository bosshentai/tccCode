// import { DefaultInsidePage } from '../../shared/components/UIElements/DefaultInsidePage/index';
import axios from 'axios'
import {
  Dispatch,
  SetStateAction,
  useRef,
  useState,
} from 'react'
import { DefaultPage } from '../../shared/components/UIElements/DefaultPage'
import { validEmail } from '../../shared/util/validEmail'

import styles from './styles.module.scss'

type propsType = {
  // valid: Dispatch<SetStateAction<boolean>>
  valid: () => {}
}
// Dispatch<SetStateActicon<boolean>
export const Login = () => {
  const emailInputRef = useRef<HTMLInputElement>(null)

  const passwordInputRef = useRef<HTMLInputElement>(null)

  // const [isFormOk,setIsFormOk] = useState(false)
  const [isFormEmpty, setIsFormEmpty] = useState(true)
  const [isFormIsValid, setIsFormIsValid] = useState(true)

  const authSubmitHandler = async (
    event: React.FormEvent,
  ) => {
    event.preventDefault()

    const emailEntered = emailInputRef.current!.value
    const emailIsNotEmpty = emailEntered.trim().length !== 0
    const emailIsValid = validEmail(emailEntered)

    const passwordEntered = passwordInputRef.current!.value
    const passwordIsNotEmpty =
      passwordEntered.trim().length !== 0

    const formIsEmpty =
      emailIsNotEmpty && passwordIsNotEmpty
    const formIsValid = emailIsValid

    console.log(formIsEmpty)

    // if(formIsEmpty){

    // }

    if (!formIsEmpty) {
      setIsFormEmpty(false)
    } else {
      setIsFormEmpty(true)
      if (!formIsValid) {
        setIsFormIsValid(false)
      } else {
        const urlPatch = 'http://localhost:5000/auth/login'

        const loginData = {
          email: emailEntered,
          password: passwordEntered,
        }

        try {
          await axios.post(urlPatch, loginData)
          // props.valid = true;

          // console.log("Entrou")
          return true
        } catch (error) {
          console.log(error)
          return false
        }
      }
    }
  }

  return (
    <form onSubmit={authSubmitHandler}>
      <div className={styles.formContainer}>
        <h1>Login</h1>
        {!isFormEmpty && (
          <span className={styles.invalidForm}>
            Login Vazio
          </span>
        )}
        {}
        <div className={styles.labelInputContainer}>
          <label>Email</label>
          <input
            type="text"
            ref={emailInputRef}
            placeholder="Insira o email"
          />
        </div>

        <div className={styles.labelInputContainer}>
          <label>Palavra-passe</label>
          <input
            type="text"
            ref={passwordInputRef}
            placeholder="Insira a palavra-passe"
          />
        </div>

        <button>Logar</button>
      </div>
    </form>
  )
}
