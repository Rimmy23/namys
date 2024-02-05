import { Disclosure } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { /*useEffect,*/ useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
/*import axiosClient from '../axios'*/

const navigation = [
  { name: 'Svíčky', to: '/candles' },
  { name: 'Dekorace', to: '/decorations' },
  { name: 'Péče o svíčky', to: '/candlescare' },
  { name: 'O nás', to: '/about' },
  { name: 'Kontakty', to: '/contacts' },
]

const products = [
    {
      id: 1,
      name: 'Jahodový koktejl',
      href: '#',
      price: '425,-Kč',
      imageSrc: './src/images/DSC_0803.JPG',
      imageAlt: '',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Citrusový ráj',
      href: '#',
      price: '425,-Kč',
      imageSrc: './src/images/DSC_0808.JPG',
      imageAlt: '',
      quantity: 2,
    },
    {
      id: 3,
      name: 'Borůvka&Vanilka',
      href: '#',
      price: '425,-Kč',
      imageSrc: './src/images/DSC_0814.JPG',
      imageAlt: '',
      quantity: 1,
    },
    {
      id: 4,
      name: 'Svěží příroda',
      href: '#',
      price: '425,-Kč',
      imageSrc: './src/images/DSC_0816.JPG',
      imageAlt: '',
      quantity: 3,
    },
    {
      id: 5,
      name: 'Svěží příroda',
      href: '#',
      price: '425,-Kč',
      imageSrc: './src/images/DSC_0816.JPG',
      imageAlt: '',
      quantity: 1,
    },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function DefaultLayout() {

    const [isCartOpen, setIsCartOpen] = useState(false);
  
    const toggleCart = () => {
      setIsCartOpen(!isCartOpen);
    };


  return (
    <>
      <div className="min-h-full min-w-full relative">
        <Disclosure as="nav" className="bg-main font-serif fixed top-0 w-full z-10">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-center lg:justify-between">
                  <div className="relative order-2 lg:shrink-0 lg:order-1 lg:mr-26">
                      <NavLink href= '/'>
                        <img
                          className="mx-auto h-10 w-auto"
                          src="src/images/Namys.png"
                          alt="Your Company"
                        />
                      </NavLink>
                  </div>
                  <div className="relative hidden items-center justify-evenly order-1 ml-72 md:ml-60 lg:flex lg:order-2 lg:shrink-0 xl:pl-11">
                        <div className="space-x-3">
                          {navigation.map((item) => (
                            <NavLink
                              key={item.name}
                              to={item.to}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-900 text-white'
                                  : 'text-black hover:bg-main hover:text-black no-underline hover:underline',
                                'rounded-md px-3 text-md font-medium flex-nowrap'
                              )}
                              aria-current={item.current ? 'page' : undefined}>
                              {item.name}
                            </NavLink>
                          ))}
                        </div>
                  </div>
                  <div className="absolute right-4 order-last lg:relative">
                    <div className="md:block">
                      <div className="ml-6 flex items-center order-last md:space-x-4 md:ml-1">
                        <button
                          type="button"
                          className="relative rounded-full  bg-main p-2 text-gray-700 hover:bg-gray-400 hover:text-black focus:outline-none"
                        >
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Hledat</span>
                          <MagnifyingGlassIcon className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            className="relative rounded-full  bg-main p-2 text-gray-700 hover:bg-gray-400 hover:text-black focus:outline-none"
                            onClick={toggleCart}
                          >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Podívat se do košíku</span>
                            <ShoppingCartIcon className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true"/>
                        </button>
                          {isCartOpen && (
                            <div className="fixed ejection-animation top-0 right-0 mt-16 min-h-1/4 max-h-full w-full md:w-2/5 xl:w-1/4 bg-white p-4 rounded flex flex-col overscroll-auto shadow-xl">
                              <div className="flex-1 overflow-auto px-4 py-6 sm:px-6">
                              <div className="relative grid grid-cols-2">
                              <button
                                type="button"
                                className="absolute top-0 right-0 text-gray-400 hover:text-gray-500"
                                onClick={toggleCart}
                              >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Zavřít košík</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                              </button>
                              <h2 className="text-lg font-bold mb-4">Košík</h2>
                              </div>
                              {products.map((product) => (
                                  <li key={product.id} className="flex py-6">
                                    <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                      <img
                                        src={product.imageSrc}
                                        className="h-full w-full object-cover object-center"
                                      />
                                    </div>
    
                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a>{product.name}</a>
                                          </h3>
                                          <p className="ml-4">{product.price}</p>
                                        </div>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-gray-500">Kusů {product.quantity}</p>
    
                                        <div className="flex">
                                          <button
                                            type="button"
                                            className="font-medium text-red-700 hover:text-red-500"
                                          >
                                            Odstranit
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              <div className="mt-4">
                              <div className="mt-6">
                                <a
                                  href="/cart"
                                  className="flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-800"
                                >
                                  Přejít k pokladně
                                </a>
                                <button
                                    type="button"
                                    className="font-medium mt-3 text-gray-600 hover:text-gray-400"
                                    onClick={toggleCart}
                                  >
                                    Pokračovat v nákupu
                                    <span aria-hidden="true"> &rarr;</span>
                                  </button>
                              </div>
                              </div>
                              </div>
                            </div>
                          )}
                      </div>
                    </div>
                    </div>
                  <div className="absolute left-4 mr-12 flex order-1 lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="order-first relative inline-flex items-center justify-center rounded-md bg-main p-2 text-gray-700 hover:bg-gray-400 hover:text-black focus-outline-none">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="ejection-animation lg:hidden">
                <div className="space-y-1 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-700 hover:text-white',
                        'flex items-center justify-center px-3 py-2 text-md font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Outlet />
        <div className="grid grid-cols-3 mt-16 font-serif mb-5">
          <div className="grid grid-rows-3 h-64 items-center justify-center lg:h-full">
            <div>
              <NavLink href= '/'>
                          <img
                            className="mx-auto h-10 w-auto"
                            src="src/images/Namys.png"
                            alt="Your Company"
                          />
              </NavLink>
            </div>
            <div className="flex flex-wrap text-center pr-10 pl-10">
              Přidejte se k nám na sociální sítě
            </div>
            <div className="flex -ml-4 justify-evenly">
              <button type="button"
                      href="/">
                <svg xmlns="http://www.w3.org/2000/svg"
                     className="h-8 w-8"
                     x="0px" 
                     y="0px"  
                     viewBox="0 0 50 50">
                  <path d="M 9 4 C 6.2495759 4 4 6.2495759 4 9 L 4 41 C 4 43.750424 6.2495759 46 9 46 L 41 46 C 43.750424 46 46 43.750424 46 41 L 46 9 C 46 6.2495759 43.750424 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.671576 6 44 7.3284241 44 9 L 44 41 C 44 42.671576 42.671576 44 41 44 L 9 44 C 7.3284241 44 6 42.671576 6 41 L 6 9 C 6 7.3284241 7.3284241 6 9 6 z M 26.042969 10 A 1.0001 1.0001 0 0 0 25.042969 10.998047 C 25.042969 10.998047 25.031984 15.873262 25.021484 20.759766 C 25.016184 23.203017 25.009799 25.64879 25.005859 27.490234 C 25.001922 29.331679 25 30.496833 25 30.59375 C 25 32.409009 23.351421 33.892578 21.472656 33.892578 C 19.608867 33.892578 18.121094 32.402853 18.121094 30.539062 C 18.121094 28.675273 19.608867 27.1875 21.472656 27.1875 C 21.535796 27.1875 21.663054 27.208245 21.880859 27.234375 A 1.0001 1.0001 0 0 0 23 26.240234 L 23 22.039062 A 1.0001 1.0001 0 0 0 22.0625 21.041016 C 21.906673 21.031216 21.710581 21.011719 21.472656 21.011719 C 16.223131 21.011719 11.945313 25.289537 11.945312 30.539062 C 11.945312 35.788589 16.223131 40.066406 21.472656 40.066406 C 26.72204 40.066409 31 35.788588 31 30.539062 L 31 21.490234 C 32.454611 22.653646 34.267517 23.390625 36.269531 23.390625 C 36.542588 23.390625 36.802305 23.374442 37.050781 23.351562 A 1.0001 1.0001 0 0 0 37.958984 22.355469 L 37.958984 17.685547 A 1.0001 1.0001 0 0 0 37.03125 16.6875 C 33.886609 16.461891 31.379838 14.012216 31.052734 10.896484 A 1.0001 1.0001 0 0 0 30.058594 10 L 26.042969 10 z M 27.041016 12 L 29.322266 12 C 30.049047 15.2987 32.626734 17.814404 35.958984 18.445312 L 35.958984 21.310547 C 33.820114 21.201935 31.941489 20.134948 30.835938 18.453125 A 1.0001 1.0001 0 0 0 29 19.003906 L 29 30.539062 C 29 34.707538 25.641273 38.066406 21.472656 38.066406 C 17.304181 38.066406 13.945312 34.707538 13.945312 30.539062 C 13.945312 26.538539 17.066083 23.363182 21 23.107422 L 21 25.283203 C 18.286416 25.535721 16.121094 27.762246 16.121094 30.539062 C 16.121094 33.483274 18.528445 35.892578 21.472656 35.892578 C 24.401892 35.892578 27 33.586491 27 30.59375 C 27 30.64267 27.001859 29.335571 27.005859 27.494141 C 27.009759 25.65271 27.016224 23.20692 27.021484 20.763672 C 27.030884 16.376775 27.039186 12.849206 27.041016 12 z"></path>
                </svg>
              </button>
              <button type="button"
                      href="/">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  x="0px" 
                  y="0px" 
                  viewBox="0 0 26 26">
                  <path d="M 7.546875 0 C 3.390625 0 0 3.390625 0 7.546875 L 0 18.453125 C 0 22.609375 3.390625 26 7.546875 26 L 18.453125 26 C 22.609375 26 26 22.609375 26 18.453125 L 26 7.546875 C 26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2 L 18.453125 2 C 21.527344 2 24 4.46875 24 7.546875 L 24 18.453125 C 24 21.527344 21.53125 24 18.453125 24 L 7.546875 24 C 4.472656 24 2 21.53125 2 18.453125 L 2 7.546875 C 2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4 C 19.671875 4 19 4.671875 19 5.5 C 19 6.328125 19.671875 7 20.5 7 C 21.328125 7 22 6.328125 22 5.5 C 22 4.671875 21.328125 4 20.5 4 Z M 13 6 C 9.144531 6 6 9.144531 6 13 C 6 16.855469 9.144531 20 13 20 C 16.855469 20 20 16.855469 20 13 C 20 9.144531 16.855469 6 13 6 Z M 13 8 C 15.773438 8 18 10.226563 18 13 C 18 15.773438 15.773438 18 13 18 C 10.226563 18 8 15.773438 8 13 C 8 10.226563 10.226563 8 13 8 Z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-rows-6 justify-center h-40 mt-9 lg:mt-0 lg:h-full">
            <h5 className="font-semibold">Informace</h5>
            {navigation.map((item) => (
                            <NavLink
                              key={item.name}
                              to={item.to}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-900 text-white'
                                  : 'text-black hover:bg-main hover:text-black no-underline hover:underline',
                                'rounded-md text-sm'
                              )}
                              aria-current={item.current ? 'page' : undefined}>
                              {item.name}
                            </NavLink>
                          ))}
          </div>
          <div className="grid grid-rows-6 justify-center h-40 mt-9 lg:mt-0 lg:h-full">
            <h5 className="font-semibold">Kontakty</h5>
            <a className="text-sm">email@email.com</a>
            <a className="text-sm">+420123456789</a>
          </div>
        </div>
        <div className="h-5 w-full bg-footer flex justify-center items-center">
          <a className="text-white text-xs">Copyright 2023 Namys</a>
        </div>
      </div>
    </>
  )
 }