import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import renderWithRouter from './renderWithRouter'

import apikiImage from '../imgs/apiki.png'

import PostCard from '../components/PostCard'

const mock = {
  title: 'Diferença entre const e let no JavaScript',
  image: apikiImage,
  link: 'difereca-const-let-js',
  author: 'Rodrigo Ruan',
  description: 'Aprenda a diferença entre let e const no JavaScript',
  date: '2020-09-08T10:37:04'
}

it('Renderiza o component PostCard corretamente', () => {
  const { history } = renderWithRouter(
    <PostCard
      title={mock.title}
      image={mock.image}
      link={mock.link}
      author={mock.author}
      description={mock.description}
      date={mock.date}
    />
  )

  const title = screen.getByText(/Diferença entre const e let no JavaScript/i)
  expect(title).toBeTruthy()

  const author = screen.getByText(/Rodrigo Ruan/i)
  expect(author).toBeTruthy()

  const description = screen.getByText(/Aprenda a diferença entre let e const no JavaScript/i)
  expect(description).toBeTruthy()

  expect(history.location.pathname).toBe('/')

  fireEvent.click(title)

  expect(history.location.pathname).toBe('/post/difereca-const-let-js')
})
