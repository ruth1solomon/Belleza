import img from '/src/Components/Images/img2.jpg';

function Aboutpage() {
  return (
    <div className='border-b border-neutral-900 pb-4 text-pink-200'>
        <h1 className='my-5 font-thin tracking-tight text-center  lg:text-4xl '>About Us</h1>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center"> 
            <img className='rounded-2xl' src={img} width={300} height={300} alt="Lady Pic" />
          </div>
          </div>
          <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className='my-2 max-w-xl py-6 mt-16'> We are passionate about inclusivity and diversity. Our carefully curated collection is designed to meet the needs of every makeup enthusiast, from beginners to professionals. Whether you’re looking for a natural everyday look or a bold statement, we have the perfect products to help you achieve your desired style.

We are committed to using only the finest ingredients that are safe for your skin and the environment. Our products are ethically sourced, and we take pride in being a brand that is both eco-conscious and socially responsible.
We believe that makeup is more than just a routine; it’s a form of self-expression and an art that empowers individuals to feel their best. Our mission is to provide high-quality, innovative, and cruelty-free makeup products that cater to all skin tones and types, helping you to celebrate your unique beauty every day.</p>
          </div>
          </div>


         
        </div>
        
        
        
        
        
        </div>
  )
}

export default Aboutpage