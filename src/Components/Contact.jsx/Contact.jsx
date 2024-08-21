import React from 'react'
import contact from './Contact.module.css' 

export default function Contact() {
  return <>
  

  <div className='text-[#2C3E50] flex flex-col items-center'>
      <div className={contact.container + ' flex flex-col items-center'}>
      <h2 className='font-bold text-4xl mt-7'>CONTACT SECTION</h2>
        <div className={contact.star}>
          <i className='fa-solid fa-star mt-6'></i>
        </div>
        <div className='mt-24'>
        <input type="text" placeholder='userName' className={contact.inputs} />
        <input type="number" placeholder='userAge' className={contact.inputs} />
        <input type="email" placeholder='userEmail' className={contact.inputs} />
        <input type="password" placeholder='userPassword'  className={contact.inputs} />

        <button className='text-white bg-[#1ABC9C] px-4 py-2 rounded-lg mb-12'>send Message</button>
     </div>
     </div>

  </div>
  
  </>
}
