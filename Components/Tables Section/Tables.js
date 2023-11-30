import React from 'react';
import Rooms from './Rooms';
import Meal from './Meal';
import Others from './Others';
import text from "../../public/text.json";

const BorderedBox = ({ headerText, section }) => {
  return (
    <div className={`border lg:h-70 lg:min-h-full  w-full rounded  shadow overflow-hidden`}>
      <div className="bg-gradient-to-r from-btngrad_1 to-btngrad_2 w-full text-white text-center p-2">
        <h2 className="text-lg font-bold">{headerText}</h2>
      </div>
      <div className="p-3">{section}</div>
    </div>
  );
};

const Tables = () => {
  return (
    <div className='mt-16'>
      <h1 className="md:text-2x text-2xl font-bold mb-12 text-center">Our Accommodation</h1>

      <div className='flex flex-wrap justify-center lg:flex-nowrap lg:flex mx-4 md:mx-8 lg:mx-16 gap-8'>
        <div className='flex flex-col mb-4 md:flex-row gap-8 w-5/6'>
          <BorderedBox
            headerText="Room Type"
            section={<Rooms />}
          />
          <BorderedBox
            headerText="Meal"
            section={<Meal mealText={text.accom_meal} />}
          />
        </div>
        <div className=' w-823/10 mb-4 lg:h-70 lg:w-2/5 '>
          <BorderedBox
            headerText="Other services"
            section={<Others />}
          />
        </div>
      </div>
    </div>
  );
};

export default Tables;
