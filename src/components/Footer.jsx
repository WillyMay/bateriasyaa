import React from 'react'

function Footer() {
  return (
    

<footer class="bg-white rounded-lg shadow dark:bg-gray-900">
    <div class="w-full max-w-screen-xl mx-auto p-4">
    <a href="https://flowbite.com/" class="flex justify-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse mx-auto">
                <img src="https://i.postimg.cc/BbByj0hw/output-onlinepngtools.png" class="h-40" alt="Flowbite Logo" />
            </a>
        <div class="sm:flex sm:items-start sm:justify-between">
            <div>
            <p className='font-medium text-gray-500'>Fono: +56 9 3623 9484</p>
            <p className='font-medium text-gray-500'>Email: bateriasyaa@gmail.com</p>
            <br /><br />
            </div>
            <div>
                <h1 className='font-medium text-gray-500'>Horarios:</h1>
                <p className='font-medium text-gray-500'>Lunes a Domingo</p>
                <p className='font-medium text-gray-500'>7:00am - 8:00pm</p>
            </div>
            <br />
            <br />
            <ul class="flex flex-wrap items-center mb-6 text-md font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#servicios" class="hover:underline me-4 md:me-6">Servicios</a>
                </li>
                <li>
                    <a href="#nosotros" class="hover:underline me-4 md:me-6">Quienes somos</a>
                </li>
                <li>
                    <a href="#contacto" class="hover:underline me-4 md:me-6">Contacto</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} Todos los derechos reservados.</span>
    </div>
</footer>


  )
}

export default Footer