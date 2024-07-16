import React from 'react'

function Steps() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 pt-16 md:px-10 ">
        {/* Title */}
        <h2 className="mb-8 text-center font-bold md:mb-12 text-5xl lg:mb-16">
          Nuestros servicios, en menos de <span className='text-red-600'>30 minutos.</span>
        </h2>
        {/* Content */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          {/* Item */}
          <div className="p-8 md:p-10">
            <h3 className="mb-4 text-2xl font-bold text-5xl">Llama</h3>
            <p className="text-lg text-gray-500">
              A través de uno de nuestros botones o contactandonos a nuestro WhatsApp.
            </p>
            <div className="absolute right-0 top-[29%] hidden h-2/5 border-r border-gray-300 md:block"></div>
          </div>
          {/* Item */}
          <div className="p-8 md:p-10">
            <h3 className="mb-4 text-2xl font-bold text-5xl">Espera</h3>
            <p className="text-lg text-gray-500">
              Que uno de nuestros profesionales llegará a ubicación y lo atienda.
            </p>
            <div className="absolute right-0 top-[29%] hidden h-2/5 border-r border-gray-300 md:block"></div>
          </div>
          {/* Item */}
          <div className="p-8 md:p-10">
            <h3 className="mb-4 text-2xl font-bold text-5xl text-yellow-700">¡Listo!</h3>
            <p className="text-lg text-gray-500">
              Disfruta tu auto y batería funcionando.
            </p>
          </div>
        </div>
      </div>
      <div id='nosotros'>
      <br /><br />
      </div>
    </section>
  )
}

export default Steps