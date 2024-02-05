import { useEffect, useState } from "react";
import axiosClient from "../../axios";
import { Link } from "react-router-dom";

export default function Decorations() {
  const [ decos, setDecos ] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    axiosClient.get('/decorations')
    .then(({data})=>{
      setDecos(data.data);
      setLoading(false);
    }).catch((error) => {
      console.error("Chyba pri nacitani svicek:", error);
    });
  }, []);


  return (
    <div className="bg-zinc-50 min-h-screen font-serif">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <h2 className="text-3xl border-b mt-10 font-bold tracking-tight text-gray-900">Dekorace</h2>
        {loading && <div className="flex text-center text-2xl">Načítání....</div>}
        {!loading &&
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {decos.map((decoration) => (
            <Link key={decoration.id} to={`/decoration/${decoration.id}`} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={decoration.image_url0}
                  alt={decoration.imageAlt}
                  className="h-96 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-md text-gray-700">{decoration.nameDeco}</h3>
              <p className="mt-1 text-xl font-sans font-medium text-gray-900">{decoration.priceDeco} ,-Kč</p>
            </Link>
          ))}
        </div>}
      </div>
    </div>
  )
}