import React, { useState } from "react";
import Logo from '../assets/logo.png'
import Hero from '../assets/Hero.png'
import Info from '../assets/info.png';
import WorksCarousel from "../Component/WorksCarousel";
import BenefitCarousel from "../Component/BenefitCarousel";
import { Link } from 'react-router-dom';
// import { ChevronLeft, ChevronRight } from "lucide-react";
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

    const [currentIndex, setCurrentIndex] = useState(0);
  

  const totalSlides = 4; // We have 3 static slides

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    e.currentTarget.touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchStartX = e.currentTarget.touchStartX;
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    } else if (touchEndX - touchStartX > 50) {
      prevSlide();
    }
  };

    return (
        <>  
        
        <div className="">
            {/* Hero Section */}
        <div className="hidden md:block transform -translate-y-12">
        <div className="md:flex mx-20 flex-row my-28">
           <div className="basis-1/2">
                <h1 className="text-grad-0 font-lexend font-normal my-5 text-6xl leading-tight">Grade Assessments Faster with AI.</h1>
                <p className="text-grad-0 font-lexend font-normal my-7 text-base leading-8">Transform your grading process with our AI-powered assessment tool. Save time, maintain consistency, and focus more on teaching.</p>
                <Link to="/signup"><button className="text-white-0 font-lexend inline-flex items-center bg-blue1000-0 py-2 px-8 rounded-2xl">
                    Get Started
                </button>
                </Link>
                <Link to="/signin">
                <button className="font-lexend text-blue1000-0 inline-flex items-center bg-amber-500 py-2 px-10 mx-2 border-2 rounded-2xl">
                    Sign In
                </button>
                </Link>                
                
                
            </div>
                
            <div className="basis-1/2 mx">
                <img src={Hero} className="w-full h-full" alt="" />
            </div> 
        </div>
        </div>

        <div className="block mb-20 md:hidden">
            <div className="mx-9">
                <img src={Hero} className="w-full h-full" alt="" />
            </div>
           <div className="mx-7">
                <h1 className="text-grad-0 font-lexend font-normal my-5 text-3xl">Grade Assessments Faster with AI.</h1>
                <p className="text-grad-0 font-lexend font-normal my-5 text-sm">Transform your grading process with our AI-powered assessment tool. Save time, maintain consistency, and focus more on teaching.</p>
                <div className="text-center">
                    <Link to="/signin">
                    <button className="text-white-0 font-lexend inline-flex items-center bg-blue1000-0 py-2 px-8 mr-3 rounded-2xl">
                    Get Started
                    </button>
                    </Link>
                    <Link to="/signup">
                    <button className="font-lexend text-blue1000-0 inline-flex items-center bg-amber-500 py-2 px-10 border-2 rounded-2xl">
                    Sign In
                    </button>
                    </Link>
                </div>
                
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
                    <p className="text-grad-0 text-sm">Advanced AI technology accurately<br /> recognizes and processes handwritten<br /> assessments</p>
                    <FaArrowRightLong className="block mx-auto mt-7 text-grad-0" />
                </div>
                <div className="basis-1/3 mb-6 mt-14 sm:mt-0">
                    <MdGrading  className="block mx-auto rounded-full text-5xl text-white-0 p-3 bg-purple-0" />
                    <p className="text-grad-0 font-medium my-3 text-lg">Custom Marking Schemes</p>
                    <p className="text-grad-0 text-sm">Upload and customize your marking<br /> criteria for consistent grading across all<br /> assessments.</p>
                    <FaArrowRightLong className="block mx-auto mt-7 text-grad-0" />

                </div>
                <div className="basis-1/3 mt-14 sm:mt-0">
                    <IoAnalytics className="block mx-auto rounded-full text-5xl text-white-0 p-3 bg-purple-0" />
                    <p className="text-grad-0 font-medium my-3 text-lg">Analytics Dashboard</p>
                    <p className="text-grad-0 text-sm">Get detailed insights into student<br /> performance and grading patterns.</p>
                    <FaArrowRightLong className="block mx-auto mt-7 text-grad-0" />
                </div>
            </div>
            <button className="text-white-0 font-lexend text-sm inline-flex items-center bg-blue1000-0 py-2 px-8 rounded-2xl my-11">Explore all features</button>
        </div>


            {/* How It Works */}
    
        <WorksCarousel />

        <div className="hidden md:block text-center mt-20">
            <div>
                <button className="font-lexend text-feat-0 inline-flex items-center bg-amber-500 py-2 px-8 mx-2 border-2 text-1xl rounded-3xl">How it works</button>
                <h3 className="text-grad-0 font-lexend md:text-3xl text-2xl py-3">Marker-AI is easy to use</h3>
            </div>
            <div className="md:flex flex-row mt-7">
                <div className="md:basis-1/4 basis1/2 mb-6">
                    <GrUploadOption className="block mx-auto rounded-full text-5xl text-purple-0 p-3 bg-blue200-0" />
                    <p className="text-grad-0 font-medium my-3 text-lg">Upload</p>
                    <p className="text-grad-0 text-sm">Scan and upload handwritten<br /> assessments.</p>
                </div>
                <div className="md:basis-1/4 basis-1/2 mb-6 mt-14 sm:mt-0">
                    <MdGrading  className="block mx-auto rounded-full text-5xl text-purple-0 p-3 bg-blue200-0" />
                    <p className="text-grad-0 font-medium my-3 text-lg">Set Criteria</p>
                    <p className="text-grad-0 text-sm">Define your marking scheme</p>

                </div>
                <div className="md:basis-1/4 basis-1/2 mb-6 mt-14 sm:mt-0">
                    <MdOutlineSmartToy className="block mx-auto rounded-full text-5xl text-purple-0 p-3 bg-blue200-0" />
                    <p className="text-grad-0 font-medium my-3 text-lg">Grading</p>
                    <p className="text-grad-0 text-sm">Let AI grade the assessments.</p>
                </div>
                <div className="md:basis-1/4 basis-1/2 mb-6 mt-14 sm:mt-0">
                    <MdOutlineRateReview className="block mx-auto rounded-full text-5xl text-purple-0 p-3 bg-blue200-0" />
                    <p className="text-grad-0 font-medium my-3 text-lg">Review</p>
                    <p className="text-grad-0 text-sm">Review and finalize grades.</p>
                </div>
            </div>
        </div>



            {/* Benefits */}
            <BenefitCarousel />
        <div className="hidden md:block mt-20">
            <div className="text-center">
                <button className="font-lexend text-feat-0 inline-flex items-center bg-amber-500 py-2 px-8 mx-2 border-2 text-1xl rounded-3xl">Benefits</button>
                <h3 className="text-grad-0 font-lexend sm:text-3xl text-2xl py-3">Why choose Marker-AI?</h3>
            </div>
            <div className="md:flex flex-row mt-7 pl-32">
                <div className="basis-1/3">
                    <BiSolidTimeFive className="rounded-full text-5xl text-white-0 p-3 bg-purple-0" />
                    <p className="text-grad-0 font-medium my-3 text-lg">Ease, efficiency and time-saving</p>
                    <p className="text-grad-0 text-sm">Marker-AI takes the some workload<br /> off you and frees you up to focus in.</p>
                </div>
                <div className="basis-1/3 mt-10 md:mt-0">
                    <FaCheckSquare  className="rounded-full text-5xl text-white-0 p-3 bg-purple-0" />
                    <p className="text-grad-0 font-medium my-3 text-lg">Accuracy and fairness</p>
                    <p className="text-grad-0 text-sm">Ensures fair and accurate grading<br /> by removing human bias and error.</p>

                </div>
                <div className="basis-1/3 mt-10 md:mt-0">
                    <VscFeedback className="rounded-full text-5xl text-white-0 p-3 bg-purple-0" />
                    <p className="text-grad-0 font-medium my-3 text-lg">Insights and feedback</p>
                    <p className="text-grad-0 text-sm">Receive insights and feedback on<br /> each test you can share with your student.</p>
                </div>
            </div>
        </div>




            {/* Pricing */}

            <div className="md:mt-20 mt-7">
            <div className="text-center md:mb-20 mb-10">
                <button className="font-lexend text-feat-0 inline-flex items-center bg-amber-500 py-2 px-8 mx-2 border-2 border-t-white-0 text-1xl rounded-3xl">Pricing</button>
                <h3 className="text-grad-0 font-lexend md:text-3xl text-2xl py-3">Choose the right plan for you</h3>
            </div>
            <div className="md:flex flex-row mt-7">
                <div className="basis-1/5 text-center">
                </div>
                <div className="basis-1/5 grid place-items-center">
                    <div className="bg-gray-0 py-0.5 w-80 md:w-full text-center">
                        <p className="text-grad-0 font-medium my-3 text-2xl font-lexend">Basic</p>
                        <p className="text-grad-0 text-sm font-lexend mb-8"><span className="font-bold">₦5,000</span> /month</p>
                    </div>
                    <div className="leading-8 mt-2">
                        <span className="inline-flex"><FaCheck className="block mx-auto pr-1 mt-2 text-lg text-arr-0" /> Consequat ex proident.</span><br />
                        <span className="inline-flex"><FaCheck className="block mx-auto mt-2 pr-1 text-lg text-arr-0" /> Deserunt sit cupidatat.</span><br />
                        <span className="inline-flex"><FaCheck className="block mx-auto mt-2 pr-1 text-lg text-arr-0" /> Amet id ea et nisi cillum.</span>
                    </div>
                    <div className="text-center mb-14 md:mb-0">
                    <button className="font-lexend text-blue1000-0 inline-flex items-center bg-amber-500 py-2 px-8 mx-2 mt-8 border-2 rounded-2xl">
                    Get Started
                </button>
                    </div>
                </div>
                <div className="basis-1/5 transform md:-translate-y-10">
                    <div className="grid place-items-center">
                    <div className="bg-purple-0 text-center py-3 px-20 rounded-t-xl w-80 md:w-full">
                        <p className="text-white-0 font-lexend">Recommended</p>
                    </div>
                    <div className="bg-gray-0 py-0.5 text-center w-80 md:w-full">
                        <p className="text-grad-0 font-medium my-3 text-2xl font-lexend ">Pro</p>
                        <p className="text-grad-0 text-sm font-lexend mb-8"><span className="font-bold">₦15,000</span> /month</p>
                    </div>
                    <div className="text-center leading-8 mt-2 mx-24 md:mx-0">
                        <span className="inline-flex"><FaCheck className="block mx-auto pr-1 mt-2 text-lg text-arr-0" /> Consequat ex proident.</span><br />
                        <span className="inline-flex"><FaCheck className="block mx-auto mt-2 pr-1 text-lg text-arr-0" /> Deserunt sit cupidatat.</span><br />
                        <span className="inline-flex"><FaCheck className="block mx-auto mt-2 pr-1 text-lg text-arr-0" /> Amet id ea et nisi cillum.</span><br />
                        <span className="inline-flex"><FaCheck className="block mx-auto mt-2 pr-1 text-lg text-arr-0" /> Excepteur nisi eiusmod proident.</span><br />
                        <span className="inline-flex"><FaCheck className="block mx-auto mt-2 pr-1 text-lg text-arr-0" /> Magna eu anim commodo qui nisif.</span>
                    </div>
                    <div className="text-center mb-14 md:mb-0">
                    <button className="font-lexend text-white-0 inline-flex items-center bg-purple-0 py-2 px-8 mx-2 mt-8 border-2 rounded-2xl">
                    Get Started
                </button>
                    </div>
                    </div>
                </div>
                <div className="basis-1/5 grid place-items-center">
                    <div className="bg-gray-0 py-0.5 text-center w-80 md:w-full">
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
                    <div className="text-center mt-20">
                        <button className="font-lexend text-feat-0 inline-flex items-center bg-amber-500 py-2 px-8 mx-2 border-2 border-t-white-0 text-1xl rounded-3xl">Get in touch</button>
                          <h3 className="text-grad-0 font-lexend md:text-3xl text-2xl py-3">Do you need more information?</h3>
                    </div>
                    <div className="md:flex flex-row bg-gray-0 md:mx-20 p-8 rounded-xl">
                        <div className="basis-1/2">
                            <img src={Info} alt="" className="md:rounded-l-lg rounded-xl w-full h-full" />
                        </div>
                        <div className="md:mx-28 basis-1/2 py-8 mx-5 pt-16">
                            <form>
                                <div class="space-y-12">
                                    <div class="border-gray-900/10">
                                        <h2 class="text-base/7 font-lexend md:text-center font-medium text-gray-900">Send us a message</h2>

                                        <div class="mt-5 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                                <div class="mt-6 md:text-center gap-x-6">
                                    <button type="submit" className="font-lexend rounded-md bg-blue1000-0 text-white-0 px-14 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>



                {/* Footer */}

                <div className="bg-blue1000-0 mt-32 py-7 md:px-20 px-7">
                    <div className="md:flex flex-row">
                        <div className="basis-1/2 md:mb-0 mb-5">
                            <img src={Logo} alt="" className="w-16" />
                            <p className="font-istock text-white-0">MARKER-AI</p>
                            <p className="font-istock flex md:text-[6px] text-[8px] text-white-0"><GoDash className="mt-0.5" /> AI FOR EDUCATORS<GoDash className="mt-0.5" /></p>
                            <p className="font-istock flex md:text-[10px] text-[12px] mt-5 text-white-0"><AiOutlineCopyright className="mt-0.5" /> 2025. Marker-AI. All Rights Reserved.</p>
                        </div>
                        <div className="md:flex flex-row basis-1/2 ml-auto text-white-0 font-lexend font-extralight md:text-xs text-lg">
                            <div className="basis-1/3">
                                <span className="font-bold">Product</span><br className="hidden md:block" /><br />
                                <span>Features</span><br />
                                <span>How it works</span><br />
                                <span>Pricing</span><br />
                                <span>Testimonials</span>
                            </div>
                            <div className="basis-1/3 md:mt-0 mt-5">
                                <p className="font-bold">Contact Us</p><br className="hidden md:block" />
                                <span className="inline-flex"><CiMail className="mt-1 mr-3" /> admin@markerai.org</span><br />
                                <span className="inline-flex"><FaWhatsapp className="mt-1 mr-3" /> +234 706 856 6789</span>
                            </div>
                            <div className="basis-1/3 md:mt-0 mt-5">
                                <p className="font-bold">Follow Us</p><br className="hidden md:block" /><br className="block md:hidden" />
                                <div className="flex text-lg">
                                    <FaXTwitter className="mr-3" /> <LiaInstagram className="mr-3" /> <MdOutlineFacebook className="mr-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="text-white-0 my-8" />
                    <div className="md:flex flex-row">
                        <div className="basis-1/2 mt-5 mb-5 md:mb-0">
                            <p className="text-white-0 font-lexend text-lg font-extralight">Subscribe to our Newsletter</p>
                        </div>
                        <div className="items-center justify-center bg-gray-100 basis-1/2">
                            <div className="relative w-full max-w-sm">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="md:w-[450px] w-full px-4 py-4 text-sm border-white-0 border-2 rounded-lg shadow-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-1000-0 bg-blue1000-0"
                                />
                                <button
                                    type="button"
                                    className="absolute top-3 right-0 md:-right-16 px-4 py-2 mr-2 text-sm font-medium text-blue1000-0 bg-white-0 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
        </div>
        
        </>
    )
}


export default LandingPage