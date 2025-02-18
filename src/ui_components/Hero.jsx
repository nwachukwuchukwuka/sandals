import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { background_images } from '@/constants/constants';
import CountdownBanner from './CountDownBanner';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % background_images.length);
    }, 5000);

    return () => {
      clearInterval(imageInterval);
    };
  }, [background_images.length]);

  return (
    <div className='relative h-[560px] md:h-[750px] overflow-hidden'>
      <CountdownBanner />
      <AnimatePresence>
        <motion.div
          key={currentImage}
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='absolute inset-0 w-full h-full'
          style={{
            backgroundImage: `url('${background_images[currentImage]}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className='absolute bottom-[43px] md:bottom-[50px] left-4 flex space-x-2'>
        {background_images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-[6px] h-[6px] rounded-full cursor-pointer ${
              index === currentImage ? 'bg-white' : 'bg-gray-500'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;