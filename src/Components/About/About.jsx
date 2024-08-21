import React from 'react'
import about from './About.module.css'

export default function About() {
  return <>
  
  <div className='bg-[#1ABC9C] text-white flex justify-center py-52'>
    <div className='w-3/4 flex flex-col items-center'>
      <h2 className='font-bold text-4xl'>ABOUT COMPONENT</h2>
      <div className={about.star}>
          <i className='fa-solid fa-star mt-6'></i>
        </div>
        <div className='flex mt-5'>
            <p className='mr-6'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, 
                CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, 
                CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>    
        </div>
    </div>

  </div>
  </>
}
