import Header from './components/Header'
import Home from './components/Home'
import NavIcon from './components/NavIcon'

import About from './components/About'
import { Popular } from './components/Popular'
// import { Recipe } from './components/Recipe'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='font-poppings bg-back'>
        <Header/>
        <NavIcon/>
        <Home/>
        <About/>
        <Popular/>
        <Contact/>
        <Footer/>
        
      </div>
    </>
  )
}

export default App
