import React, { useEffect, useState } from 'react';
import "../css/Slider.css";

const images = [
  'https://images.unsplash.com/photo-1628745277895-106fbff3caf7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1556745750-68295fefafc5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 10000); // เปลี่ยนภาพทุก ... วินาที

    return () => clearInterval(timer); // ล้าง timer เมื่อ component ถูก unmount
  }, []);

  return (
    <div className="slider-container">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={index === current ? 'slide active' : 'slide'}
        />
      ))}
      <button className="prev" onClick={prevSlide}>❮ </button>
      <button className="next" onClick={nextSlide}> ❯</button>
    </div>
  );
};

export default Slider;
