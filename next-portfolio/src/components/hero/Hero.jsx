"use client"
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'HOME', href: '#' },
  { name: 'BIO', href: '#' },
  { name: 'CV', href: '#' },
  { name: 'EXPERTISE', href: '#' },
]

const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-cover bg-center pl-12 bg-[url('https://arnicopanday.com/wp-content/uploads/2022/03/doc-dark-bg-1.jpg')] bg-top-10">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 ml-auto">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-lg font-semibold leading-7 text-white">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-8 w-8" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-4 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-4 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-32 pb-20 lg:px-8 flex items-center text-center">
  <div className="max-w-2xl text-white flex items-center justify-center flex-col"> {/* Modified this line */}
    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
      <img
        src="https://arnicopanday.com/wp-content/uploads/2023/03/arnico-logo-black-300x234.png"
        alt="Arniko Logo"
        style={{ width: "400px", height: "auto" }}
      />
    </h1>
    <p className="mt-6 text-lg leading-8 font-bold">
      <u>Member, National Planning Commission Government of Nepal</u>
    </p>
    <p class="font-bold">
      <u>Before that:</u>
    </p>
    <p class="font-bold">   
        Atmospheric Scientist, Policy Advisor, Science Communicator, Educator, Consultant, Planner, Dreamer, Global Citizen & Central Committee Member, Rashtriya Swatantra Party
    </p>
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <a
        href="#"
        className="rounded-md px-4 py-3 text-base font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 relative overflow-hidden"
      >
        <svg width="28px" height="100%" viewBox="0 0 247 390" version="1.1" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "1.5" }}>
          <path id="wheel" d="M123.359,79.775l0,72.843" style={{ fill: "none", stroke: "#fff", strokeWidth: "20px" }}></path>
          <path id="mouse" d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z" style={{ fill: "none", stroke: "#fff", strokeWidth: "20px" }}></path>
        </svg>
      </a>
    </div>
  </div>
</div>

    </div>
  )
}

export default Hero
