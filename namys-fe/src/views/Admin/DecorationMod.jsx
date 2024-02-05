import { useEffect, useState } from "react";
import axiosClient from "../../axios";

function DecorationMod() {

      const [ deco, setDeco ] = useState([]);
      const [loading, setLoading] = useState(false);

      useEffect(()=>{
        setLoading(true)
        axiosClient.get('/decoration')
        .then(({data})=>{
          setDeco(data.data);
          setLoading(false);
        }).catch((error) => {
          console.error("Chyba pri nahravani dekoraci:", error);
        });
      }, []);

    return (
      <>
        {loading && <div className="text-center text-2xl">Načítání....</div>}
        {!loading &&  <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {deco.map((decoration) => (
            <a key={decoration.id} href="/admin/loggedin/modifyproduct" className="group">
              <div className="aspect-h-1 aspect-w-1 w-72 overflow-hidden rounded-lg border-2 border-gray-900 bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={decoration.image_url0}
                  alt={decoration.imageAlt}
                  className="h-96 w-72 object-cover object-center group-hover:opacity-75"
                />
              <h3 className="mt-4 text-sm text-gray-700">{decoration.nameDeco}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{decoration.priceDeco} ,-Kč</p>
              </div>
            </a>
          ))}
          <a  href="/admin/loggedin/addDeco" className="grid place-items-center text-gray-700 justify-center aspect-h-1 aspect-w-1 w-72 overflow-hidden rounded-lg border-2 border-gray-900 bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-48 h-48">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>    
          </a>
        </div>}
      </>
  )
}

export default DecorationMod