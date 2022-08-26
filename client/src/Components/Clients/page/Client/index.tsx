import axios, { AxiosResponse } from 'axios'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BtnBottomSide } from '../../../shared/components/BtnBottomSide'
import { Backdrop } from '../../../shared/components/UIElements/Backdrop'
import { DefaultInsidePage } from '../../../shared/components/UIElements/DefaultInsidePage'
import { DefaultPage } from '../../../shared/components/UIElements/DefaultPage'
import { EmptyPage } from '../../../shared/components/UIElements/EmptyPage'
import { ClientList } from '../../components/ClientList'
import { AddClient } from '../AddClient'

import styles from './styles.module.scss'

const portalElement = document.getElementById(
  'overlays',
) as HTMLElement

type client = {
  id: string
  name: string
  email: string
  trainPlan: string
}

export const Client = () => {
  const [listEmpty, setListEmpty] = React.useState(true)

  const [addClientIsShown, setClientIsShown] =
    React.useState(false)

  const [listClient, setListClient] = React.useState<
    client[]
  >([])

  useEffect(() => {
    // setListClient(DUMMY_DATA);
    const urlPath = 'http://localhost:5000/api/client/all'

    try {
      axios.get(urlPath).then((response: AxiosResponse) => {
        setListClient(response.data)
      })
    } catch (error) {
      console.log('Error: ' + error)
    }

    if (listClient.length === 0) {
      setListEmpty(true)
    } else {
      setListEmpty(false)
    }
  }, [listClient, setListClient])

  const showAddClientHandler = () => {
    setClientIsShown(true)
  }

  const closeAddEmployeeHandler = () => {
    setClientIsShown(false)
  }

  return (
    <>
      {addClientIsShown &&
        ReactDOM.createPortal(
          <>
            <Backdrop onClose={closeAddEmployeeHandler} />
            <AddClient onClose={closeAddEmployeeHandler} />
          </>,
          portalElement,
        )}
      <DefaultPage>
        {listEmpty && <EmptyPage message="Sem Clientes" />}

        {!listEmpty && (
          <DefaultInsidePage
            className={styles.tableContainer}>
            <div className={styles.header}>
              <div className={styles.title}>
                <p>Nome</p>
              </div>
              <div className={styles.title}>
                <p>Email</p>
              </div>
              <div className={styles.title}>
                <p>Plano de Treino</p>
              </div>
            </div>
            <ClientList clients={listClient} />
          </DefaultInsidePage>
        )}

        <BtnBottomSide
          btnText="Adicionar Cliente"
          showHandler={showAddClientHandler}
        />
      </DefaultPage>
    </>
  )
}

// export default Client;
