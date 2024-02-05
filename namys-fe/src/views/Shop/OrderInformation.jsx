function OrderInformation() {

  return (
    <div className=" bg-zinc-50 font-serif">
    <form className="flex items-center justify-center">
      <div className="space-y-12 w-2/3 md:w-1/3 h-full mt-24">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-xl font-bold leading-7 text-gray-900">Osobní informace</h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-5 dark:bg-gray-700">
            <div className="bg-green-600 h-2.5 rounded-full" style={{width: '50%'}}></div>
          </div>
          <p className="mt-5 text-sm leading-6 text-gray-600">Informace pro doručení objednávky</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Jméno
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first_name"
                  id="first-name"
                  autoComplete="given-name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Přijmení
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last_name"
                  id="last-name"
                  autoComplete="family-name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email adresa
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Země
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Česká republika</option>
                  <option>Slovensko</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Adresa
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street_address"
                  id="street-address"
                  autoComplete="street-address"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Město
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  required
                  className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 w-1/3">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                PSČ
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="postal_code"
                  id="postal-code"
                  autoComplete="postal-code"
                  required
                  className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Název pobočky zásilkovny
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name_branch"
                  id="street-address"
                  autoComplete="street-address"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-8 w-1/3">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                Číslo zásilkovny
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="number_branch"
                  id="street-address"
                  autoComplete="street-address"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
        </div>
      <div>
        
          </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Poznámka</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Prosím uvádějte celý název zásilkovny včetně jejího čísla.
          </p>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
        <a type="button" href="/cart" className="text-sm mb-4 font-semibold leading-6 text-gray-900">
          Zpět
        </a>
        <a
          type="submit"
          href="/confirm"
          className="rounded-md bg-green-600 mb-4 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Pokračovat
        </a>
      </div>
      </div>
    </form>
    </div>
  )
}

export default OrderInformation