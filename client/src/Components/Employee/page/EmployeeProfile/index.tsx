/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { DefaultPage } from '../../../shared/components/UIElements/DefaultPage'

import whiteBack from '../../../../assets/icons/whiteBack.svg'
import whiteClose from '../../../../assets/icons/whiteLightClose.svg'
import whiteYes from '../../../../assets/icons/whitEyes.svg'

import styles from './styles.module.scss'
import axios, { AxiosResponse } from 'axios'
import { DefaultInsidePage } from '../../../shared/components/UIElements/DefaultInsidePage'
// import { transpileModule } from "typescript";

type employeeInfoType = {
  id: string
  name: string
  email: string
  birth: string
  CNI: string
  NIF: string
  phone: string
}

// const DUMMY_DATA = {
//   id: "1asadas",
//   name: "Hernâni",
//   email: "baptista@gmail.com",
//   birthDate: "01/01/2000",
//   CNI: "123456789",
//   NIF: "123456789",
//   phone: "9541850",
// };

export function EmployeeProfile() {
  const getEmployeeUrl =
    'http://localhost:5000/api/employee/'

  const { id } = useParams()
  const navigate = useNavigate()

  // console.log(id)

  const [employeeInfo, setEmployeeInfo] =
    useState<employeeInfoType>()
  const [verifiedId, setVerifiedId] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    axios
      .get(getEmployeeUrl + id)
      .then((response: AxiosResponse) => {
        setEmployeeInfo(response.data)
      })

    if (id === '1') {
      setVerifiedId(true)
    } else {
      setVerifiedId(false)
    }
  }, [verifiedId, id, navigate])

  const handleTeleNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {}

  const handleDisable = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleSave = () => {
    setIsOpen(false)
  }

  const teleNumberCssController = isOpen
    ? `${styles.teleNumber} ${styles.teleNumberOpen}`
    : `${styles.teleNumber}`

  return (
    <DefaultPage>
      <DefaultInsidePage>
        <div className={styles.headerContainer}>
          <div className={styles.left}>
            <button
              onClick={() => {
                navigate(-1)
              }}>
              <img src={whiteBack} />
            </button>
          </div>
          <h1>Informação do Funcionário</h1>
        </div>
        <div className={styles.employeeInfoContainer}>
          <div className={styles.infoContainer}>
            <label>Nome:</label>
            <p>{employeeInfo?.name}</p>
          </div>
          <div className={styles.infoContainer}>
            <label>Email:</label>
            <p>{employeeInfo?.email}</p>
          </div>
          <div className={styles.infoContainer}>
            <label>Data de Nascimento:</label>
            <p>{employeeInfo?.birth}</p>
          </div>
          <div className={styles.infoContainer}>
            <label>CNI:</label>
            <p>{employeeInfo?.CNI}</p>
          </div>
          <div className={styles.infoContainer}>
            <label>NIF:</label>
            <p>{employeeInfo?.NIF}</p>
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.telephoneContainer}>
              <label>Telefone:</label>
              <input
                type="text"
                value={employeeInfo?.phone}
                className={teleNumberCssController}
                onChange={handleTeleNumberChange}
                disabled={!isOpen}
              />
              {isOpen && (
                <>
                  <button
                    className={styles.yes}
                    onClick={handleSave}>
                    <img src={whiteYes} />
                  </button>
                  <button
                    className={styles.close}
                    onClick={handleClose}>
                    <img src={whiteClose} />
                  </button>
                </>
              )}
            </div>
            <div className={styles.btnContainer}>
              <button onClick={handleDisable}>
                Alterar
              </button>
            </div>
          </div>
        </div>
      </DefaultInsidePage>
    </DefaultPage>
  )
}
