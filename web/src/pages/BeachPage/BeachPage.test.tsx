import { render } from '@redwoodjs/testing/web'

import BeachPage from './BeachPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BeachPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BeachPage />)
    }).not.toThrow()
  })
})
