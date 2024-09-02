import React, { useState } from 'react';
import akaza from '../assets/akaza.png';
import girl from '../assets/devushka_s_bivoy.avif';
import douma from '../assets/douma.jpg';
import gyokko from '../assets/gyokko.webp';
import gyutaro from '../assets/gyutaro.webp';
import hantengu from '../assets/hantengu.webp';
import kokushibo from '../assets/kokushibo.jpg';
import mudzanchik from '../assets/mudzanchik.png';

import '../Components/Carousel.css';

const Carousel = () => {
  const images = [mudzanchik, kokushibo, douma, akaza, girl, hantengu, gyokko, gyutaro];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img 
          src={images[currentIndex]} 
          alt="Slide" 
          className="carousel-image"
        />
      </div>

      {/* Левая стрелка */}
      <button 
        onClick={prevSlide} 
        className="carousel-control left">
        ❮
      </button>

      {/* Правая стрелка */}
      <button 
        onClick={nextSlide} 
        className="carousel-control right">
        ❯
      </button>
    </div>
  );
}

export default Carousel;

