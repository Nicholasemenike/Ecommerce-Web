import Image from 'next/image'

const LaptopCard = () => {
  return (
    <div className='group flex flex-col text-center max-w-40 w-60 h-100 hover:shadow-xl p-5 space-y-5 shadow-inner rounded-md cursor-pointer'>
        <Image 
        src="/images.jpeg" 
        alt="Item Image"
        height={200} 
        width={200}/>

        <div className=''>
          <p className=' text-xs line-clamp-2 text-ellipsis'>DELL Latitude 3310 Intel®️ Core™️ I5-Quad Core 256GB SSD 16GB RAM 13.3"WIN10 Pro</p>
          <div className='flex flex-col float-left mt-1'>
            <p className='flex'>₦ 418,000</p>
            <div className='flex flex-row'>
              <span className='line-through me-4'>₦ 540,000</span><span className=' bg-orange-100 text-orange-600 p-1 text-sm'>23%</span>
            </div>
          </div>       
        </div>
        <button className=' opacity-0 text-white bg-orange-400 rounded-md h-14 hover:bg-orange-600 group-hover:opacity-100'>ADD TO CART</button>
    </div>
  )
}

const ShoesCard = () => {
  return (
    <div className='group flex flex-col text-center max-w-40 w-60 h-100 hover:shadow-xl p-5 space-y-5 shadow-inner rounded-md cursor-pointer'>
        <Image 
        src="/images.jpeg" 
        alt="Item Image"
        height={200} 
        width={200}/>

        <div className=''>
          <p className=' text-xs line-clamp-2 text-ellipsis'>DELL Latitude 3310 Intel®️ Core™️ I5-Quad Core 256GB SSD 16GB RAM 13.3"WIN10 Pro</p>
          <div className='flex flex-col float-left mt-1'>
            <p className='flex'>₦ 418,000</p>
            <div className='flex flex-row'>
              <span className='line-through me-4'>₦ 540,000</span><span className=' bg-orange-100 text-orange-600 p-1 text-sm'>23%</span>
            </div>
          </div>       
        </div>
        <button className=' opacity-0 text-white bg-orange-400 rounded-md h-14 hover:bg-orange-600 group-hover:opacity-100'>ADD TO CART</button>
    </div>
  )
}

const ClothCard = () => {
  return (
    <div className='group flex flex-col text-center max-w-40 w-60 h-100 hover:shadow-xl p-5 space-y-5 shadow-inner rounded-md cursor-pointer'>
        <Image 
        src="/images.jpeg" 
        alt="Item Image"
        height={200} 
        width={200}/>

        <div className=''>
          <p className=' text-xs line-clamp-2 text-ellipsis'>DELL Latitude 3310 Intel®️ Core™️ I5-Quad Core 256GB SSD 16GB RAM 13.3"WIN10 Pro</p>
          <div className='flex flex-col float-left mt-1'>
            <p className='flex'>₦ 418,000</p>
            <div className='flex flex-row'>
              <span className='line-through me-4'>₦ 540,000</span><span className=' bg-orange-100 text-orange-600 p-1 text-sm'>23%</span>
            </div>
          </div>       
        </div>
        <button className=' opacity-0 text-white bg-orange-400 rounded-md h-14 hover:bg-orange-600 group-hover:opacity-100'>ADD TO CART</button>
    </div>
  )
}

const CapCard = () => {
  return (
    <div className='group flex flex-col text-center max-w-40 w-60 h-100 hover:shadow-xl p-5 space-y-5 shadow-inner rounded-md cursor-pointer'>
        <Image 
        src="/images.jpeg" 
        alt="Item Image"
        height={200} 
        width={200}/>

        <div className=''>
          <p className=' text-xs line-clamp-2 text-ellipsis'>DELL Latitude 3310 Intel®️ Core™️ I5-Quad Core 256GB SSD 16GB RAM 13.3"WIN10 Pro</p>
          <div className='flex flex-col float-left mt-1'>
            <p className='flex'>₦ 418,000</p>
            <div className='flex flex-row'>
              <span className='line-through me-4'>₦ 540,000</span><span className=' bg-orange-100 text-orange-600 p-1 text-sm'>23%</span>
            </div>
          </div>       
        </div>
        <button className=' opacity-0 text-white bg-orange-400 rounded-md h-14 hover:bg-orange-600 group-hover:opacity-100'>ADD TO CART</button>
    </div>
  )
}

const WatchCard = () => {
  return (
    <div className='group flex flex-col text-center max-w-40 w-60 h-100 hover:shadow-xl p-5 space-y-5 shadow-inner rounded-md cursor-pointer'>
        <Image 
        src="/images.jpeg" 
        alt="Item Image"
        height={200} 
        width={200}/>

        <div className=''>
          <p className=' text-xs line-clamp-2 text-ellipsis'>DELL Latitude 3310 Intel®️ Core™️ I5-Quad Core 256GB SSD 16GB RAM 13.3"WIN10 Pro</p>
          <div className='flex flex-col float-left mt-1'>
            <p className='flex'>₦ 418,000</p>
            <div className='flex flex-row'>
              <span className='line-through me-4'>₦ 540,000</span><span className=' bg-orange-100 text-orange-600 p-1 text-sm'>23%</span>
            </div>
          </div>       
        </div>
        <button className=' opacity-0 text-white bg-orange-400 rounded-md h-14 hover:bg-orange-600 group-hover:opacity-100'>ADD TO CART</button>
    </div>
  )
}

export { CapCard, ClothCard, LaptopCard, ShoesCard, WatchCard }
