import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const bestsellers = [
  {
    id: 1,
    name: 'Jahodový koktejl',
    href: '/product',
    price: '425,-Kč',
    imageSrc: './src/images/DSC_0803.JPG',
    imageAlt: '',
  },
  {
    id: 2,
    name: 'Citrusový ráj',
    href: '/product',
    price: '425,-Kč',
    imageSrc: './src/images/DSC_0808.JPG',
    imageAlt: '',
  },
  {
    id: 3,
    name: 'Borůvka&Vanilka',
    href: '/product',
    price: '425,-Kč',
    imageSrc: './src/images/DSC_0814.JPG',
    imageAlt: '',
  },
  {
    id: 4,
    name: 'Svěží příroda',
    href: '/product',
    price: '425,-Kč',
    imageSrc: './src/images/DSC_0816.JPG',
    imageAlt: '',
  },
]

const newProducts = [
  {
    id: 1,
    name: 'Jahodový koktejl',
    href: '/product',
    price: '425,-Kč',
    imageSrc: './src/images/DSC_0803.JPG',
    imageAlt: '',
  },
  {
    id: 2,
    name: 'Citrusový ráj',
    href: '/product',
    price: '425,-Kč',
    imageSrc: './src/images/DSC_0808.JPG',
    imageAlt: '',
  },
];

const slides = [
  {
    imageSrc: './src/images/odlitky_provizorni.jpg',
  },
  {
    imageSrc: './src/images/provizorni_background.jpg', 
  },
  {
    imageSrc: './src/images/sojovy_vosk_provizorni.jpg',
  },
];

export default function Dashboard() {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-zinc-50 z-0">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mb-16 min-w-full h-96 relative group">
          <div style={{backgroundImage: `url(${slides[currentIndex].imageSrc})`}} className="w-full h-full rounded-sm bg-center bg-cover duration-500">
          </div>
          <div className="hidden group-hover:block absolute top-[45%] left-3 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer w-10 h-10">
            <ChevronLeftIcon onClick={prevSlide} size={30}/>
          </div>
          <div className="hidden group-hover:block absolute top-[45%] right-3 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer w-10 h-10">
            <ChevronRightIcon onClick={nextSlide} />
          </div>
        </div>
        <div className="mb-10">
          <h2 className="font-serif font-medium text-2xl mb-10">Nejprodávanější</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {bestsellers.map((product) => (
              <a key={product.id} href='#' className="group bg-card rounded-lg">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-96 w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 ml-2 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 ml-2 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
        <div className="mb-10 mt-10">
          <h2 className="font-serif font-medium text-2xl">Novinky</h2>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {newProducts.map((product) => (
            <a key={product.id} href='#' className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-96 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
