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
            Lightning Fast&nbsp;Webflow Dev Made Easy
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-sm text-gray-500 sm:text-base md:mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna
          </p>
          {/* Form */}
          <div className="mx-auto mb-4 flex max-w-xl justify-center">
            <form
              name="email-form"
              method="get"
              className="relative w-full max-w-lg"
            >
              <input
                type="email"
                className="h-9 w-full border border-solid border-black bg-white px-3 py-6 text-sm text-black"
                placeholder="Enter your email"
                required=""
              />
              <input
                type="submit"
                value="Subscribe"
                className="relative right-0 top-1 w-full cursor-pointer bg-black px-6 py-2 text-center font-semibold text-white sm:absolute sm:right-[5px] sm:w-auto"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Payment