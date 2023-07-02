import { BiMap } from 'react-icons/bi'
import { CiBurger } from 'react-icons/ci'
import { GiBowlOfRice, GiCakeSlice } from 'react-icons/gi'
import { FaIceCream } from 'react-icons/fa'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'
import { AiFillHome } from 'react-icons/ai'
import { MdExplore, MdContactPage } from 'react-icons/md'

import recipe1 from './assets/cripy-pork.jpeg'
import recipe2 from './assets/cripy-pork.jpeg'
import recipe3 from './assets/cripy-pork.jpeg'
import recipe4 from './assets/cripy-pork.jpeg'
import recipe5 from './assets/cripy-pork.jpeg'
import recipe6 from './assets/cripy-pork.jpeg'

import payment1 from '/visa.png'
import payment2 from '/secure-payment.png'
import payment3 from '/mobile-pay.png'
import payment4 from '/money.png'

export const heroIcons = [
  <CiBurger />,
  <FaIceCream />,
  <GiCakeSlice />,
  <GiBowlOfRice />,
]

export const popularFood = [
  {
    id: 1,
    image: recipe1,
    name: 'Recipe Name',
    price: '$20',
  },
  {
    id: 2,
    image: recipe2,
    name: 'Recipe Name',
    price: '$13',
  },
  {
    id: 3,
    image: recipe3,
    name: 'Recipe Name',
    price: '$17',
  },
  {
    id: 4,
    image: recipe4,
    name: 'Recipe Name',
    price: '$22',
  },
  {
    id: 5,
    image: recipe5,
    name: 'Recipe Name',
    price: '$14',
  },
  {
    id: 6,
    image: recipe6,
    name: 'Recipe Name',
    price: '$20',
  },
]

export const footerSocials = [
  { id: 1, icon: <BsFacebook />, url: 'https://www.facebook.com/PokPoknz' },
  {
    id: 2,
    icon: <BsInstagram />,
    url: 'https://www.instagram.com/pokpok_nz/?hl=en',
  },
]

export const footerContacts = [
  {
    id: 1,
    icon: <HiOutlinePhone />,
    text: '09 963 9987',
  },
  {
    id: 2,
    icon: <HiOutlineMail />,
    text: 'pokpokthai@gmail.com',
  },
  {
    id: 3,
    icon: <BiMap />,
    text: '261 Karangahape Road, Auckland CBD, Auckland 1010',
  },
]

export const mainMenu = [
  {
    id: 1,
    href: 'home',
    text: 'Home',
    icon: <AiFillHome />,
  },
  {
    id: 2,
    href: 'about',
    text: 'About',
    icon: <MdExplore />,
  },
  {
    id: 3,
    href: 'recipe',
    text: 'Recipe',
    icon: <GiBowlOfRice />,
  },
  {
    id: 4,
    href: 'contact',
    text: 'Contact',
    icon: <MdContactPage />,
  },
]

export const explores = ['Drinks', 'Burger', 'Salad', 'Breakfast', 'Dinner']

export const payements = [payment1, payment2, payment3, payment4]
