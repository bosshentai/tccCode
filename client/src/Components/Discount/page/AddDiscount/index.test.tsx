import React from 'react'

import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react'

import axios from 'axios'

import { AddDiscount } from '.'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const onCloseMock = jest.fn()

describe('Discount Test', () => {
  test('should render AddDiscount', () => {
    render(<AddDiscount onClose={onCloseMock} />)

    const titleElement = screen.getByText(
      'Registrar Desconto',
    )

    const nameLabel = screen.getByText('Nome')
    const descriptionLabel = screen.getByText('Descrição')
    const priceLabel = screen.getByText('Montante')
    const btnSubmitText = screen.getByText('Registrar')

    expect(titleElement).toBeInTheDocument()
    expect(nameLabel).toBeInTheDocument()
    expect(descriptionLabel).toBeInTheDocument()
    expect(priceLabel).toBeInTheDocument()
    expect(btnSubmitText).toBeInTheDocument()
  })

  test('submits a new Discount', async () => {
    const dummyData = {
      name: 'Description 1',
      description: 'description 1',
      amount: '100.00',
    }

    render(<AddDiscount onClose={onCloseMock} />)

    const nameInputById = await screen.findByTestId(
      'nameInput',
    )
    const descriptionInputById = await screen.findByTestId(
      'descriptionInput',
    )

    const amountInputById = await screen.findByTestId(
      'amountInput',
    )

    const submitBtnById = await screen.findByTestId(
      'submitBtn',
    )

    fireEvent.change(nameInputById, {
      target: { value: dummyData.name },
    })

    fireEvent.change(descriptionInputById, {
      target: {
        value: dummyData.description,
      },
    })

    fireEvent.change(amountInputById, {
      target: {
        value: dummyData.amount,
      },
    })

    fireEvent.click(submitBtnById)

    expect(nameInputById).toHaveValue(dummyData.name)
    expect(descriptionInputById).toHaveValue(
      dummyData.description,
    )
    expect(amountInputById).toHaveValue(dummyData.amount)

    await waitFor(() =>
      expect(mockedAxios.post).toHaveBeenCalled(),
    )
  })
})
