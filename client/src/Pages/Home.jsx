import { motion } from "motion/react";
import Aboutpage from './Aboutpage';
import Contact from './Contact';
import Services from './Services';
import image from '/src/Components/Images/img1r.png';
import blush from '/src/Components/Images/blush1.jpg';
function Home() {
  return (
    <div className='pb-4 text-pink-200 bg-black border-b border-neutral-900 lg:mb-35  bg-cover ' >
      <div className='flex flex-wrap border-b border-neutral-900'>
        <div className='w-full lg:w-1/2 '>
        <div className='flex flex-col items-center mx-10 lg:items-start'>
          <motion.h1 animate={{ x: 50 }} whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')} className='pb-5 font-thin tracking-tight text-center lg:mt-16 lg:text-6xl'>Belleza Beauty</motion.h1>
          <motion.span animate={{ x: 50 }} whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')} className=' text-4xl tracking-tight text-transparent bg-gradient-to-r from-pink-700 via-fuchsia-400 to-slate-300 bg-clip-text'> Beauty World</motion.span>
          <p className='max-w-xl  my-2 font-light '>Welcome to Belleza Makeup -Where Beauty Meets Artistry.At Belleza Makeup, we believe that makeup is more than just a routine; it's a form of self-expression, an art that enhances your unique features, and a way to boost your confidence every day. Our passion is to provide you with the highest quality makeup products that cater to every skin tone, type, and personal style.
            </p>

            <p className='max-w-xl mx-19 font-normal '>Discover your beauty with Us. Where every face tells a story.</p>
          

        </div>
        </div>
        <div className='w-full lg:p-8 lg:w-1/2 '>
        <div className='flex justify-center'>
        <motion.img animate={{ x: -100 }} className='rounded-2xl border-collapse  border-none' src={image} width={400} height={400} alt="Photo" />
       </div>
        </div>
      </div>
      <div className="bg-black bg-cover">
      <Aboutpage/>
      <Services/>
      <Contact/>
      </div>
    </div>
  )
}

export default Home