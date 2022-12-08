import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { BtnBottomSide } from '../../../shared/components/BtnBottomSide'
import { Backdrop } from '../../../shared/components/UIElements/Backdrop'
import { DefaultInsidePage } from '../../../shared/components/UIElements/DefaultInsidePage'
import { DefaultPage } from '../../../shared/components/UIElements/DefaultPage'
import { EmptyPage } from '../../../shared/components/UIElements/EmptyPage'
import { TrainingPlanList } from '../../components/TrainingPlanList'
import { AddTrainingPlan } from '../AddTrainingPlan'

import styles from './styles.module.scss'

const portalElement = document.getElementById(
  'overlays',
) as HTMLElement

type trainingplanType = {
  id: string
  name: string
  value: number
}

export const TrainingPlan = () => {
  const [userRole, setUserRole] = useState(false)

  const [listEmpty, setListEmpty] = useState(true)

  const [addTrainingPlan, setAddTrainingPlan] =
    useState(false)

  const [listPlanningTrain, setListPlanningTrain] =
    useState<trainingplanType[]>([])

  useEffect(() => {
    async function loadUserRole() {
      const { userId } = await JSON.parse(
        localStorage.getItem('userData') || '',
      )

      const pathUrl = `http://localhost:5000/api/user/${userId}`

      try {
        const getInfo = await axios.get(pathUrl)

        if (getInfo.data.role === 'MANAGER') {
          setUserRole(true)
        }
      } catch (e) {
        return
      }
    }
    loadUserRole()
  }, [])

  useEffect(() => {
    async function getTrainingPlan() {
      const urlPath =
        'http://localhost:5000/api/trainingplan/all'

      try {
        const response = await axios.get(urlPath)
        const filteredResponse = await response.data.filter(
          (item: trainingplanType) => item.name !== 'null',
        )

        setListPlanningTrain(filteredResponse)


        if(listPlanningTrain.length ===0){
          setListEmpty(true)

        }else{
          setListEmpty(false)
        }
      } catch (e) {
        return
      }
    }

    getTrainingPlan()

    // try {
    //   axios.get(urlPath).then((response: AxiosResponse) => {
    //     setListPlanningTrain(response.data)
    //   })
    // } catch (error) {
    //   console.log('Error: ' + error)
    // }

    // if (listPlanningTrain.length === 0) {
    //   setListEmpty(true)
    // } else {
    //   setListEmpty(false)
    // }
  }, [listPlanningTrain.length])

  const showAddTrainingHandler = () => {
    setAddTrainingPlan(true)
  }

  const closeAddTrainingHandler = () => {
    setAddTrainingPlan(false)
  }

  return (
    <>
      {addTrainingPlan &&
        ReactDOM.createPortal(
          <>
            <Backdrop onClose={closeAddTrainingHandler} />
            <AddTrainingPlan
              onClose={closeAddTrainingHandler}
            />
          </>,
          portalElement,
        )}

      <DefaultPage>
        {/* {listEmpty && <p className={styles.p}>Sem Plano de Treino</p>} */}
        {listEmpty && (
          <EmptyPage message="Sem Plano de Treino" />
        )}

        {!listEmpty && (
          <DefaultInsidePage className={styles.container}>
            <TrainingPlanList
              trainingPlans={listPlanningTrain}
            />
          </DefaultInsidePage>
        )}
        {userRole && (
          <BtnBottomSide
            btnText="Adicionar Plano Treino"
            showHandler={showAddTrainingHandler}
          />
        )}
      </DefaultPage>
    </>
  )
}
