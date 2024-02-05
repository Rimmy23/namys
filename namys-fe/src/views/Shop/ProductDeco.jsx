import { useEffect, useState } from "react";
import axiosClient from "../../axios";
import { useParams } from "react-router-dom";

function ProductDeco() {

  const { id } = useParams();
  const [decoData, setDecoData] = useState();
  const [loading, setLoading] = useState(false);

useEffect(()=>{
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try{
     await axiosClient.get(`/decorations/${id}`)
    .then(({ data }) => {
      setDecoData(data.data);
      setLoading(false);
    }
    )}catch(error){
    console.error("Chyba pri nacitani dekoraci:", error);
    setLoading(false);
    }
  }

  return (
    <div className="bg-zinc-50">
      {loading && <div className="flex items-center justify-center text-center text-2xl">Načítání....</div>}
      {!loading && decoData && (
      <div className="pt-16 pb-6 ml-36 max-w-screen-2xl justify-items-center md:grid grid-cols-2">

        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={decoData.image_url0}
              alt={decoData.image_url0}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={decoData.image_url1}
                alt={decoData.image_url1}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={decoData.image_url2}
                alt={decoData.image_url2}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10  sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{decoData.nameDeco}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Informace o produktu</h2>
            <p className="text-3xl tracking-tight text-gray-900">{decoData.priceDeco} ,- Kč</p>
            <p className="text-md border-t mt-5 tracking-tight text-black">{decoData.amountDeco} kusů skladem</p>

            <form className="mt-10">
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Přidat do košíku
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Popis</h3>

              <div className="space-y-6">
                {decoData.productDescribeDeco}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Paramtery</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                      {decoData.parameterDeco}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>)}
    </div>
  )
}

export default ProductDeco