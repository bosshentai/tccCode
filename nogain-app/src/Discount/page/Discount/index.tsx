import React, { useEffect } from 'react';
import { DefaultPage } from "../../../shared/components/UIElements/DefaultPage"

import styles from "./styles.module.scss";

type Discount = {
  id: string;
  name: string;
  amount: number;
  descrition: string;
}






export const Discount = () => {

  const [listEmpty, setListEmpty] = React.useState(true);


  const [addDiscountIsShown, setDiscountIsShown] = React.useState(false);


  const [listDiscount, setListDiscount] = React.useState<Discount[]>([]);


  useEffect( ()=>{
    if(listDiscount.length === 0){
      setListEmpty(true);
    }else{
      setListEmpty(false);
    }
  })



  return <DefaultPage>

  {listEmpty && <p className={styles.p}>Sem descontos</p>}

  <div className={styles.tableContainer}>
    
  </div>

  </DefaultPage>
}