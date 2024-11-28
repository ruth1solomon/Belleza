/*import {Link} from "react-router-dom";
import { useState } from "react";
import {FaTimes} from "react-icons/fa";
import {MdMenu} from "react-icons/md";
import Logo from "./logo";

function Navbar() {
  const [click ,setClick]=useState(false) ;
  const handleClick = () => {
    setClick(!click);
  }
  const content =<>
  <div className="absolute left-0 right-0 block w-full text-deep-chocolate  transition bg-white-chocolate lg:hidden top-16">
      <ul className="p-20 text-center">
      
      <Link to='/' ><li className="py-4 my-4 border-b border-slate-800 hover:text-deep-chocolate  hover:rounded">Home</li></Link>
      <Link to='/about' ><li className="py-4 my-4 border-b border-slate-800 hover:text-deep-chocolate  hover:rounded">About</li></Link>
      <Link  to='/services' ><li className="py-4 my-4 border-b border-slate-800 hover:text-deep-chocolate  hover:rounded">Services</li></Link>
      <Link  to='/contact' ><li className="py-4 my-4 border-b border-slate-800 hover:text-deep-chocolate  hover:rounded">Contact</li></Link>
      <Link  to='/gallery' ><li className="py-4 my-4 border-b border-slate-800 hover:text-deep-chocolate  hover:rounded">Gallery</li></Link>
      
      </ul>
</div>
  </>
  return (
  
    <nav>
      <div className="z-50 flex justify-between px-20 py-4 text-deep-chocolate  h-10vh lg:py-5">
        <div className="flex items-center flex-1">
          <Logo/>
        </div>
        <div className="items-center justify-end hidden font-normal lg:flex md:flex lg:flex-1">
        <div className="flex-10">
      <ul className="flex gap-8 mr-16 text-center">
      
      <Link to='/' ><li className="py-4 my-4 transition border-b-2 cursor-pointer border-slate-800 hover:text-fuchsia-400 hover:border-fuchsia-400 ">Home</li></Link>
      <Link to='/about' ><li className="py-4 my-4 border-b cursor-pointer border-slate-800 hover:text-fuchsia-400 hover:border-fuchsia-400">About</li></Link>
      <Link  to='/services' ><li className="py-4 my-4 border-b cursor-pointer border-slate-800 hover:text-fuchsia-400 hover:border-fuchsia-400">Services</li></Link>
      <Link  to='/contact' ><li className="py-4 my-4 border-b cursor-pointer border-slate-800 hover:text-fuchsia-400 hover:border-fuchsia-400">Contact</li></Link>
      <Link  to='/gallery' ><li className="py-4 my-4 border-b border-slate-800 hover:text-fuchsia-400 hover:border-fuchsia-400 hover:rounded">Gallery</li></Link>
      </ul>
</div>
        </div>
     
      


      <div>
        {click && content}
      </div>
      <button className="block text-2xl transition sm:hidden" onClick={handleClick}>
        {click ? <FaTimes/> : <MdMenu/> }
      </button>
      </div>
    </nav>
  )
}



export default Navbar
*/import { Link } from "react-router-dom";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import Logo from "./logo";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className="absolute left-0 right-0 block w-full text-deep-chocolate bg-white-chocolate lg:hidden top-16 z-50">
      <ul className="p-20 text-center">
        <Link to="/">
          <li className="py-4 my-4 border-b border-slate-800  hover:text-burgendy hover:border-burgendy hover:rounded">
            Home
          </li>
        </Link>
        <Link to="/about">
          <li className="py-4 my-4 border-b border-slate-800  hover:text-burgendy hover:border-burgendy hover:rounded">
            About
          </li>
        </Link>
        <Link to="/services">
          <li className="py-4 my-4 border-b border-slate-800  hover:text-burgendy hover:border-burgendy hover:rounded">
            Services
          </li>
        </Link>
        <Link to="/contact">
          <li className="py-4 my-4 border-b border-slate-800  hover:text-burgendy hover:border-burgendy hover:rounded">
            Contact
          </li>
        </Link>
        <Link to="/gallery">
          <li className="py-4 my-4 border-b border-slate-800  hover:text-burgendy hover:border-burgendy hover:rounded">
            Gallery
          </li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav>
      <div className="z-50 flex justify-between px-20 py-4 text-deep-chocolate h-10vh lg:py-5">
        <div className="flex items-center flex-1">
          <Logo />
        </div>
        <div className="items-center justify-end hidden font-normal lg:flex md:flex lg:flex-1">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-center">
              <Link to="/">
                <li className="py-4 my-4 transition border-b-2 cursor-pointer  border-slate-800 hover:text-burgendy hover:border-burgendy">
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li className="py-4 my-4 border-b cursor-pointer border-slate-800 hover:text-burgendy hover:border-burgendy">
                  About
                </li>
              </Link>
              <Link to="/services">
                <li className="py-4 my-4 border-b cursor-pointer border-slate-800  hover:text-burgendy hover:border-burgendy">
                  Services
                </li>
              </Link>
              <Link to="/contact">
                <li className="py-4 my-4 border-b cursor-pointer border-slate-800  hover:text-burgendy hover:border-burgendy">
                  Contact
                </li>
              </Link>
              <Link to="/gallery">
                <li className="py-4 my-4 border-b border-slate-800  hover:text-burgendy hover:border-burgendy hover:rounded">
                  Gallery
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="block text-2xl transition sm:hidden" onClick={handleClick}>
          {click ? <FaTimes /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile Menu Content (Displayed if 'click' is true) */}
      {click && content}
    </nav>
  );
}

export default Navbar;



