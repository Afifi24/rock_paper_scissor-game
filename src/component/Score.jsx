import React from 'react'
import bonus from '../images/logo.svg'
const Score = () => {
  return (
    <div className='p-4'>
        <div className='max-w-3xl h-fit  mx-auto p-4 rounded-xl border-2 Border flex items-center justify-between'>
         <div className='w-[100px] md:w-[150px]'>
         <img className='w-full' src={bonus} alt="" />
         </div>
          <div className='flex py-2 px-6 rounded-md items-center bg-white flex-col gap-2'>
            <p className='uppercase text-sm tracking-[2px] scoreText font-bold'>score</p>
              <h3 className='text-5xl Darktext  font-bold'>12</h3>
          </div>
        </div>
    </div>
  )
}

export default Score