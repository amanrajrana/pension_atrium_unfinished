// components/SportsElements.js

import React from 'react';
import imgAPI from '@/public/images/ImageApi';
import Image from 'next/image';

const data = [
  { id: 1, icon: imgAPI.ser_vectors[9], text: 'Sports Hall' },
  { id: 2, icon: imgAPI.ser_vectors[8], text: 'Athletic Stadium' },
  { id: 3, icon: imgAPI.ser_vectors[9], text: 'Multipurpose Gym' },
  { id: 4, icon: imgAPI.ser_vectors[7], text: 'Multipurpose Gym' },
  { id: 5, icon: imgAPI.ser_vectors[0], text: 'Gymnastic Hall' },
  { id: 6, icon: imgAPI.ser_vectors[1], text: 'Beach Volleyball Court' },
  { id: 7, icon: imgAPI.ser_vectors[2], text: 'Fitness Gym' },
  { id: 8, icon: imgAPI.ser_vectors[3], text: 'Asphalt Circuit' },
  { id: 9, icon: imgAPI.ser_vectors[4], text: 'Climbing Wall' },
  { id: 10, icon: imgAPI.ser_vectors[6], text: 'Cross-country Ski trails' },
];

const SportsElements = () => {
  return (

    <div className="grid grid-cols-1 sm:grid-cols-2  py-2 md:py-4  ">
      {data.map(item => (
        <div key={item.id} className="flex gap-4  items-center py-2 rounded">
          <Image height={32} width={32} src={item.icon} alt="icon" className="h-auto w-1/6" />
          <span>{item.text}</span>
        </div>
      ))}
    </div>
    
  );
};

export default SportsElements;
