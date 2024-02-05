import { useEffect, useState } from "react";
import axiosClient from "../../axios";
/*import PaginationLinks from "../../components/PaginationLinks";*/

function CandlesMod() {
      const [ candles, setCandles ] = useState([]);
      const [loading, setLoading] = useState(false);
      /*const [meta, setMeta] = useState({});*/

      useEffect(()=>{
        setLoading(true)
        axiosClient.get('/candle')
        .then(({data})=>{
          setCandles(data.data);
          //setMeta(data.meta);
          setLoading(false);
        }).catch((error) => {
          console.error("Chyba pri nahravani svicek:", error);
        });
      }, []);


    return (
    <>
      {loading && <div className="text-center text-2xl">Načítání....</div>}
      {!loading && <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {candles.map((candle) => (
          <a key={candle.id} href="/admin/loggedin/modifyproduct" className="group">
            <div className="aspect-h-1 aspect-w-1 w-72 overflow-hidden rounded-lg border-2 border-gray-900 bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={candle.image_url0}
                className="h-96 w-72 object-cover object-center group-hover:opacity-75"
              />
            <h3 className="mt-4 text-sm text-gray-700">{candle.nameCandle}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{candle.priceCandle} ,-Kč</p>
            </div>
          </a>
        ))}
        <a  href="/admin/loggedin/addCandle" className="grid place-items-center text-gray-700 justify-center aspect-h-1 aspect-w-1 w-72 overflow-hidden rounded-lg border-2 border-gray-900 bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-48 h-48">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>    
        </a>
      {/*<PaginationLinks meta={meta}/>*/}
        </div>}
      </>
  )
}

export default CandlesMod