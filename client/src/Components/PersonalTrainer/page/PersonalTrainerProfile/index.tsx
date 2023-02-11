import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DefaultPage } from '../../../shared/components/UIElements/DefaultPage'
import { DefaultInsidePage } from '../../../shared/components/UIElements/DefaultInsidePage'

import whiteBack from '../../../../assets/icons/whiteBack.svg'

import styles from './styles.module.scss'
import axios, { AxiosResponse } from 'axios'

type personalTrainerType = {
  id: string
  name: string
  email: string
  birth: string
  cni: string
  nif: string
  phone: string
  value: string
}

export function PersonalTrainerProfile() {
  const getPersonalTrainerUrl =
    'http://localhost:5000/api/personalTrainer/'

  let { id } = useParams()
  const navigate = useNavigate()
  const [personalTrainerInfo, setPersonalTrainerInfo] =
    useState<personalTrainerType>()
  // const [verifiedId,setVerified] = useState(false)

  useEffect(() => {
    axios
      .get(getPersonalTrainerUrl + id)
      .then((response: AxiosResponse) => {
        setPersonalTrainerInfo(response.data)
      })
  }, [id, navigate])
  return (
    <DefaultPage>
      <DefaultInsidePage>
        <div className={styles.headerContainer}>
          <div className={styles.left}>
            <button
              onClick={() => {
                navigate(-1)
              }}
            >
              <img src={whiteBack} alt="" />
            </button>
          </div>
          <h1>Informação do Personal Trainer</h1>
        </div>
        <div
          className={styles.personalTrainerInfoContainer}
        >
          <div className={styles.infoContainer}>
            <label>Nome:</label>
            <p>{personalTrainerInfo?.name}</p>
          </div>
          <div className={styles.infoContainer}>
            <label>Email:</label>
            <p>{personalTrainerInfo?.email}</p>
          </div>

          <div className={styles.infoContainer}>
            <label>Date de Nascimento:</label>
            <p>{personalTrainerInfo?.birth}</p>
          </div>
          <div className={styles.infoContainer}>
            <label>CNI:</label>
            <p>{personalTrainerInfo?.cni}</p>
          </div>
          <div className={styles.infoContainer}>
            <label>NIF:</label>
            <p>{personalTrainerInfo?.nif}</p>
          </div>
          <div className={styles.infoContainer}>
            <label>Preço:</label>
            <p>{personalTrainerInfo?.value}</p>
          </div>
        </div>

        {/* <h1>PersonalTrainerProfile</h1> */}
      </DefaultInsidePage>
    </DefaultPage>
  )
}
