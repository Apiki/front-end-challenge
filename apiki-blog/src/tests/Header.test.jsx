import React from 'react'
import { screen } from '@testing-library/react'
import renderWithRouter from './renderWithRouter'
import { fireEvent } from '@testing-library/dom'

import Header from '../components/Header'

it('Renderiza a logo da Apiki corretamente', () => {
  renderWithRouter(<Header />)

  const headerLogo = screen.getByAltText('Apiki logo')
  expect(headerLogo).toBeTruthy()
})

it('Renderiza a logo do "mundo" para o site da Apiki corretamente', () => {
  renderWithRouter(<Header />)

  const headerApikiLink = screen.getByAltText('Apiki website')
  expect(headerApikiLink).toBeTruthy()
})

it('Renderiza o Menu hamburger com os links corretamente', () => {
  renderWithRouter(<Header />)

  const menuHamburger = screen.getByRole('button')
  expect(menuHamburger).toBeTruthy()

  fireEvent.click(menuHamburger)

  const mobileLink = screen.getByText(/Mobile/i)
  expect(mobileLink).toBeTruthy()

  const SEOLink = screen.getByText(/SEO/i)
  expect(SEOLink).toBeTruthy()
})
