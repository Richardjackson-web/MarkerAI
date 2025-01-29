import React, { useState} from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


function Navbar(){

            const [isOpen, setIsOpen] = useState(false);
        

    return(

        <>

            {/* Navigational Bar */}
                    <nav className="flex items-center justify-between flex-wrap p-6 md:mx-14">
                 <div className="text-white mr-6 lg:mr-72">
                   <Link className="flex items-center flex-shrink-0" to="/"><img src={Logo} width={50} className="w-120 h-100 mr-2" alt="Logo" />
                   <span className="hidden md:block font-lexend text-blue1000-0">MARKER AI</span></Link>
                 </div>
                 <div className="block lg:hidden">
                   <button
                     onClick={() => setIsOpen(!isOpen)}
                     className="flex items-center px-3 py-2 rounded text-blue1000-0 hover:text-blue1000-0"
                   >
                     <svg
                       className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
                       viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                     </svg>
                     <svg
                       className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
                       viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg"
                     >
                       <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                     </svg>
                   </button>
                 </div>
                 <div
                   className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
                 >
                   <div className="text-blue1000-0 lg:flex-grow">
                     <a href="#" className="block font-istock mt-4 lg:inline-block lg:mt-0 mr-4">
                       Features
                     </a>
                     <a href="#" className="block font-istock mt-4 lg:inline-block lg:mt-0 mr-4">
                       How It Works
                     </a>
                     <a href="#" className="block font-istock mt-4 lg:inline-block lg:mt-0 mr-4">
                       Pricing
                     </a>
                   </div>
                   <div>
                   <Link to="/signin"> <button className="font-lexend text-blue1000-0 inline-flex items-center bg-amber-500 py-2 px-6 mx-2 border-2 rounded-2xl">
                       Sign In
                     </button>
                     </Link>
                     <Link to="/signup"><button className="text-white-0 font-lexend inline-flex items-center bg-blue1000-0 py-2 px-6 rounded-2xl">
                       Get Started
                     </button>
                     </Link>
                   </div>
                 </div>
               </nav>
        </>
    )
}


export default Navbar