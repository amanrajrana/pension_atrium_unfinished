import React from 'react';
import Image from 'next/image';
import imgAPI from '@/public/images/ImageApi';

const Element = ({  image1,image2, text1,text2 }) => {
  return (
    <div className="flex  justify-between mb-4">
      <div className="mr-2 flex gap-4 items-center">
        <Image src={image1} height={21} width={21} alt='icon' className="h-6 w-6"/> {/*  */}
        <p className="text-sm">{text1}</p>
      </div>
      <div className='flex gap-4 items-center'>
        <Image src={image2} height={21} width={21} alt='image' className="h-6 w-6"/> {/*  */}
        <p className="text-sm">{text2}</p>
      </div>
    </div>
  );
};

const Rooms = () => {
  return (
    <div className=" w-auto rounded p-2 ">
      {/* Section 1 */}
      <div className="mb-2">
        <h3 className="text-lg text-center font-bold mb-2">Tourist</h3>
        <div>
          <Element
           
            image1={imgAPI.accom_vectors[0]} 
            text1="Shared"
            image2={imgAPI.accom_vectors[1]} 
            text2="Shared"
          />
          <Element
            
            image1={imgAPI.accom_vectors[2]} 
            text1="Shared"
            image2={imgAPI.accom_vectors[3]} 
            text2="Shared"

          />
        </div>
        <hr className="my-4" />
      </div>

      {/* Section 2 */}
      <div>
        <h3 className="text-lg text-center font-bold mb-1">Standard</h3>
        <div>
        <Element
           
           image1={imgAPI.accom_vectors[0]} 
           text1="Private"
           image2={imgAPI.accom_vectors[1]} 
           text2="Private"
         />
         <Element
           
           image1={imgAPI.accom_vectors[2]} 
           text1="Private"
           image2={imgAPI.accom_vectors[3]} 
           text2="Private"

         />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
