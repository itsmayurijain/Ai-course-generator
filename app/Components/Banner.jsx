import React from 'react'

export const Banner = () => {
  return (
    <div><section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto text-center">
          <h1 className="text-6xl font-extrabold  text-purple-700">
            AI Course Generator
          </h1>
          <strong className="font-extrabold text-5xl text-black pt-4 sm:block">Custom Learning Paths, Powered by AI </strong>


          <p className="mt-4 sm:text-xl/relaxed">
            Unlock Personalized Education AI-Driven course creation.Tailor your learning <br />journey to fit your unique goals and pace
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded mt-2 bg-purple-700 px-12 py-3 text-lg font-medium text-white shadow hover:bg-black focus:outline-none focus:ring active:bg-black sm:w-auto"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section></div>
  )
}
