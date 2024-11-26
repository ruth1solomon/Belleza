/*import { motion } from "motion/react";
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

export default Home*/
import { useState, useEffect } from "react";
import "animate.css";
import Aboutpage from './Aboutpage';
import Contact from './Contact';
import Services from './Services';

const Home = () => {
  const slides = [
    {
      text: "Welcome to Belleza Makeup -Where Beauty Meets Artistry.",
      image: "/src/Components/Images/img1r.png",
    },
    {
      text: "Discover your beauty with Us. Where every face tells a story.",
      image: "/src/Components/Images/blush1.jpg",
    },
    {
      text: "Join us to redefine elegance and style!",
      image: "/src/Components/Images/blush7.jpeg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(true);

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false); // Remove animation class before changing the slide
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setAnimate(true); // Reapply animation class after changing the slide
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setAnimate(true);
    }, 500);
  };

  const prevSlide = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setAnimate(true);
    }, 500);
  };

  return (
    <div>
    <div className="bg-black text-pink-200 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Header */}
      <header className="w-full  text-3xl  pb-5 font-thin tracking-tight text-center lg:mt-5 lg:text-6xl animate__animated animate__fadeIn">
        Belleza Makeup
      </header>

      {/* Carousel */}
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl px-4 mt-6 space-y-6 md:space-y-0">
        {/* Text Section */}
        <div
          className={`md:w-1/2 text-left animate__animated ${
            animate ? "animate__slideInLeft" : ""
          }`}
        >
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">
            {slides[currentSlide].text}
          </h2>
          
          
        </div>

        {/* Image Section */}
        <div
          className={`md:w-1/2 animate__animated ${
            animate ? "animate__slideInRight" : ""
          }`}
        >
          <img
            src={slides[currentSlide].image}
            alt="Makeup Slide"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Controls */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <button
          className="bg-pink-500 text-black py-2 px-4 rounded hover:bg-pink-600 transition text-xl"
          onClick={prevSlide}
        >
          &lt;
        </button>
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <button
          className="bg-pink-500 text-black py-2 px-4 rounded hover:bg-pink-600 transition text-xl"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
     
    </div>
    <div className="bg-black bg-cover">
      <Aboutpage/>
      <Services/>
      <Contact/>
      </div>
</div>
  );
};

export default Home;



