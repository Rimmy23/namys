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

function ConfirmOrder() {
  return (
<div className=" bg-zinc-50 font-serif">
    <div className="flex flex-col items-center justify-center">
      <div className="flex-1 space-y-12 w-2/3 md:w-1/3 h-full mt-24">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-xl font-bold leading-7 text-gray-900">Dokončení objednávky</h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-5 dark:bg-gray-700">
            <div className="bg-green-600 h-2.5 rounded-full" style={{width: '75%'}}></div>
          </div>
          <p className="mt-5 text-sm leading-6 text-gray-600">Shrnutí informací o objednávce</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm border-b font-medium leading-6 text-gray-900">
                Jméno
              </label>
              <div className="mt-2">
                Josef
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm border-b font-medium leading-6 text-gray-900">
                Přijmení
              </label>
              <div className="mt-2">
                Novák
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm border-b font-medium leading-6 text-gray-900">
                Email adresa
              </label>
              <div className="mt-2">
                josefnovak@email.cz
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm border-b font-medium leading-6 text-gray-900">
                Země
              </label>
              <div className="mt-2">
                Česká Republika
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm border-b font-medium leading-6 text-gray-900">
                Adresa
              </label>
              <div className="mt-2">
                Nová ulice 123
              </div>
            </div>

            <div className="sm:col-span-3 sm:col-start-1">
              <label htmlFor="city" className="block text-sm border-b font-medium leading-6 text-gray-900">
                Město
              </label>
                Nová Ves u Nového města na Moravě
              </div>
            </div>

            <div className="sm:col-span-2 w-1/3 mt-6">
              <label htmlFor="postal-code" className="block text-sm border-b font-medium leading-6 text-gray-900">
                PSČ
              </label>
              <div className="mt-2">
                45802
              </div>
            </div>
            <div className="mt-8">
              <label htmlFor="street-address" className="block text-sm border-b font-medium leading-6 text-gray-900">
                Název pobočky zásilkovny
              </label>
              <div className="mt-2">
                Nějaká pobočka poblíž
              </div>
            </div>
            <div className="mt-8 w-1/3">
              <label htmlFor="street-address" className="block text-sm border-b font-medium leading-6 text-gray-900">
                Číslo zásilkovny
              </label>
              <div className="mt-2 text-lg">
                  458785
              </div>
            </div>
          </div>
        </div>
        <label className="text-xl mt-5 mb-5 font-medium leading-6 text-gray-900">
                Objednané produkty
        </label>
        <div className="flex-1 space-y-12 w-2/3 md:w-1/3 h-full">
        {products.map((product) => (
        <li key={product.id} className="flex py-6 border-b">
          <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
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
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
            </div>
            <div className="flex flex-1 items-end justify-between text-sm">
              <p className="text-gray-500">Kusů {product.quantity}</p>
            </div>
          </div>
        </li>
      ))}
        </div>
        <div className="flex justify-between w-2/3 md:w-1/3 h-full border-b pb-3">
          <div className="mt-5 text-lg">Zaplatit celkem:</div>
          <div className="mt-5 font-bold text-lg">1257 ,- Kč</div> {/*promenna pro celkovou sumu ceny*/}
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
        <a type="button" href="/order" className="text-sm mb-4 font-semibold leading-6 text-gray-900">
          Zpět
        </a>
        <a
          type="submit"
          href="#"
          className="rounded-md bg-green-600 mb-4 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Zaplatit objednávku
        </a>
      </div>
      </div>
    </div>
  )
}

export default ConfirmOrder