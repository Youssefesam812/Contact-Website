import React from 'react'

export default function FooterFirst() {
  return <>
  <div>
    <div className=' grid grid-cols-3 text-white bg-[#2C3E50] p-24 text-center gap-5'>
          
        <div>
            <h2 className='text-3xl font-semibold'>LOCATION</h2>
            <p className='mt-2'>2215 John Daniel Drive</p>
            <p className='mt-4'>Clark, MO 65243</p>

        </div>
        <div>
            <h2 className='text-3xl font-semibold'>AROUND THE WEB</h2>
            <div className='icons mt-2'>
                    
                    <i className='fa-brands fa-facebook border rounded-full p-2 mr-2'></i>
                    <i className='fa-brands fa-twitter border rounded-full p-2 mr-2'></i>
                    <i className='fa-brands fa-linkedin-in border rounded-full p-2 mr-2'></i>
                    <i className="fa-solid fa-globe border rounded-full p-2"></i>
            </div>

        </div>
        <div>
            <h2 className='text-3xl font-semibold'>ABOUT FREELANCER</h2>
            <p className='mt-2'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>

        </div>

    </div>
  </div>
  

  </>
}
