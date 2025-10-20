import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Slide01Title,
  Slide02ExecutiveSummary,
  Slide03StrategicModels,
  Slide04ComparisonMatrix,
  Slide05RiskReturnMatrix,
  Slide06CaseStudy,
  Slide07NextSteps,
  Slide08FilmOverview,
  Slide09Timeline
} from './slides';
import type { ContentSlide, SlideDefinition } from './types/slides';

const FilmTaxStrategyPitch = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const zoom = 1;

  const slides: SlideDefinition[] = [
    Slide01Title,
    Slide02ExecutiveSummary,
    Slide08FilmOverview,
    Slide09Timeline,
    Slide03StrategicModels,
    Slide04ComparisonMatrix,
    Slide05RiskReturnMatrix,
    Slide06CaseStudy,
    Slide07NextSteps
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const isContentSlide = (slide: SlideDefinition): slide is ContentSlide => slide.type === 'content';
  const currentSlideData = slides[currentSlide];
  const totalSlides = slides.length;

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch(e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          setCurrentSlide(prev => (prev < totalSlides - 1 ? prev + 1 : prev));
          break;
        case 'ArrowLeft':
        case 'PageUp':
          setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
          break;
        case 'Home':
          setCurrentSlide(0);
          break;
        case 'End':
          setCurrentSlide(totalSlides - 1);
          break;
        case 'Escape':
          if (document.fullscreenElement) {
            document.exitFullscreen();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [totalSlides]);

  return (
    <div className="w-full h-screen bg-white flex flex-col">

      <div id="slide-capture" className="flex-1 relative bg-white overflow-hidden">
        {isContentSlide(currentSlideData) && (
          <div className="absolute top-0 left-0 right-0 bg-slate-900 text-white px-4 sm:px-5 md:px-6 lg:px-8 py-3 md:py-4 lg:py-5">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4">
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl md:text-2xl font-light tracking-tight mb-1">
                  {currentSlideData.title}
                </h2>
                {currentSlideData.subtitle && (
                  <div className="text-xs sm:text-sm text-slate-400 font-light">
                    {currentSlideData.subtitle}
                  </div>
                )}
              </div>
              <div className="text-left sm:text-right">
                <div className="text-xs text-slate-400 uppercase tracking-widest">CONFIDENTIAL</div>
                <div className="text-xs text-slate-500 mt-1">Slide {currentSlide + 1} of {totalSlides}</div>
              </div>
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={
              isContentSlide(currentSlideData)
                ? 'pt-20 sm:pt-22 md:pt-24 pb-12 sm:pb-14 px-4 sm:px-5 md:px-6 lg:px-8 h-full overflow-y-auto slide-content export-scroll'
                : 'h-full slide-content export-scroll'
            }
            style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}
          >
            {currentSlideData.content}
          </motion.div>
        </AnimatePresence>

        {isContentSlide(currentSlideData) && (
          <div className="absolute bottom-0 left-0 right-0 bg-slate-50 border-t border-slate-200 px-4 sm:px-6 md:px-8 lg:px-12 py-2 sm:py-3 flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
            <div className="text-xs text-slate-500 text-center sm:text-left">MARSALA SOLUTIONS | Tax Strategy Advisory</div>
            <div className="text-xs text-slate-500 text-center sm:text-right">221 River St, Hoboken, NJ 07030</div>
          </div>
        )}
      </div>

      <div className="bg-slate-900 px-2 sm:px-4 md:px-8 py-2 sm:py-3 flex items-center justify-between border-t border-slate-700">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-5 py-2 text-xs sm:text-sm font-light transition-all ${
            currentSlide === 0
              ? 'text-slate-600 cursor-not-allowed'
              : 'text-white hover:text-blue-400'
          }`}
        >
          <ChevronLeft size={16} className="sm:hidden" />
          <ChevronLeft size={18} className="hidden sm:block" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="flex items-center gap-1 sm:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-blue-500 w-4 sm:w-6 md:w-8'
                  : 'bg-slate-600 w-1 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <span className="text-slate-400 text-xs sm:text-sm font-light">
            {currentSlide + 1} / {slides.length}
          </span>
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-5 py-2 text-xs sm:text-sm font-light transition-all ${
              currentSlide === slides.length - 1
                ? 'text-slate-600 cursor-not-allowed'
                : 'text-white hover:text-blue-400'
            }`}
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight size={16} className="sm:hidden" />
            <ChevronRight size={18} className="hidden sm:block" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilmTaxStrategyPitch;
