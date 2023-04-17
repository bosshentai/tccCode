import React from "react"


import {render, screen, fireEvent, waitFor} from "@testing-library/react"


import axios from "axios"

import { AddTrainingPlan } from "."



jest.mock('axios')

const onCloseMock = jest.fn()


describe( "Personal Trainer Test", () =>{
  test("should render AddTrainingPlan", ()=>{
    render(<AddTrainingPlan  onClose={onCloseMock}/>)


const titleElement = screen.getByText("Registrar Plano de treino")


    // expect(titleElement).toBeInTheDocument()

  })
})




