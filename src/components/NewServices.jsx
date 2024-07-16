import React from 'react'

function NewServices() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="flex flex-col items-center">
          <h2 className="text-center text-3xl font-bold md:text-5xl">
            Conoce nuestros servicios
          </h2>
          <p className="mb-8 mt-4 text-center text-lg text-gray-500 md:mb-12 lg:mb-16">
            De mano de mecánicos profesionales
          </p>
          {/* Content */}
          <div className="mb-6 grid gap-4 sm:grid-cols-2 sm:justify-items-stretch md:mb-10 md:grid-cols-2 lg:mb-12 lg:gap-6">
            <a
              href="#"
              className="flex flex-col gap-4 rounded-md border border-solid border-gray-300 px-4 py-8 md:p-0"
            >
              <img
                src="https://i.postimg.cc/5tsWLjcW/card-2.webp"
                alt=""
                className="h-80 object-cover"
              />
              <div className="px-6 py-4 mx-auto">
                <p className="mb-4 text-2xl font-semibold">
                  Cambio de baterías a domicilio
                </p>
                {/* <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8 invisible">
                  Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                  amet luctus venenatis elit ut aliquam, purus sit amet luctus
                  venenatis
                </p> */}
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col gap-4 rounded-md border border-solid border-gray-300 px-4 py-8 md:p-0"
            >
              <img
                src="https://i.postimg.cc/3JzR0SXF/card-1.webp"
                alt=""
                className="h-80 object-cover"
              />
              <div className="px-6 py-4 mx-auto">
                <p className="mb-4 text-2xl font-semibold">
                  Recarga de batería a domicilio
                </p>
                {/* <p className="mb-6 text-sm text-gray-500 sm:text-base lg:mb-8 invisible">
                  Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit
                  amet luctus venenatis elit ut aliquam, purus sit amet luctus
                  venenatis
                </p> */}
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewServices