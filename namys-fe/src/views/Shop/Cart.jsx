/*import { useEffect, useState } from "react"
import axiosClient from "../../axios";*/

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

function Cart() {

  /*const [products, setProducts] = useState([]);
  const [visitorCartId, setVisitorCartId] = useState(null);

  useEffect(()=>{
    createVisitorCart();
  }, []);

  const createVisitorCart = async () => {
    try{
      const response = await axiosClient.post('/cart');
      setVisitorCartId(response.data.cart_id);
    }catch(error){
      console.error('Chyba pri vytvareni kosiku:', error);
    }
  };

  useEffect(()=>{
    fetchCartProducts();
  },[]);

  const fetchCartProducts = async () => {
    try{
      const response = await axiosClient.get('/visitor-cart-products', {visitor_cart_id: visitorCartId,});
      setProducts(response.data.cartItems);
    }catch(error){
      console.error('Chyba pri nacitani produktu z kosiku: ', error);
    }
  };*/


  return (
    <div className=" bg-zinc-50 font-serif flex items-center justify-center">
    <div className="mt-16 h-full w-full md:w-2/5 xl:w-2/5 p-4 rounded flex flex-col justify-center overscroll-auto">
    <div className="flex-1 overflow-auto px-4 py-6 sm:px-6">
    <div className="relative grid grid-cols-2">
    <h2 className="text-lg font-bold mb-4">Košík</h2>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-green-600 h-2.5 rounded-full" style={{width: '25%'}}></div>
    </div>
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
                  <a href={product.href}>{product.name}</a>
                </h3>
                <p className="ml-4">{product.price}</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
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
    <div className="mt-6 flex flex-col items-center justify-center">
  <a
    href="/order"
    className="flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-800"
  >
    Pokračovat v dokončení objednávky
  </a>
  <a
      type="button"
      href="/"
      className="font-medium text-gray-600 mt-3 hover:text-indigo-500"
    >
      Pokračovat v nákupu
      <span aria-hidden="true"> &rarr;</span>
    </a>
</div>
    </div>
    </div>
  </div>
  </div>
      )
    }

export default Cart