function ModifyProduct() {
  return (
    <div className="bg-gray">
      <div className="max-w-screen-2xl justify-items-center md:grid grid-cols-2">

        {/* Image gallery */}
        <div className="max-w-sm grid grid-cols-1 items-center md:max-w-4xl  lg:max-w-7xl lg:gap-x-8 lg:px-0 xl:grid-cols-2 xl:h-full">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg border-2 border-gray-500 w-full h-full flex items-center justify-center">  
            <div className="grid grid-row-2">
              <input className="w-48 h-48 cursor-pointer opacity-0 absolute" aria-describedby="file_input_help" id="image_input_candle_main" type="file" />
              <label htmlFor="image_input_candle_main" className="cursor-pointer relative flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-48 h-48">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </label>
              <label className="block text-center text-3xl text-gray-900 font-bold">
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-8 pt-9 w-full h-full xl:pt-0">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg border-2 border-gray-500 w-full h-full flex items-center justify-center">  
            <div className="grid grid-row-2">
              <input className="w-40 h-40 cursor-pointer opacity-0 absolute" aria-describedby="file_input_help" id="image_input_candle_first" type="file" />
              <label htmlFor="image_input_candle_first" className="cursor-pointer relative flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-40 h-40">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </label>
              <label className="block text-center text-2xl text-gray-900 font-bold">
              </label>
            </div>
          </div>
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg border-2 border-gray-500 w-full h-full flex items-center justify-center">  
            <div className="grid grid-row-2">
              <input className="w-40 h-40 cursor-pointer opacity-0 absolute" aria-describedby="file_input_help" id="image_input_candle_second" type="file" />
              <label htmlFor="image_input_candle_second" className="cursor-pointer relative flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-40 h-40">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </label>
              <label className="block text-center text-2xl text-gray-900 font-bold">
              </label>
            </div>
          </div>
          </div>
        </div>
        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-10 pt-10  sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-0">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <label htmlFor="nameCandle" className="block mb-2 text-3xl font-bold text-gray-900">Název produktu</label>
            <input type="text" id="nameCandle" placeholder="Název produktu" className="block w-full h-14 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <label htmlFor="productDescribeCandle" className="block mb-2 text-lg font-bold text-gray-900">Popis produktu</label>
              <textarea id="productDescribeCandle" rows="13" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Zde bude popis produktu..."></textarea>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Paramtery</h3>
              <div className="mt-4">
                <textarea id="parameterCandle" rows="7" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Zde jsou parametry produktu..."></textarea>
              </div>
            </div>
          </div>
          {/* Options */}
            <div className="mt-4 items-center justify-center lg:row-span-3 lg:-mt-24">
              <p className="text-3xl tracking-tight text-gray-900 text-center font-bold">Cena</p>
              <form className="max-w-lg mx-auto mt-4 ml-3 flex items-center justify-center">
                <input type="number" id="priceCandle" aria-describedby="helper-text-explanation" className="text-gray-900 w-1/3 text-2xl text-center rounded-lg block h-14 md:w-40 lg:w-4/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="425" required />
                <p className="font-bold text-2xl text-nowrap ml-2">,-Kč</p>
              </form>
              <form className="max-w-lg mx-auto mt-4 xl:ml-1 flex items-center justify-center">
              <input type="number" id="amountCandle" aria-describedby="helper-text-explanation" className="text-gray-900 w-1/3 text-2xl text-center rounded-lg block h-14 md:w-40 lg:w-4/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="5" required />
              <p className="font-bold text-2xl text-nowrap ml-2">Ks</p>
            </form>
            <div className="flex items-center justify-center mt-8 mr-8">
                <button type="button" id="modifyProduct" className="text-white w-2/3 h-16 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Upravit</button>
                <button type="button" id="deleteProduct" className="text-white w-2/3 h-16 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Smazat</button>
            </div>
            </div>           
        </div>
      </div>
    </div>
  )
}

export default ModifyProduct