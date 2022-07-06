import { MetaTags } from '@redwoodjs/web'

const PhotosPage = () => {
  return (
    <>
      <MetaTags title="Photos" description="Photos page" />

      <div className="bg-white">
        <div className="pt-6">

          {/* <!-- Image gallery --> */}
          <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="my-4 aspect-w-3 aspect-h-4 rounded-lg overflow-visible lg:block">
              <img src="img/entryway.jpg" alt="The entry way" className="w-full h-full object-center object-cover" />
            </div>
            <div className="my-4 aspect-w-3 aspect-h-4 rounded-lg overflow-visible lg:block">
              <img src="img/frontdeck.jpg" alt="The front deck" className="w-full h-full object-center object-cover" />
            </div>
            <div className="my-4 aspect-w-3 aspect-h-4 rounded-lg overflow-visible lg:block">
              <img src="img/guestroom.jpg" alt="Guest bedroom" className="w-full h-full object-center object-cover" />
            </div>
            <div className="my-4 aspect-w-3 aspect-h-4 rounded-lg overflow-visible lg:block">
              <img src="img/mainroom.jpg" alt="Main bedroom" className="w-full h-full object-center object-cover" />
            </div>
            <div className="my-4 aspect-w-3 aspect-h-4 rounded-lg overflow-visible lg:block">
              <img src="img/kitchen-view.jpg" alt="The Kitchen" className="w-full h-full object-center object-cover" />
            </div>
            <div className="my-4 aspect-w-3 aspect-h-4 rounded-lg overflow-visible lg:block">
              <img src="img/livingroom.jpg" alt="The living room" className="w-full h-full object-center object-cover" />
            </div>
            <div className="my-4 aspect-w-3 aspect-h-4 rounded-lg overflow-visible lg:block">
              <img src="img/shower.jpg" alt="The outdoor shower" className="w-full h-full object-center object-cover" />
            </div>
            <div className="my-4 aspect-w-3 aspect-h-4 rounded-lg overflow-visible lg:block">
              <img src="img/walkway.jpg" alt="The walkway" className="w-full h-full object-center object-cover" />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default PhotosPage
