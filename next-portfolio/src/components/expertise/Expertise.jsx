"use client"
import React, { useState } from "react";

const images = [
  {
    url: "https://arnicopanday.com/wp-content/themes/yootheme/cache/dc/mentoring-dc10ad31.webp",
    heading: "Atmospheric Science Research",
    content: "Physics and chemistry of air pollutants and their interaction with meteorology and climate, particularly in mountainous regions. Improving knowledge about emissions, atmospheric composition, pollutant transport and impacts.",
    link: "https://example.com/learn-more",
    imageclick: "Photo by Khadak Mahata"
  },
  {
    url: "https://arnicopanday.com/wp-content/themes/yootheme/cache/7d/atmos-7dff3b14.webp",
    heading: "Atmospheric Science Research",
    content: "Atmospheric phenomena are complex and diverse, affecting our environment and daily lives in numerous ways.",
    link: "https://example.com/learn-more",
    imageclick: "Photo by Khadak Mahata"
  },
  {
    url: "https://arnicopanday.com/wp-content/themes/yootheme/cache/e7/pollution-e7bc08f3.webp",
    heading: "Atmospheric Science Research",
    content: "Pollution is a significant contributor to changes in atmospheric pressure, leading to environmental degradation.",
    link: "https://example.com/learn-more",
    imageclick: "Photo by Khadak Mahata"
  },
  {
    url: "https://arnicopanday.com/wp-content/themes/yootheme/cache/c1/sstain-c1c8eb69.webp",
    heading: "Atmospheric Science Research",
    content: "Soil degradation and erosion, depicted in this image, can influence atmospheric pressure patterns regionally.",
    link: "https://example.com/learn-more",
    imageclick: "Photo by Khadak Mahata"
  },
  {
    url: "https://arnicopanday.com/wp-content/themes/yootheme/cache/87/bridge-87dfad89.webp",
    heading: "Atmospheric Science Research",
    content: "Infrastructure development like bridges can alter local atmospheric pressure dynamics and microclimates.",
    link: "https://example.com/learn-more",
    imageclick: "Photo by Khadak Mahata"
  },
  {
    url: "https://arnicopanday.com/wp-content/themes/yootheme/cache/2e/building1-2e7ea28a.webp",
    heading: "Atmospheric Science Research",
    content: "Urban landscapes, as seen here, can significantly impact atmospheric pressure through heat island effects and air pollution.",
    link: "https://example.com/learn-more",
    imageclick: "Photo by Khadak Mahata"
  },
];

const Expertise = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative mx-auto overflow-hidden flex flex-col items-center justify-center pt-12" style={{ zIndex: 1 }}>
      <div className="box-container pt-12" style={{ width: '800px', zIndex: 1 }}>
        <div>
          <div className="p-4 mb-4 text-center">
            <h1 className="text-2xl font-bold">
              Passionate about mountains, clean air, stopping climate change, safeguarding democracy, sustainable design, travel, as well as promoting global peace and intercultural understanding.
            </h1>
          </div>
          <div className="p-4 mb-4 text-center pb-12">
            <h1 className="text-5xl text-black font-bold underline-center">Areas of Expertise</h1>
          </div>
        </div>
      </div>

      <div className="flex justify-between transition-transform duration-500 relative" style={{ transform: `translateX(-${currentIndex * 20}%)`, width: '300%', display: 'flex', zIndex: 1 }}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative flex-shrink-0"
            style={{ width: '20%', padding: '0 15px', boxSizing: 'border-box', zIndex: 1, position: 'relative' }}
          >
            <img
              src={image.url}
              alt={`Slide ${index + 1}`}
              style={{ height: '85vh', width: '100%', objectFit: 'cover' }}
            />
            <div className="absolute inset-0 flex flex-col justify-end text-white text-left bg-black bg-opacity-50 p-4" style={{ paddingLeft: '60px' }}>
              <h2 className="mb-2" style={{ fontSize: '2.5rem', fontWeight: 'bold', width: '50%', display: 'inline-block', paddingBottom: '16px' }}>
                {image.heading}
              </h2>

              <p className="mb-4" style={{ width: '80%', display: 'inline-block', paddingBottom: '16px' }}>{image.content}</p>

              <div style={{ maxWidth: '200px', margin: '0', display: 'flex', justifyContent: 'flex-start', paddingBottom: '24px'}}>
                <a
                  href={image.link}
                  className="bg-white text-black font-bold py-2 px-4 rounded inline-block"
                  style={{ textDecoration: 'none', display: 'inline-block' }}
                >
                  Read More
                </a>
              </div>
              <p className="absolute bottom-0 right-0 p-4" style={{ paddingRight: '10rem' }}>{image.imageclick}</p>
            </div>
          </div>
        ))}
        <div className="button-container absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between items-center" style={{ zIndex: 2 }}>
          <button className="bg-gray-800 text-white p-2 rounded-full" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="bg-gray-800 text-white p-2 rounded-full" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>

      {/* Dots for navigation */}
      <div className="flex justify-center mt-4 py-12">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 mx-1 rounded-full ${currentIndex === index ? 'bg-gray-900' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  )
};

export default Expertise;
