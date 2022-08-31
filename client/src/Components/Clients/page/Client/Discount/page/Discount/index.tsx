import axios, { AxiosResponse } from 'axios'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BtnBottomSide } from '../../../../../../shared/components/BtnBottomSide'
import { Backdrop } from '../../../../../../shared/components/UIElements/Backdrop'
import { DefaultInsidePage } from '../../../../../../shared/components/UIElements/DefaultInsidePage'
import { DefaultPage } from '../../../../../../shared/components/UIElements/DefaultPage'
import { EmptyPage } from '../../../../../../shared/components/UIElements/EmptyPage'
import { DiscountList } from '../../components/DiscountList'
import { AddDiscount } from '../AddDiscount'

import styles from './styles.module.scss'

const portalElement = document.getElementById(
  'overlays',
) as HTMLElement

type discountype = {
  id: string
  name: string
  value: number
}

export const Discount = () => {
  const [listEmpty, setListEmpty] = React.useState(true)

  const [addDiscountIsShown, setDiscountIsShown] =
    React.useState(false)

  const [listDiscount, setListDiscount] = React.useState<
    discountype[]
  >([])

  useEffect(() => {
    // setListDiscount(DUMMY_Data);
    const urlPath = 'http://localhost:5000/api/discount/all'

    try {
      axios.get(urlPath).then((response: AxiosResponse) => {
        setListDiscount(response.data)
      })
    } catch (error) {
      console.log('Error: ' + error)
    }

    if (listDiscount.length === 0) {
      setListEmpty(true)
    } else {
      setListEmpty(false)
    }
  }, [])

  const showAddDiscountHandler = () => {
    setDiscountIsShown(true)
  }

  const closeAddEmployeeHandler = () => {
    setDiscountIsShown(false)
  }

  return (
    <>
      {addDiscountIsShown &&
        ReactDOM.createPortal(
          <>
            <Backdrop onClose={closeAddEmployeeHandler} />
            <AddDiscount
              onClose={closeAddEmployeeHandler}
            />
          </>,
          portalElement,
        )}
      <DefaultPage>
        {listEmpty && <EmptyPage message="Sem Descontos" />}

        {!listEmpty && (
          <DefaultInsidePage
            className={styles.tableContainer}>
            <DiscountList discounts={listDiscount} />
          </DefaultInsidePage>
        )}

        <BtnBottomSide
          btnText="Adicionar Desconto"
          showHandler={showAddDiscountHandler}
        />
      </DefaultPage>
    </>
  )
}
