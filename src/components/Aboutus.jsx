import React from 'react'

function Aboutus() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 pt-12 md:px-10 md:py-16 lg:py-20">
        {/* Component */}
        <div className="grid gap-12 sm:gap-20 lg:grid-cols-2">
          {/* Content */}
          <div className="flex flex-col items-start gap-2">
            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:mb-8">
              Con más de 5 años<br />
              <span className='text-xl text-gray-700'>
                Prestando servicio en toda la Región metropolitana.
              </span>
            </h1>
            <p className="text-sm text-gray-500 sm:text-xl">
              Nuestros servicios abarcan a las comunas de: Cerrillos, Cerro Navia, Conchalí, El Bosque, Estación Central, Huechuraba, Independencia, La Cisterna, La Florida, La Granja, La Pintana, La Reina, Las Condes, Lo Barnechea, Lo Espejo, Lo Prado, Macul, Maipú, Ñuñoa, Pedro Aguirre Cerda, Peñalolén, Providencia, Pudahuel, Quilicura, Quinta Normal, Recoleta, Renca, San Joaquín, San Miguel, San Ramón, Santiago y Vitacura.
            </p>
            {/* Divider */}
          </div>
          {/* Image */}
          <div className="rounded-md">
            <img src="https://i.postimg.cc/LXM235vy/michelle-celedon-R9fg-UHd-Oop8-unsplash.webp" alt="" className='bg-cover'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus