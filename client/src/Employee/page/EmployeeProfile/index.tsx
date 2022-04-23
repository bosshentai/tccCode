import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DefaultPage } from "../../../shared/components/UIElements/DefaultPage";

import whiteBack from "../../../assets/icons/whiteBack.svg";

import styles from "./styles.module.scss";

export function EmployeeProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(id);


  // const telephoneCss = `${styles.infoContainer}  `;

  return (
    <DefaultPage>
      {/* <Link to={`Profile/${employeeId}`}> */}
      {/* <h1>PersonalTrainerProfile</h1>
      <p>{id}</p> */}
      {/* </Link> */}

      <div className={styles.headerContainer}>
        <div className={styles.left}>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            <img src={whiteBack} />
          </button>
        </div>
        <h1>Informação do Funcionario</h1>
      </div>
      <div className={styles.employeeInfoContainer}>
        {/* <p>Nome: {id}</p> */}
        <div className={styles.infoContainer}>
          <label>Nome:</label>
          <p>Nome Exemplo</p>
        </div>
        <div className={styles.infoContainer}>
          <label>Email:</label>
          <p>exemplode@teste.com</p>
        </div>
        <div className={styles.infoContainer}>
          <label>Data de Nascimento:</label>
          <p>MM/DD/YYYY</p>
        </div>
        <div className={styles.infoContainer}>
          <label>CNI:</label>
          <p>123456789</p>
        </div>
        <div className={styles.infoContainer}>
          <label>NIF:</label>
          <p>123456789</p>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.telephoneContainer}>
          <label>Telefone:</label>
          <p>123456789</p>
          </div>
          <div className={styles.btnContainer}>
          <button>Alterar</button>
          </div>
        </div>
      </div>
    </DefaultPage>
  );
}
