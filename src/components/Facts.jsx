import React from 'react'

function Facts() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold md:text-5xl">
          Entregando soluciones y calidad
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-lg items-center text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16 invisible">
            A cientos de clientes.
        </p>
        {/* Content */}
        <div className="mx-auto flex w-full max-w-7xl flex-col flex-wrap justify-between gap-5 bg-gray-100 px-16 py-8 sm:flex-row md:gap-6">
          {/* Item */}
          <div className="flex flex-col items-center justify-center">
          <h4 className="text-xl font-bold sm:text-2xl md:text-3xl text-blue-800">12</h4>
            <p className="text-sm uppercase">meses de garantía</p>
          </div>
          {/* Item */}
          <div className="flex flex-col items-center justify-center">
          <h4 className="text-xl font-bold sm:text-2xl md:text-3xl text-blue-800">+1.000</h4>
            <p className="text-sm uppercase">Clientes satisfechos</p>
          </div>
          {/* Item */}
          <div className="flex flex-col items-center justify-center">
          <h4 className="text-xl font-bold sm:text-2xl md:text-3xl text-blue-800">0</h4>
            <p className="text-sm uppercase">Reclamos</p>
          </div>
          {/* Item */}
          <div className="flex flex-col items-center justify-center">
          <h4 className="text-xl font-bold sm:text-2xl md:text-3xl text-blue-800">100%</h4>
            <p className="text-sm uppercase">Satisfacción</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Facts