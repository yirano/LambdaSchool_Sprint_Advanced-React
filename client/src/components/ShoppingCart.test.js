import React from 'react'
import { render, waitFor } from '@testing-library/react'
import ShoppingCart from './ShoppingCart'

const plants = [
  {
    name: "Rose",
    description: "It smells pretty and pricks you.",
    img: "https://somefakeurl.com",
    light: "idk",
    difficulty: "mean",
    id: 12223545345
  },
  {
    name: "Tulip",
    description: "They look like a cup.",
    img: "https://somefakeurl.com",
    light: "idk",
    difficulty: "mean",
    id: 987398237598
  },
  {
    name: "Daisy",
    description: "SUNNAAAAY.",
    img: "https://somefakeurl.com",
    light: "idk",
    difficulty: "mean",
    id: 987398237593258
  }
]

test("displays plants in cart", () => {
  const { getByText, queryAllByTestId } = render(<ShoppingCart cart={plants} />)

  const plantName = queryAllByTestId('plantName')

  expect(plantName.length).toBe(3)
  expect(plantName[1].textContent).toBe('Tulip')
})