import React from 'react'

function Payment() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Component */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Title */}
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Aceptamos todo medio de pago
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-lg text-gray-500 md:mb-12">
          Todos nuestros técnicos cuentan con terminales de pago por si necesitas pagar con tarjetas de crédito y débito o si prefieres transferencia
          </p>
          {/* Form */}
          <div className="mx-auto mb-4 flex max-w-xl justify-center">
            <img src="https://i.postimg.cc/cH5K9snV/webpay.webp" alt="" className='' />
            
          </div>
            <a href="#" className="inline-flex justify-center items-center py-3 mt-7 px-5 text-base font-medium text-center text-white bg-red-600 rounded-lg border border-red-900 hover:bg-red-900 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>
                Llamanos ahora
            </a> 
        </div>
      </div>
    </section>
  )
}

export default Payment