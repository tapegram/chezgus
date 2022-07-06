import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const BorrowPage = () => {
  return (
    <>
      <MetaTags title="Borrow" description="Borrow page" />

      <h1>BorrowPage</h1>
      <p>
        Find me in <code>./web/src/pages/BorrowPage/BorrowPage.tsx</code>
      </p>
      <p>
        My default route is named <code>borrow</code>, link to me with `
        <Link to={routes.borrow()}>Borrow</Link>`
      </p>
    </>
  )
}

export default BorrowPage
