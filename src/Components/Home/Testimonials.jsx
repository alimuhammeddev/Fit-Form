import React, { useEffect, useState } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import { test1, test2, test3, test4, test5 } from '../../assets';

const testimonials = [
  { id: 1, image: test3 },
  { id: 2, image: test4 },
  { id: 3, image: test5 },
  { id: 4, image: test1 },
  { id: 5, image: test2 },
];

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm';
    script.async = true;

    const initializeSlider = () => {
      const keenSlider = new KeenSlider(
        '#keen-slider',
        {
          loop: true,
          slides: {
            origin: 'center',
            perView: 1,
            spacing: 16,
          },
          breakpoints: {
            '(min-width: 1024px)': {
              slides: {
                origin: 'center',
                perView: 5,
                spacing: 10,
              },
            },
          },
        },
        [
          (slider) => {
            slider.on('slideChanged', () => {
              setCurrentSlide(slider.track.details.rel);
            });
          },
        ]
      );

      const keenSliderPrevious = document.getElementById('keen-slider-previous');
      const keenSliderNext = document.getElementById('keen-slider-next');

      keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
      keenSliderNext.addEventListener('click', () => keenSlider.next());
    };

    script.onload = initializeSlider;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const headingStyle = {
    fontFamily: 'Bungee Outline, sans-serif',
  };

  return (
    <section>
      <div>
        <h1 style={headingStyle} className="text-[#396BAA] md:text-[80px] text-[35px] text-right lg:mr-6">
          Testimonials
        </h1>
      </div>
      <div>
        <h1 className="text-[#1B1B1B] text-[16px] text-center font-semibold underline underline-offset-4 decoration-[#0071FE] decoration-2">
          Success Stories
        </h1>
        <h2 className="text-[#1B1B1B] lg:text-[40px] font-semibold text-center">
          Our satisfied customers...
        </h2>
      </div>

      <div className="flex justify-center items-center mt-28 lg:px-80">
        <div id="keen-slider" className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`keen-slider__slide relative ${currentSlide === index ? 'active-slide' : ''}`}
            >
              {currentSlide === index && (
                <div className="absolute w-full max-w-[400px] h-[250px] left-1/2 transform -translate-x-1/2 bg-[#396BAA] text-white text-center p-10 rounded-lg shadow-lg -mt-[200px]">
                  {testimonial.text}
                  <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-t-[#396BAA] border-l-transparent border-r-transparent"></div>
                </div>
              )}
              <img src={testimonial.image} alt={`Testimonial ${testimonial.id}`} className="mx-auto w-20 mt-56" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-10 mt-6">
        <button
          aria-label="Previous slide"
          id="keen-slider-previous"
        >
          <i className="fas fa-arrow-left bg-[#FFA500] border border-[#FFA500] hover:bg-[#ffffff] hover:text-[#FFA500] transition ease-out duration-500 p-5 rounded-full text-[#ffffff]"></i>
        </button>
        <button
          aria-label="Next slide"
          id="keen-slider-next"
        >
          <i className="fas fa-arrow-right bg-[#FFA500] border border-[#FFA500] hover:bg-[#ffffff] hover:text-[#FFA500] transition ease-out duration-500 p-5 rounded-full text-[#ffffff]"></i>
        </button>
      </div>

      <style jsx>{`
        .keen-slider__slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .active-slide .keen-slider__slide {
          position: relative;
        }
      `}</style>
    </section>
  );
}

export default Testimonials;
