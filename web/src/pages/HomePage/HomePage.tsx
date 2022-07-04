import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <div className="w-full p-4">
        <main role="main" className="w-full flex flex-col h-screen content-center justify-center">
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-gray-50 rounded-xl m-auto">
            <div className="bg-white rounded shadow px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <img src="/img/housefront.jpg" alt="House" />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default HomePage
