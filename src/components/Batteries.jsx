import React from 'react'

function Batteries() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 md:px-10 pt-16">
        {/* Component */}
        <div className="flex flex-col items-center">
          <h2 className="text-center text-3xl font-bold mb-20">
            Contamos con las mejores baterías del mercado.
          </h2>
          {/* Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-32">
                    <div className="mx-auto sm:mr-0 group lg:mx-auto bg-white transition-all duration-500">
                        <img src="https://i.postimg.cc/3wmvnyjV/list-1.jpg" alt="bosch baterias" className="my-auto" />
                    </div>
                    <div className="mx-auto sm:mr-0 group lg:mx-auto bg-white transition-all duration-500">
                        <img src="https://i.postimg.cc/rsFRVf62/list-2.jpg" alt="quick start battery" className="" />
                    </div>
                    <div className="mx-auto sm:mr-0 group lg:mx-auto bg-white transition-all duration-500">
                        <img src="https://i.postimg.cc/9Fkw2PJs/logo-3.jpg" alt="solite battery" className="" />
                    </div>
                    <div className="mx-auto sm:mr-0 group lg:mx-auto bg-white transition-all duration-500">
                        <img src="https://i.postimg.cc/vmF1gYRz/logo-4.jpg" alt="hankook" className="" />
                    </div>

                
            </div>
        </div>
      </div>
    </section>
  )
}

export default Batteries