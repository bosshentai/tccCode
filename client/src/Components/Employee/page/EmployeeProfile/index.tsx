import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DefaultPage } from "../../../shared/components/UIElements/DefaultPage";


import whiteBack from "../../../../assets/icons/whiteBack.svg";

import styles from "./styles.module.scss";
// import { transpileModule } from "typescript";

const DUMMY_DATA = {
  id: "1asadas",
  name: "Hernani",
  email: "baptista@gmail",
  birthDate: "01/01/2000",
  CNI: "123456789",
  NIF: "123456789",
  number: "9541850",	
};

export function EmployeeProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [verificedId, setVerificedId] = useState(false);
  const [inputDisable,setinputDisable] = useState(true);
  


  


  useEffect( () =>{
      if (id === DUMMY_DATA.id) {
        setVerificedId(true);
       }
      //  else{
      //   navigate("/employee");
      // }
  },[])


  const [teleNumber, setTeleNumber] = useState(DUMMY_DATA.number);


  const handleTeleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeleNumber(event.target.value);
  }

  const handleDisable = () =>{
    setinputDisable(false);
  }
  

  // console.log(id);

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
          <p>{DUMMY_DATA.name}</p>
        </div>
        <div className={styles.infoContainer}>
          <label>Email:</label>
          <p>{DUMMY_DATA.email}</p>
        </div>
        <div className={styles.infoContainer}>
          <label>Data de Nascimento:</label>
          <p>{DUMMY_DATA.birthDate}</p>
        </div>
        <div className={styles.infoContainer}>
          <label>CNI:</label>
          <p>{DUMMY_DATA.CNI}</p>
        </div>
        <div className={styles.infoContainer}>
          <label>NIF:</label>
          <p>{DUMMY_DATA.NIF}</p>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.telephoneContainer}>
            <label>Telefone:</label>
            {/* <p>{DUMMY_DATA.number}</p> */}
            <input type="text" value={teleNumber}
            onChange={handleTeleNumberChange}
             disabled={inputDisable}
            />
          </div>
          <div className={styles.btnContainer}>
            <button onClick={handleDisable}>Alterar</button>
          </div>
        </div>
      </div>
    </DefaultPage>
  );
}
