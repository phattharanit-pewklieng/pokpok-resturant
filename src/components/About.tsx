
import { FaArrowRight } from 'react-icons/fa'
import crispy from '../assets/cripy-pork.jpeg'
import chef from '../assets/chef.avif'

const About = () => {
  return (
    <>
      <div className="section" id="about">
        <div className="grid md:grid-cols-2 items-center mb-10">
          <div className="flex flex-col justify-center items-start gap-6">
            <div className="sm:text-3xl text-8xl font-bold mb-6">
              Best food in town awaits you!!!
            </div>
            <p className="text-sm opacity-70">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio,
              temporibus delectus. Quo explicabo blanditiis a voluptatum qui
              aliquid voluptatibus facilis debitis expedita libero, laboriosam
              perferendis, animi modi quisquam vel nihil.
            </p>
            <div className="btn">
              <a href="#" className="text-white text-[0.85rem]">
                Explore more
              </a>
              <FaArrowRight className='text-white'/>
            </div>
          </div>
          <div className="md:row-start-1">
            <img src={crispy} alt="cripy-pork" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className='sm:text-3xl text-xl font-bold mb-6'>
              Our team of registered nurses and skilled healthcare professionals provide in-home nursing.
            </div>
            <p className='text-sm opacity-70'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, quo. Aliquid quisquam qui magnam beatae! Quisquam sequi est omnis neque quibusdam facere nisi sit quas! Et autem tempora ducimus alias.
            </p>
          </div>
          <div>
            <img src={chef} alt="chef" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
