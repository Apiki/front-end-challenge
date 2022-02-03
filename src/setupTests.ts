import '@testing-library/jest-dom'
import { configure } from '@testing-library/react'
import { setLogger } from 'react-query'
import nock from 'nock'

configure({ asyncUtilTimeout: 5000 })

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
})

expect.extend({
  mockToBeDone (received) {
    const description = Object.keys(received.keyedInterceptors).join('')

    if (received.isDone()) {
      return {
        message: () => `expected ${description} not to have been done`,
        pass: true,
      }
    } else {
      return {
        message: () => `expected ${description} to be done`,
        pass: false,
      }
    }
  },
})

beforeEach(() => {
  nock.cleanAll()
})

afterEach(() => {
  const pendingMocks = nock.pendingMocks()

  if (pendingMocks.length > 0) {
    const message =
      `Were found ${pendingMocks.length} pending mocks:\n\n` +
      pendingMocks.join('\n')

    throw new Error(message)
  }
})

process.env = Object.assign({
  REACT_APP_API_URL: 'http://localhost',
})
