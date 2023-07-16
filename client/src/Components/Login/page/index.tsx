// import { DefaultInsidePage } from '../../shared/components/UIElements/DefaultInsidePage/index';
import axios, { AxiosResponse } from "axios";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import { validEmail } from "../../shared/util/validEmail";
import logo from "../../../assets/blueLogo.svg";
import loginImag from "../../../assets/images/LoginImage.png";
import styles from "./styles.module.scss";

export interface refreshToken {
  userId: string;
  expiresIn: number;
}

export interface LoginResponse {
  // userId: string
  token: string;
  refreshToken: refreshToken;
}

// type propsType = {
//   // valid: Dispatch<SetStateAction<boolean>>
//   valid: () => {}
// }
// Dispatch<SetStateActicon<boolean>
export const Login = () => {
  const auth = useContext(AuthContext);

  const emailInputRef = useRef<HTMLInputElement>(null);

  const passwordInputRef = useRef<HTMLInputElement>(null);

  // const [isFormOk,setIsFormOk] = useState(false)
  const [isFormEmpty, setIsFormEmpty] = useState(true);
  const [isFormIsValid, setIsFormIsValid] = useState(true);

  const authSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const emailEntered = emailInputRef.current!.value;
    const emailIsNotEmpty = emailEntered.trim().length !== 0;
    const emailIsValid = validEmail(emailEntered);

    const passwordEntered = passwordInputRef.current!.value;
    const passwordIsNotEmpty = passwordEntered.trim().length !== 0;

    const formIsEmpty = emailIsNotEmpty && passwordIsNotEmpty;
    const formIsValid = emailIsValid;

    // console.log(formIsEmpty)

    // if(formIsEmpty){

    // }

    if (!formIsEmpty) {
      setIsFormEmpty(false);
    } else {
      setIsFormEmpty(true);
      if (!formIsValid) {
        setIsFormIsValid(false);
      } else {
        const urlPatch = "http://localhost:5000/auth/login";

        const loginData = {
          email: emailEntered,
          password: passwordEntered,
        };

        try {
          const responseData: AxiosResponse<LoginResponse> = await axios.post(
            urlPatch,
            loginData
          );

          // const  expirationDate =  new Date(new Date().getTime() + 1000 * 60 * 60)

          auth.login(
            responseData.data.refreshToken.userId,
            responseData.data.token,
            responseData.data.refreshToken.expiresIn
          );
          // return true
        } catch (error) {
          console.log(error);
          return false;
        }
      }
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.leftSide}>
        <img src={logo} alt="" />
        <form onSubmit={authSubmitHandler}>
          <h1>Login</h1>
          {!isFormEmpty && (
            <span className={styles.invalidForm}>
              <p>Login Vazio</p>
            </span>
          )}

          <div className={styles.labelInputContainer}>
            <label>Email</label>
            <input
              type="text"
              ref={emailInputRef}
              placeholder="Insira o email"
            />
          </div>
          <div className={styles.labelInputContainer}>
            <label>Password</label>
            <input
              type="password"
              ref={passwordInputRef}
              placeholder="Insira a palavra-passe"
            />
          </div>
          <button>Logar</button>
        </form>
      </div>
      <div className={styles.rightSide}>
        <img src={loginImag} alt="" />
      </div>
    </div>

    // <form onSubmit={authSubmitHandler}>

    //   <div className={styles.formContainer}>
    //     <h1>Login</h1>
    //     {!isFormEmpty && (
    //       <span className={styles.invalidForm}>
    //         Login Vazio
    //       </span>
    //     )}

    //     <div className={styles.labelInputContainer}>
    //       <label>Email</label>
    //       <input
    //         type="text"
    //         ref={emailInputRef}
    //         placeholder="Insira o email"
    //       />
    //     </div>

    //     <div className={styles.labelInputContainer}>
    //       <label>Palavra-passe</label>
    //       <input
    //         type="text"
    //         ref={passwordInputRef}
    //         placeholder="Insira a palavra-passe"
    //       />
    //     </div>

    //     <button>Logar</button>
    //   </div>
    // </form>
  );
};
