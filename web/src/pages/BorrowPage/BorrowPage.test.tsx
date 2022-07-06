import { render } from '@redwoodjs/testing/web'

import BorrowPage from './BorrowPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BorrowPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BorrowPage />)
    }).not.toThrow()
  })
})
