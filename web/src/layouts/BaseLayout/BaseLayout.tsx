import { Link, routes } from "@redwoodjs/router"

type BaseLayoutProps = {
  children?: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => (
  <>
    <header>
      <nav>
        <ul>
          <li>
            <Link to={routes.home()}>Home</Link>
          </li>
          <li>
            <Link to={routes.photos()}>Photos</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
  </>
)

export default BaseLayout
