import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const BeachPage = () => {
  return (
    <>
      <MetaTags title="Beach" description="Beach page" />

      <div className="bg-white">
        <div className="pt-6">
          <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="my-4 aspect-w-3 aspect-h-4 rounded-lg overflow-visible lg:block">
              <img src="img/lake1.jpg" alt="" className="w-full h-full object-center object-cover" />
            </div>
            <div className="my-4 aspect-w-3 aspect-h-4 rounded-lg overflow-visible lg:block">
              <img src="img/lake2.jpg" alt="" className="w-full h-full object-center object-cover" />
            </div>
            <div className="my-4 aspect-w-3 aspect-h-4 rounded-lg overflow-visible lg:block">
              <img src="img/summerlake.jpg" alt="" className="w-full h-full object-center object-cover" />
            </div>
            <div className="my-4 aspect-w-3 aspect-h-4 rounded-lg overflow-visible lg:block">
              <img src="img/winterlake.jpg" alt="" className="w-full h-full object-center object-cover" />
            </div>
            <div className="my-4 aspect-w-3 aspect-h-4 rounded-lg overflow-visible lg:block">
              <img src="img/winterlake2.jpg" alt="" className="w-full h-full object-center object-cover" />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default BeachPage
