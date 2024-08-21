import React, { useEffect } from 'react'
import portfolio from './Portfolio.module.css' 

import img1 from '../../assets/images/poert1.png'
import img2 from '../../assets/images/port2.png'
import img3 from '../../assets/images/port3.png'

export default function Portfolio() {


    useEffect(() => {

      const overlay = document.getElementById('overlay');
      const overlayImg = document.getElementById('overlay-img');
  
      const imgList = Array.from(document.querySelectorAll(`.${portfolio.imgportContainer}`));

      imgList.forEach(div => {
        const img = div.querySelector('img'); 
        if (img) {
          div.addEventListener('click', () => {
            const imgPath = img.getAttribute('src'); 
            if (imgPath) {
              overlay.style.display = 'flex';
              overlayImg.src = imgPath;
            }
          });
        }
      });

      overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
      });
      return () => {
        imgList.forEach(img => {
          img.removeEventListener('click', () => {});
        });
        overlay.removeEventListener('click', () => {});
      };
    }, []);






  return <>
    <div className='text-[#2C3E50] flex flex-col items-center'>
      <div className={`${portfolio.container} flex flex-col items-center`}>
        <h2 className='text-4xl font-bold mt-7'>PORTFOLIO COMPONENT</h2>
        <div className={portfolio.star}>
          <i className='fa-solid fa-star mt-6'></i>
        </div>
        <div className='grid grid-cols-3 gap-10 mt-5 mb-7'>
          <div className={'relative  '+portfolio.imgportContainer}>
            <img src={img1} alt="img1" className={portfolio.imgport} />
            <div className={portfolio.layer }>
            <i className="fa-solid fa-plus fa-3xl text-8xl" ></i>
            </div>
          </div>
          <div className={'relative  '+portfolio.imgportContainer}>
            <img src={img2} alt="img2" className={portfolio.imgport} />
            <div className={portfolio.layer}>
            <i className="fa-solid fa-plus fa-3xl text-8xl" ></i>
            </div>
          </div>
          <div className={'relative  '+portfolio.imgportContainer}>
            <img src={img3} alt="img3" className={portfolio.imgport} />
            <div className={portfolio.layer}>
            <i className="fa-solid fa-plus fa-3xl text-8xl" ></i>
            </div>
          </div>
          <div className={'relative  '+portfolio.imgportContainer}>
            <img src={img1} alt="img1" className={portfolio.imgport} />
            <div className={portfolio.layer}>
            <i className="fa-solid fa-plus fa-3xl text-8xl" ></i>
            </div>
          </div>
          <div className={'relative  '+portfolio.imgportContainer}>
            <img src={img2} alt="img2" className={portfolio.imgport} />
            <div className={portfolio.layer}>
            <i className="fa-solid fa-plus fa-3xl text-8xl" ></i>
            </div>
          </div>
          <div className={'relative  '+portfolio.imgportContainer}>
            <img src={img3} alt="img3" className={portfolio.imgport} />
            <div className={portfolio.layer}>
                <i className="fa-solid fa-plus fa-3xl text-8xl" ></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div  id='overlay' className={portfolio.overlay}>
    <img id="overlay-img" src="" alt="Overlay" />
  </div>
    </>  
  
}
