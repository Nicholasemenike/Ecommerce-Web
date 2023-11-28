import { CapCard, ClothCard, LaptopCard, ShoesCard, WatchCard } from '@/Component/ItemCard.jsx'

const ItemSection = () => {
  return (
    <section className="">
        
          <section>
        <div className=" pt-20">
            <div>
                 <h1 className="text-center text-xl"><i className="fa fa-laptop-code"></i>Laptops</h1>
            </div>
            <div className="flex space-x-1 space-y-1 flex-wrap">
                <LaptopCard/>
            </div>
        </div>
        </section>  
        
         <section>
        <div className=" ">
            <div>
                 <h1 className="text-center text-xl"><i className="fa fa-child"></i>Cloths</h1>
            </div>
            <div className="flex space-x-1 space-y-1 flex-wrap">
                <ClothCard/>
            </div>
        </div>
        </section>
        
           <section>
        <div className=" ">
            <div>
                 <h1 className="text-center text-xl"><i className="fa fa-shoe-prints"></i>Shoes</h1>
            </div>
            <div className="flex space-x-1 space-y-1 flex-wrap">
                <ShoesCard/>
            </div>
        </div>
        </section>  
        
         <section>
        <div className=" ">
            <div>
                 <h1 className="text-center text-xl"><i className="fa fa-user-secret"></i>Caps</h1>
            </div>
            <div className="flex space-x-1 space-y-1 flex-wrap">
               <CapCard/>
            </div>
        </div>
        </section>  
        
         <section>
        <div className=" ">
            <div>
                 <h1 className="text-center text-xl"><i className="fa fa-stopwatch"></i>Watchs</h1>
            </div>
            <div className="flex space-x-1 space-y-1 flex-wrap">
               <WatchCard/>
            </div>
        </div>
        </section>

    </section>
  )
}

export default ItemSection