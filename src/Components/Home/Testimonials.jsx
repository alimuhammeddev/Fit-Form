import React, { useEffect, useState } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import { rating, stars, test1, test2, test3, test4, test5 } from '../../assets';

const testimonials = [
  { id: 1, image: test3,},
  { id: 2, image: test4,},
  { id: 3, image: test5,},
  { id: 4, image: test1,},
  { id: 5, image: test2,},
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
            perView: 3,
            spacing: 16,
          },
          breakpoints: {
            '(min-width: 1024px)': {
              slides: {
                origin: 'center',
                perView: 5,
                spacing: 2,
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

      <div className="flex justify-center items-center mt-20 lg:px-96 relative lg:mt-10">
        <div id="keen-slider" className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`keen-slider__slide relative lg:mt-96 mt-[335px] ${currentSlide === index ? 'active-slide' : ''}`}
            >
              <img src={testimonial.image} alt={`Testimonial ${testimonial.id}`} className="mx-auto w-16" />
            </div>
          ))}
        </div>

        {testimonials[currentSlide] && (
          <div className="absolute top-[-100px] lg:top-[10px] lg:w-[700px] lg:h-[350px] bg-[#396BAA] text-white p-10 lg:left-[22%] rounded-lg lg:mt-0 mt-10">
            <img src={stars} alt="" className='w-[30%]'/>
            <h1 className='lg:text-[20px] mt-3'><span className='font-semibold'>Fitform</span> has provided a well-equipped environment for me to take care of my body. I enjoy going to the gym because of how relatable the members and trainers are.
            It’s much more than a business. It is a community.I am glad...</h1>
            <div className='mt-5'>
              <h1 className='lg:text-[32px] font-semibold text-[#ffffff] text-right'>Maryanne Dele</h1>
              <p className='text-[#F0F2F5] text-[20px] text-right lg:mr-32 mr-3'>Pharmacist</p>
            </div>
            {testimonials[currentSlide].text}
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-t-[#396BAA] border-l-transparent border-r-transparent"></div>
          </div>
        )}
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
        .active-slide .keen-slider__slide {
          position: relative;
        }
      `}</style>
    </section>
  );
}

export default Testimonials;
