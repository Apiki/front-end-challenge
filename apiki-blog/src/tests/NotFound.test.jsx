import React from 'react'
import { screen } from '@testing-library/react'
import renderWithRouter from './renderWithRouter'

import NotFound from '../pages/NotFound'

it('Renderiza a página de não encontrado', () => {
  renderWithRouter(<NotFound />)

  const notFoundText = screen.getByText(/404 - Página não encontrada/i)
  expect(notFoundText).toBeTruthy()
})
