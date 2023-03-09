import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLinkItem } from '../NavLinkItem'

import styles from './styles.module.scss'

export const NavLinks = () => {
  const [userRole, setUserRole] = useState(false)

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
      } catch (error) {
        return
      }
    }

    loadUserRole()
  },[])

  return (
    <ul className={styles.navLinksContainer}>
      <NavLinkItem
        name="Cliente"
        to="/Client"
      />
      <NavLinkItem
        name="Plano de Treino"
        to="/TrainingPlan"
      />
      <NavLinkItem
        name="Desconto"
        to="/Discount"
      />
      {userRole && (
        <NavLinkItem
          name="Funcionário"
          to="/Employee"
        />
      )}
      <NavLinkItem
        name="Personal Trainer"
        to="/PersonalTrainer"
      />
    </ul>
  )
}
