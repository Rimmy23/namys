import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../axios";

function AddDeco() {

  const navigate = useNavigate();

  const [deco, setDeco] = useState({
    nameDeco: "",
    productDescribeDeco: "",
    parameterDeco: "",
    image_deco_main: null,
    image_deco_first: null,
    image_deco_second: null,
    image_url0: null,
    image_url1: null,
    image_url2: null,
    priceDeco: "",
    amountDeco: "",
  });

  const onImageChoose0 = (ev) => {
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setDeco({...deco, image_deco_main: file, image_url0: reader.result,});
      ev.target.value="";
    };
    reader.readAsDataURL(file);
  };

  const onImageChoose1 = (ev) => {
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setDeco({...deco, image_deco_first: file, image_url1: reader.result,});
      ev.target.value="";
    };
    reader.readAsDataURL(file);
  };

  const onImageChoose2 = (ev) => {
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setDeco({...deco, image_deco_second: file, image_url2: reader.result,});
      ev.target.value="";
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = (ev) =>{
    ev.preventDefault();

    const payload = {...deco};
    if (payload.image_deco_main){
      payload.image_deco_main=payload.image_url0;
    }
    delete payload.image_url0;

    if (payload.image_deco_first){
      payload.image_deco_first=payload.image_url1;
    }
    delete payload.image_url1;
    
    if (payload.image_deco_second){
      payload.image_deco_second=payload.image_url2;
    }
    delete payload.image_url2;

    axiosClient.post("/decoration", payload).then((res)=>{
      console.log(res);
      navigate('/admin/loggedin/decorationMod')
    })
    
  }

  return (
    <form action="#" method="POST" onSubmit={onSubmit}>  
    <div className="bg-gray">
    <div className="max-w-screen-2xl justify-items-center md:grid grid-cols-2">

      {/* Image gallery */}
      <div className="max-w-sm grid grid-cols-1 items-center md:max-w-4xl  lg:max-w-7xl lg:gap-x-8 lg:px-0 xl:grid-cols-2 xl:h-full">
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg border-2 border-gray-500 w-full h-full flex items-center justify-center">  
          <div className="grid grid-row-2">
          {deco.image_url0 && (<img src={deco.image_url0} alt="" className="w-full h-full object-cover"/>)}
          {!deco.image_url0 && (
            <>
            <label htmlFor="image_deco_main" className="cursor-pointer relative flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-48 h-48">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </label>
            <label className="block text-center text-3xl text-gray-900 font-bold">
              Nahrát hlavní obrázek
            </label>
            </>
            )}
            <input 
              className="w-48 h-48 cursor-pointer opacity-0 absolute" 
              aria-describedby="file_input_help" 
              id="image_deco_main" 
              name="image_deco_main" 
              type="file" 
              onChange={onImageChoose0}
              />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 pt-9 w-full h-full xl:pt-0">
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg border-2 border-gray-500 w-full h-full flex items-center justify-center">  
          <div className="grid grid-row-2">
          {deco.image_url1 && (<img src={deco.image_url1} alt="" className="w-full h-full object-cover"/>)}
          {!deco.image_url1 && (
            <>
            <label htmlFor="image_deco_first" className="cursor-pointer relative flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-40 h-40">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </label>
            <label className="block text-center text-2xl text-gray-900 font-bold">
              Nahrát vedlejší obrázek 1
            </label>
            </>
          )}
            <input 
              className="w-40 h-40 cursor-pointer opacity-0 absolute" 
              aria-describedby="file_input_help" 
              id="image_deco_first" 
              name="image_deco_first" 
              type="file"
              onChange={onImageChoose1} 
              />  
          </div>
        </div>
        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg border-2 border-gray-500 w-full h-full flex items-center justify-center">  
          <div className="grid grid-row-2">
          {deco.image_url2 && (<img src={deco.image_url2} alt="" className="w-full h-full object-cover"/>)}
          {!deco.image_url2 && (
            <>
            <label htmlFor="image_deco_second" className="cursor-pointer relative flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-40 h-40">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </label>
            <label className="block text-center text-2xl text-gray-900 font-bold">
            Nahrát vedlejší obrázek 2
            </label>
            </>
          )}
            <input 
              className="w-40 h-40 cursor-pointer opacity-0 absolute" 
              aria-describedby="file_input_help" 
              id="image_deco_second" 
              name="image_deco_second" 
              type="file" 
              onChange={onImageChoose2}
              />
          </div>
        </div>
        </div>
      </div>
      {/* Product info */}
      <div className="mx-auto max-w-2xl px-4 pb-10 pt-10  sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-0">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <label htmlFor="nameDeco" className="block mb-2 text-3xl font-bold text-gray-900">Název produktu</label>
          <input 
            type="text" 
            id="nameDeco" 
            name="nameDeco" 
            placeholder="Název produktu" 
            className="block w-full h-14 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            value={deco.nameDeco} 
            onChange={(ev)=>setDeco({...deco, nameDeco: ev.target.value})} 
            />
        </div>
        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <label htmlFor="productDescribeDeco" className="block mb-2 text-lg font-bold text-gray-900">Popis produktu</label>
            <textarea 
              id="productDescribeDeco" 
              name="productDescribeDeco" 
              rows="13" 
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Zde bude popis produktu..."
              value={deco.productDescribeDeco} 
              onChange={(ev)=>setDeco({...deco, productDescribeDeco: ev.target.value})}
              ></textarea>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Paramtery</h3>
            <div className="mt-4">
              <textarea 
                id="parameterDeco" 
                name="parameterDeco" 
                rows="7" 
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Zde jsou parametry produktu..."
                value={deco.parameterDeco} 
                onChange={(ev)=>setDeco({...deco, parameterDeco: ev.target.value})}
                ></textarea>
            </div>
          </div>
        </div>
        {/* Options */}
          <div className="mt-4 items-center justify-center lg:row-span-3 lg:-mt-24">
            <p className="text-3xl tracking-tight text-gray-900 text-center font-bold">Cena</p>
            <form className="max-w-lg mx-auto mt-4 ml-3 flex items-center justify-center">
              <input 
                type="number" 
                id="priceDeco" 
                name="priceDeco" 
                aria-describedby="helper-text-explanation" 
                className="text-gray-900 w-1/3 text-2xl text-center rounded-lg block h-14 md:w-40 lg:w-4/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                placeholder="425" 
                required 
                value={deco.priceDeco} 
                onChange={(ev)=>setDeco({...deco, priceDeco: ev.target.value})}
                />
              <p className="font-bold text-2xl text-nowrap ml-2">,-Kč</p>
            </form>
            <form className="max-w-lg mx-auto mt-4 xl:ml-1 flex items-center justify-center">
              <input 
                type="number" 
                id="amountDeco" 
                name="amountDeco" 
                aria-describedby="helper-text-explanation" 
                className="text-gray-900 w-1/3 text-2xl text-center rounded-lg block h-14 md:w-40 lg:w-4/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" 
                placeholder="5" 
                required 
                value={deco.amountDeco} 
                onChange={(ev)=>setDeco({...deco, amountDeco: ev.target.value})}
                />
              <p className="font-bold text-2xl text-nowrap ml-2">Ks</p>
            </form>
            <div className="flex items-center justify-center mt-8 mr-8">
                <button type="submit" id="addDeco" className="text-white w-2/3 h-16 xl:w-4/5 xl:ml-2 xl:mt-16 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Přidat</button>
            </div>
          </div>
      </div>
    </div>
  </div>
  </form> 
)
}

export default AddDeco