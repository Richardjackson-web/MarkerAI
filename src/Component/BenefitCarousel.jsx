import React, {useState} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BiSolidTimeFive } from "react-icons/bi";
import { FaCheckSquare } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";




function BenefitCarousel(){

    const [currentIndex, setCurrentIndex] = useState(0);
      
    
      const totalSlides = 3; // We have 3 static slides
    
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

      return(

        <>
        
        <div className="md:hidden mt-8 relative w-full max-w-lg mx-auto overflow-hidden">
        <div className="text-center">
                <button className="font-lexend text-feat-0 inline-flex items-center bg-amber-500 py-2 px-8 mx-2 border-2 text-1xl rounded-3xl">Benefits</button>
                <h3 className="text-grad-0 font-lexend sm:text-3xl text-2xl py-3">Why choose Marker-AI?</h3>
            </div>
              {/* Slides */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* Slide 1 */}
                <div className="min-w-full p-6 bg-gray-100 rounded-lg shadow-lg text-center">
                <div className="basis-1/3">
                                    <BiSolidTimeFive className="rounded-full mx-auto text-5xl text-white-0 p-3 bg-purple-0" />
                                    <p className="text-grad-0 font-medium my-3 text-lg">Ease, efficiency and time-saving</p>
                                    <p className="text-grad-0 text-sm">Marker-AI takes the some workload<br /> off you and frees you up to focus in.</p>
                                </div>
                </div>
        
                {/* Slide 2 */}
                <div className="min-w-full p-6 bg-gray-100 rounded-lg shadow-lg text-center">
                <div className="basis-1/3 md:mt-0">
                                    <FaCheckSquare  className="rounded-full mx-auto text-5xl text-white-0 p-3 bg-purple-0" />
                                    <p className="text-grad-0 font-medium my-3 text-lg">Accuracy and fairness</p>
                                    <p className="text-grad-0 text-sm">Ensures fair and accurate grading<br /> by removing human bias and error.</p>
                
                                </div>
                </div>
        
                {/* Slide 3 */}
                <div className="min-w-full p-6 bg-gray-100 rounded-lg shadow-lg text-center">
                <div className="basis-1/3 md:mt-0">
                                    <VscFeedback className="rounded-full mx-auto text-5xl text-white-0 p-3 bg-purple-0" />
                                    <p className="text-grad-0 font-medium my-3 text-lg">Insights and feedback</p>
                                    <p className="text-grad-0 text-sm">Receive insights and feedback on<br /> each test you can share with your student.</p>
                                </div>
                </div>
              </div>
        
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-md hover:bg-gray-200"
              >
                <ChevronLeft size={20} className="md:size-24" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-md hover:bg-gray-200"
              >
                <ChevronRight size={20} className="md:size-24" />
              </button>
        
              {/* Indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                <button
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${
                    currentIndex === 0 ? "bg-gray-800" : "bg-gray-400"
                  }`}
                  onClick={() => setCurrentIndex(0)}
                />
                <button
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${
                    currentIndex === 1 ? "bg-gray-800" : "bg-gray-400"
                  }`}
                  onClick={() => setCurrentIndex(1)}
                />
                <button
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${
                    currentIndex === 2 ? "bg-gray-800" : "bg-gray-400"
                  }`}
                  onClick={() => setCurrentIndex(2)}
                />
              </div>
            </div>
        
        </>
      )
}


export default BenefitCarousel