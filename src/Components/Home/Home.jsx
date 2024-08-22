import React from 'react';
import home from './Home.module.css';
import avatar from '../../assets/images/avataaars.svg'

export default function Home() {
  return (

      <div className='bg-[#1ABC9C] flex flex-col items-center text-white py-20'>
        <div className='w-64'>
        <img src={require('../../assets/images/avataaars.svg').default} alt="Avatar" className="w-full" />

        </div>
        <h2 className='text-4xl font-bold mt-10'>START FRAMEWORK</h2>
        <div className={home.star}>
          <i className='fa-solid fa-star mt-6'></i>
        </div>
        <p className='pt-4'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
   
  );
}
