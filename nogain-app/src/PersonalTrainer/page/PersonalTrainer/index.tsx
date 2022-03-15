import { useEffect, useState } from "react"

import { DefaultPage } from "../../../shared/components/UIElements/DefaultPage"


type persontalTrainer = {
  id: string;
  name: string;
  // email: string;
  // describe: string;
  amount: string;

}


const DUMMY_DATA = [
  {
    id: "1asadas",
    name: "Hernani",
    // email: "
    // describe: "
    amount: "100,00",
  },
  {
    id: "2asxzad",
    name: "Hern",
  }
]

export const PersonalTrainer = () => {

  const [listEmpty, setListEmpty] = useState(true)


  const [ listPersonalTrainer,setListPersonalTrainer] = useState<persontalTrainer[]>([])


  useEffect (() => {


  })

  return <DefaultPage>PersonalTrainer Page</DefaultPage>
}