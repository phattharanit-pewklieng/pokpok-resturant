import { popularFood } from '../Data.tsx'
import { useState } from 'react';

export const Popular = () => {
  const [cartItems, setCartItems] = useState(popularFood.map(food => ({ ...food, quantity: 0 })));

  const handleDecrease = (foodId: number) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item => {
        if (item.id === foodId && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return updatedItems;
    });
  };

  const handleIncrease = (foodId: number) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item => {
        if (item.id === foodId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return updatedItems;
    });
  };

  return (
    <>
      <div className="section" id="recipe">
        <div className="flex flex-col items-center">
          <div className="text-3xl text-center font-bold mb-16">
            Popular Food!
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
            {cartItems.map((food) => {
              return (
                <div className="p-4 shadow-lg hover:shadow transition-all duration-300 cursor-pointer" key={food.id}>
                  <img src={food.image} alt="" className='rounded-lg mb-4' />
                  <div className='md:text-xl text-[1rem] font-semibold'>{food.name}</div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleDecrease(food.id)}>-</button>
                    <span className="text-[0.85rem]">{food.quantity}</span>
                    <button onClick={() => handleIncrease(food.id)}>+</button>
                  </div>
                  <p className="text-[0.85rem] opacity-70 mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Omnis nobis tenetur aperiam officiis nostrum voluptatem quae
                    asperiores consectetur in accusantium a maxime aliquam sint,
                    eos necessitatibus culpa ad. Eaque, voluptas.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className='text-xl font-semibold'> {food.price}</span>
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
