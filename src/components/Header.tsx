import { useEffect, useState } from 'react'
import hero from '../assets/pokpok.jpeg'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Header = () => {
  const[scroll,setScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      setScroll(window.screenY > 20)
    })
  },[])
  return (
    <div className={`${scroll ? "bg-back shadow-sm" : ""}fixed top-0 left-0 w-full z-20`}>
      <nav className='relative container mx-auto flex items-center justify-between py-4 px-2'> 
      <img src={hero} alt="hero-i" className='h-12 w-12 rounded-3xl'/>
        <div>
       
          <h4 className="text-xl font-semibold">PokPok</h4>
          <span className='text-[0.95rem] font-bold opacity-70'>Resturant & Bar</span>
        </div>
        <div className='cursor-pointer flex items-center justify-center w-10 h-12 bg-black rounded-t-xl rounded-br-3xl relative'>
          <AiOutlineShoppingCart className='text-white text-xl'/>
          <div className="absolue bg-red-500 text-[0.65rem] w-4 h-4 right-1 top-2 flex items-center justify-center rounded-full">2
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header