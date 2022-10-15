import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { BtnBottomSide } from '../../../shared/components/BtnBottomSide'
import { Backdrop } from '../../../shared/components/UIElements/Backdrop'
import { DefaultInsidePage } from '../../../shared/components/UIElements/DefaultInsidePage'
import { DefaultPage } from '../../../shared/components/UIElements/DefaultPage'
import { EmptyPage } from '../../../shared/components/UIElements/EmptyPage'
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
  const [userRole, setUserRole] = useState(false)

  const [listEmpty, setListEmpty] = useState(true)

  const [addDiscountIsShown, setDiscountIsShown] =
    useState(false)

  const [listDiscount, setListDiscount] = useState<
    discountype[]
  >([])

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
    // setListDiscount(DUMMY_Data);

    async function getDiscountList() {
      const urlPath =
        'http://localhost:5000/api/discount/all'

      try {
        const response = await axios.get(urlPath)

        const filteredResponse = await response.data.filter(
          (item: discountype) => item.name !== 'null',
        )

        setListDiscount(filteredResponse)
        // axios.get(urlPath).then((response: AxiosResponse) => {
        //   setListDiscount(response.data)
        // })
      } catch (error) {
        
        console.log('Error: ' + error)
      }

      if (listDiscount.length === 0) {
        setListEmpty(true)
      } else {
        setListEmpty(false)
      }
    }
    getDiscountList()
  }, [listDiscount.length])

  const showAddDiscountHandler = () => {
    setDiscountIsShown(true)
  }

  const closeAddEmployeeHandler = () => {
    setDiscountIsShown(false)
  }

  // console.log("render")

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
        {userRole && (
          <BtnBottomSide
            btnText="Adicionar Desconto"
            showHandler={showAddDiscountHandler}
          />
        )}
      </DefaultPage>
    </>
  )
}
