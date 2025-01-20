import React, { useState} from "react";
import Logo from '../assets/logo.png'
import Hero from '../assets/Hero.png'
import Info from '../assets/info.png'
import { MdSmartToy } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdGrading } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";
import { GrUploadOption } from "react-icons/gr";
import { MdOutlineSmartToy } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { FaCheckSquare } from "react-icons/fa";
import { BiSolidTimeFive } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LiaInstagram } from "react-icons/lia";
import { MdOutlineFacebook } from "react-icons/md";
import { AiOutlineCopyright } from "react-icons/ai";



function LandingPage() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        {/* Navigational Bar */}
        <nav className="flex items-center justify-between flex-wrap p-6 md:mx-14">
     <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72">
       <img src={Logo} className="w-100 h-100 mr-2" alt="Logo" />
       <span className="font-lexend text-blue1000-0">MARKER AI</span>
     </div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
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
         <button className="font-lexend text-blue1000-0 inline-flex items-center bg-amber-500 py-2 px-6 mx-2 border-2 rounded-2xl">
           Sign In
         </button>
         <button className="text-white-0 font-lexend inline-flex items-center bg-blue1000-0 py-2 px-6 rounded-2xl">
           Get Started
         </button>
       </div>
     </div>
   </nav>       

        {/* Hero Section */}
        <div className="hidden sm:block md:flex my-28">
           <div className="mx-28">
                <h1 className="text-grad-0 font-lexend font-normal my-5 text-6xl">Grade Assessments Faster with AI.</h1>
                <p className="text-grad-0 font-lexend font-normal my-7 text-base">Transform your grading process with our AI-powered assessment tool. Save time, maintain consistency, and focus more on teaching.</p>
                <button className="text-white-0 font-lexend inline-flex items-center bg-blue1000-0 py-2 px-8 rounded-2xl">
                    Get Started
                </button>
                <button className="font-lexend text-blue1000-0 inline-flex items-center bg-amber-500 py-2 px-10 mx-2 border-2 rounded-2xl">
                    Sign In
                </button>
                
            </div>
                
            <div className="mx-16">
                <img src={Hero} width={750} alt="" />
            </div> 
        </div>

        <div className="block mt-10 mb-20 md:hidden">
            <div className="mx-16">
                <img src={Hero} width={750} alt="" />
            </div>
           <div className="mx-16">
                <h1 className="text-grad-0 font-lexend font-normal my-5 text-4xl">Grade Assessments Faster with AI.</h1>
                <p className="text-grad-0 font-lexend font-normal my-7 text-base">Transform your grading process with our AI-powered assessment tool. Save time, maintain consistency, and focus more on teaching.</p>
                <button className="text-white-0 font-lexend inline-flex items-center bg-blue1000-0 py-2 px-8 rounded-2xl">
                    Get Started
                </button>
                <button className="font-lexend text-blue1000-0 inline-flex items-center bg-amber-500 py-2 px-10 mx-2 border-2 rounded-2xl">
                    Sign In
                </button>
                
            </div> 
        </div>


            {/* Features */}
        <div className="text-center">
            <div>
                <button className="font-lexend text-feat-0 inline-flex items-center bg-amber-500 py-2 px-8 mx-2 border-2 text-1xl rounded-3xl">Features</button>
                <h3 className="text-grad-0 font-lexend md:text-3xl text-2xl py-3">What makes Marker-AI useful?</h3>
            </div>
            <div className="md:flex flex-row mt-7">
                <div className="basis-1/3 mb-6">
                    <MdSmartToy className="block mx-auto rounded-full text-5xl text-white-0 p-3 bg-purple-0" />
                    <p className="text-grad-0 font-medium my-3 text-lg">Smart Recognition</p>
                    <p className="text-grad-0 text-xs">Advanced AI technology accurately<br /> recognizes and processes handwritten<br /> assessments</p>
                    <FaArrowRightLong className="block mx-auto mt-7 text-grad-0" />
                </div>
                <div className="basis-1/3 mb-6">
                    <MdGrading  className="block mx-auto rounded-full text-5xl text-white-0 p-3 bg-purple-0" />
                    <p className="text-grad-0 font-medium my-3 text-lg">Custom Marking Schemes</p>
                    <p className="text-grad-0 text-xs">Upload and customize your marking<br /> criteria for consistent grading across all<br /> assessments.</p>
                    <FaArrowRightLong className="block mx-auto mt-7 text-grad-0" />

                </div>
                <div className="basis-1/3">
                    <IoAnalytics className="block mx-auto rounded-full text-5xl text-white-0 p-3 bg-purple-0" />
                    <p className="text-grad-0 font-medium my-3 text-lg">Analytics Dashboard</p>
                    <p className="text-grad-0 text-xs">Get detailed insights into student<br /> performance and grading patterns.</p>
                    <FaArrowRightLong className="block mx-auto mt-7 text-grad-0" />
                </div>
            </div>
            <button className="text-white-0 font-lexend text-sm inline-flex items-center bg-blue1000-0 py-2 px-8 rounded-2xl my-11">Explore all features</button>
        </div>


            {/* How It Works */}

        <div className="text-center mt-20">
            <div>
                <button className="font-lexend text-feat-0 inline-flex items-center bg-amber-500 py-2 px-8 mx-2 border-2 text-1xl rounded-3xl">How it works</button>
                <h3 className="text-grad-0 font-lexend md:text-3xl text-2xl py-3">Marker-AI is easy to use</h3>
            </div>
            <div className="flex flex-row mt-7">
                <div className="md:basis-1/4 basis1/2 mb-6">
                    <GrUploadOption className="block mx-auto rounded-full text-5xl text-purple-0 p-3 bg-blue200-0" />
                    <p className="text-grad-0 font-medium my-3 text-lg">Upload</p>
                    <p className="text-grad-0 text-xs">Scan and upload handwritten<br /> assessments.</p>
                </div>
                <div className="md:basis-1/4 basis-1/2 mb-6">
                    <MdGrading  className="block mx-auto rounded-full text-5xl text-purple-0 p-3 bg-blue200-0" />
                    <p className="text-grad-0 font-medium my-3 text-lg">Set Criteria</p>
                    <p className="text-grad-0 text-xs">Define your marking scheme</p>

                </div>
                <div className="md:basis-1/4 basis-1/2 mb-6">
                    <MdOutlineSmartToy className="block mx-auto rounded-full text-5xl text-purple-0 p-3 bg-blue200-0" />
                    <p className="text-grad-0 font-medium my-3 text-lg">Grading</p>
                    <p className="text-grad-0 text-xs">Let AI grade the assessments.</p>
                </div>
                <div className="md:basis-1/4 basis-1/2 mb-6">
                    <MdOutlineRateReview className="block mx-auto rounded-full text-5xl text-purple-0 p-3 bg-blue200-0" />
                    <p className="text-grad-0 font-medium my-3 text-lg">Review</p>
                    <p className="text-grad-0 text-xs">Review and finalize grades.</p>
                </div>
            </div>
        </div>



            {/* Benefits */}
        <div className="mt-20">
            <div className="text-center">
                <button className="font-lexend text-feat-0 inline-flex items-center bg-amber-500 py-2 px-8 mx-2 border-2 text-1xl rounded-3xl">Benefits</button>
                <h3 className="text-grad-0 font-lexend text-3xl py-3">Why choose Marker-AI?</h3>
            </div>
            <div className="flex flex-row mt-7 pl-32">
                <div className="basis-1/3">
                    <BiSolidTimeFive className="rounded-full text-5xl text-white-0 p-3 bg-purple-0" />
                    <p className="text-grad-0 font-medium my-3 text-lg">Ease, efficiency and time-saving</p>
                    <p className="text-grad-0 text-xs">Marker-AI takes the some workload<br /> off you and frees you up to focus in.</p>
                </div>
                <div className="basis-1/3">
                    <FaCheckSquare  className="rounded-full text-5xl text-white-0 p-3 bg-purple-0" />
                    <p className="text-grad-0 font-medium my-3 text-lg">Accuracy and fairness</p>
                    <p className="text-grad-0 text-xs">Ensures fair and accurate grading<br /> by removing human bias and error.</p>

                </div>
                <div className="basis-1/3">
                    <VscFeedback className="rounded-full text-5xl text-white-0 p-3 bg-purple-0" />
                    <p className="text-grad-0 font-medium my-3 text-lg">Insights and feedback</p>
                    <p className="text-grad-0 text-xs">Receive insights and feedback on<br /> each test you can share with your student.</p>
                </div>
            </div>
        </div>




            {/* Pricing */}

            <div className="mt-20">
            <div className="text-center mb-20">
                <button className="font-lexend text-feat-0 inline-flex items-center bg-amber-500 py-2 px-8 mx-2 border-2 border-t-white-0 text-1xl rounded-3xl">Pricing</button>
                <h3 className="text-grad-0 font-lexend text-3xl py-3">Choose the right plan for you</h3>
            </div>
            <div className="flex flex-row mt-7">
                <div className="basis-1/5 text-center">
                    
                    

                </div>
                <div className="basis-1/5">
                    <div className="bg-gray-0 py-0.5 text-center">
                        <p className="text-grad-0 font-medium my-3 text-2xl font-lexend">Basic</p>
                        <p className="text-grad-0 text-sm font-lexend mb-8"><span className="font-bold">₦5,000</span> /month</p>
                    </div>
                    <div className="leading-8 mt-2">
                        <span className="inline-flex"><FaCheck className="block mx-auto pr-1 mt-2 text-lg text-arr-0" /> Consequat ex proident.</span><br />
                        <span className="inline-flex"><FaCheck className="block mx-auto mt-2 pr-1 text-lg text-arr-0" /> Deserunt sit cupidatat.</span><br />
                        <span className="inline-flex"><FaCheck className="block mx-auto mt-2 pr-1 text-lg text-arr-0" /> Amet id ea et nisi cillum.</span>
                    </div>
                    <div className="text-center">
                    <button className="font-lexend text-blue1000-0 inline-flex items-center bg-amber-500 py-2 px-8 mx-2 mt-8 border-2 rounded-2xl">
                    Get Started
                </button>
                    </div>
                </div>
                <div className="basis-1/5 relative">
                    <div className="absolute -top-16">
                    <div className="bg-purple-0 text-center py-3 px-20 rounded-t-xl">
                        <p className="text-white-0 font-lexend">Recommended</p>
                    </div>
                    <div className="bg-gray-0 py-0.5 text-center">
                        <p className="text-grad-0 font-medium my-3 text-2xl font-lexend">Pro</p>
                        <p className="text-grad-0 text-sm font-lexend mb-8"><span className="font-bold">₦15,000</span> /month</p>
                    </div>
                    <div className="leading-8 mt-2">
                        <span className="inline-flex"><FaCheck className="block mx-auto pr-1 mt-2 text-lg text-arr-0" /> Consequat ex proident.</span><br />
                        <span className="inline-flex"><FaCheck className="block mx-auto mt-2 pr-1 text-lg text-arr-0" /> Deserunt sit cupidatat.</span><br />
                        <span className="inline-flex"><FaCheck className="block mx-auto mt-2 pr-1 text-lg text-arr-0" /> Amet id ea et nisi cillum.</span>
                        <span className="inline-flex"><FaCheck className="block mx-auto mt-2 pr-1 text-lg text-arr-0" /> Excepteur nisi eiusmod proident.</span>
                        <span className="inline-flex"><FaCheck className="block mx-auto mt-2 pr-1 text-lg text-arr-0" /> Magna eu anim commodo qui nisif.</span>
                    </div>
                    <div className="text-center">
                    <button className="font-lexend text-white-0 inline-flex items-center bg-purple-0 py-2 px-8 mx-2 mt-8 border-2 rounded-2xl">
                    Get Started
                </button>
                    </div>
                    </div>
                </div>
                <div className="basis-1/5">
                    <div className="bg-gray-0 py-0.5 text-center">
                        <p className="text-grad-0 font-medium my-3 text-2xl font-lexend">Premium</p>
                        <p className="text-grad-0 text-sm font-lexend mb-8"><span className="font-bold">₦30,000</span> /month</p>
                    </div>
                    <div className="leading-8 mt-2">
                        <span className="inline-flex"><FaCheck className="block mx-auto pr-1 mt-2 text-lg text-arr-0" /> Consequat ex proident.</span><br />
                        <span className="inline-flex"><FaCheck className="block mx-auto mt-2 pr-1 text-lg text-arr-0" /> Deserunt sit cupidatat.</span><br />
                        <span className="inline-flex"><FaCheck className="block mx-auto mt-2 pr-1 text-lg text-arr-0" /> Amet id ea et nisi cillum.</span>
                    </div>
                    <div className="text-center">
                    <button className="font-lexend text-blue1000-0 inline-flex items-center bg-amber-500 py-2 px-8 mx-2 mt-8 border-2 rounded-2xl">
                    Get Started
                </button>
                    </div>
                </div>
                <div className="basis-1/5">
                    
                </div>
            </div>


                {/* Get In Touch */}
                <div>
                    <div className="text-center mt-40">
                        <button className="font-lexend text-feat-0 inline-flex items-center bg-amber-500 py-2 px-8 mx-2 border-2 border-t-white-0 text-1xl rounded-3xl">Get in touch</button>
                          <h3 className="text-grad-0 font-lexend text-3xl py-3">Do you need more information?</h3>
                    </div>
                    <div className="md:flex bg-gray-0 mx-20 rounded-xl">
                        <div className="">
                            <img src={Info} width={500} alt="" className="rounded-l-lg" />
                        </div>
                        <div className="mx-28 pt-16">
                            <form>
                                <div class="space-y-12">
                                    <div class="border-gray-900/10">
                                        <h2 class="text-base/7 font-lexend text-center font-medium text-gray-900">Send us a message</h2>

                                        <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            <div class="sm:col-span-3">
                                                <div class="mt-2">
                                                    <input placeholder="Full Name" type="text" name="full-name" id="full-name" autocomplete="given-name" className="block w-full rounded-md font-lexend bg-gray-0 px-3 py-1.5 text-base text-tert-0 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                </div>
                                            </div>

                                            <div class="sm:col-span-3">
                                                <div class="mt-2">
                                                    <input placeholder="Email Address" type="text" name="email-address" id="email-address" autocomplete="email" className="block w-full rounded-md bg-gray-0 font-lexend px-3 py-1.5 text-base text-tert-0 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                                </div>
                                            </div>

                                            <div class="mt-2 col-span-full">
                                                    <textarea placeholder="Type your message here" name="about" id="about" rows="4" className="block w-full rounded-md bg-gray-0 px-3 py-1.5 text-base text-tert-0 font-lexend outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-6 text-center gap-x-6">
                                    <button type="submit" className="font-lexend rounded-md bg-blue1000-0 text-white-0 px-14 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>



                {/* Footer */}

                <div className="bg-blue1000-0 mt-32 py-7 px-20">
                    <div className="flex flex-row">
                        <div className="basis-1/2">
                            <img src={Logo} alt="" className="" />
                            <p className="font-istock text-white-0">MARKER-AI</p>
                            <p className="font-istock flex text-xs text-white-0"><GoDash className="mt-0.5" /> AI FOR EDUCATORS<GoDash className="mt-0.5" /></p>
                            <p className="font-istock flex text-xs mt-5 text-white-0"><AiOutlineCopyright className="mt-0.5" /> 2025. Marker-AI. All Rights Reserved.</p>
                        </div>
                        <div className="flex basis-1/2 ml-auto text-white-0 font-lexend font-extralight text-xs">
                            <div>
                                <span className="font-bold">Product</span><br /><br />
                                <span>Features</span><br />
                                <span>How it works</span><br />
                                <span>Pricing</span><br />
                                <span>Testimonials</span>
                            </div>
                            <div className="mx-20">
                                <p>Contact Us</p><br />
                                <span className="inline-flex"><CiMail className="mt-1 mr-3" /> admin@markerai.org</span><br />
                                <span className="inline-flex"><FaWhatsapp className="mt-1 mr-3" /> +234 706 856 6789</span>
                            </div>
                            <div>
                                <p>Follow Us</p><br />
                                <div className="flex">
                                    <FaXTwitter className="mr-3" /> <LiaInstagram className="mr-3" /> <MdOutlineFacebook className="mr-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="text-white-0 my-8" />
                    <div className="flex flex-row">
                        <div className="basis-1/2">
                            <p className="text-white-0 font-lexend font-extralight">Subscribe to our Newsletter</p>
                        </div>
                        <div className="items-center justify-center min-h-screen bg-gray-100 basis-1/2">
                            <div className="relative w-full max-w-sm">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="w-full px-4 py-4 pr-12 text-sm border-white-0 border-2 rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-1000-0 bg-blue1000-0"
                                />
                                <button
                                    type="button"
                                    className="absolute top-3 right-0 px-4 py-2 mr-2 text-sm font-medium text-blue1000-0 bg-white-0 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
        
        </>
    )
}


export default LandingPage