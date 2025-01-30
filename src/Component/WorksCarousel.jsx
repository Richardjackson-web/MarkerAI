import React, {useState} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GrUploadOption } from "react-icons/gr";
import { MdGrading } from "react-icons/md";
import { MdOutlineSmartToy } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";



function WorksCarousel(){

    const [currentIndex, setCurrentIndex] = useState(0);
      
    
      const totalSlides = 4; // We have 4 static slides
    
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
        
        <div className="md:hidden mt-6 relative w-full max-w-lg mx-auto overflow-hidden">
                <div className="text-center">
                        <button className="font-lexend text-feat-0 inline-flex items-center bg-amber-500 py-2 px-8 mx-2 border-2 text-1xl rounded-3xl">How it works</button>
                        <h3 className="text-grad-0 font-lexend md:text-3xl text-2xl py-3">Marker-AI is easy to use</h3>
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
                <div className="md:basis-1/4 basis1/2 mb-6">
                            <GrUploadOption className="block mx-auto rounded-full text-5xl text-purple-0 p-3 bg-blue200-0" />
                            <p className="text-grad-0 font-medium my-3 text-lg">Upload</p>
                            <p className="text-grad-0 text-xs">Scan and upload handwritten<br /> assessments.</p>
                        </div>
                </div>
        
                {/* Slide 2 */}
                <div className="min-w-full p-6 bg-gray-100 rounded-lg shadow-lg text-center">
                <div className="md:basis-1/4 basis-1/2 mb-6 sm:mt-0">
                            <MdGrading  className="block mx-auto rounded-full text-5xl text-purple-0 p-3 bg-blue200-0" />
                            <p className="text-grad-0 font-medium my-3 text-lg">Set Criteria</p>
                            <p className="text-grad-0 text-xs">Define your marking scheme</p>
        
                        </div>
                </div>
        
                {/* Slide 3 */}
                <div className="min-w-full p-6 bg-gray-100 rounded-lg shadow-lg text-center">
                <div className="md:basis-1/4 basis-1/2 mb-6 sm:mt-0">
                            <MdOutlineSmartToy className="block mx-auto rounded-full text-5xl text-purple-0 p-3 bg-blue200-0" />
                            <p className="text-grad-0 font-medium my-3 text-lg">Grading</p>
                            <p className="text-grad-0 text-xs">Let AI grade the assessments.</p>
                        </div>
                </div>
                        {/* Slide 4 */}
                        <div className="min-w-full p-6 bg-gray-100 rounded-lg shadow-lg text-center">
                        <div className="md:basis-1/4 basis-1/2 mb-6 sm:mt-0">
                            <MdOutlineRateReview className="block mx-auto rounded-full text-5xl text-purple-0 p-3 bg-blue200-0" />
                            <p className="text-grad-0 font-medium my-3 text-lg">Review</p>
                            <p className="text-grad-0 text-xs">Review and finalize grades.</p>
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


export default WorksCarousel