
import { popularFood } from '../Data.tsx'

export const Pouplar = () => {
  return (
    <>
      <div className="section" id="recipe">
        <div className="flex flex-col items-center">
          <div className="text-3xl text-center font-bold mb-16">
            Popular Food!
          </div>
          <div className="">
            {popularFood.map((food) => {
              return (
                <div className="p-4 shadow-lg hover:shadow" key={food.id}>
                  <img src={food.image} alt="" />
                  <div className="flex items-center gap-3">
                    <button>-</button>
                    <span className="text-[0.85rem]">2</span>
                    <button>+</button>
                  </div>
                  <p className="text-[0.85rem]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Omnis nobis tenetur aperiam officiis nostrum voluptatem quae
                    asperiores consectetur in accusantium a maxime aliquam sint,
                    eos necessitatibus culpa ad. Eaque, voluptas.
                  </p>
                  <div className="">
                    <span> {food.price}</span>
                    <span className='btn cursor-pointer p-3'>Add to cart</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
