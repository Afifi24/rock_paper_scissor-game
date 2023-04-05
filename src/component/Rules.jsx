import React from 'react'
import rulesimg from '../images/image-rules.svg'
import close from '../images/icon-close.svg'
const Rules = ({setIsopen,isopen}) => {
  return (
    <div className='absolute z-10  flex items-center bg-black bg-opacity-50 justify-center w-full h-full left-0 right-0 top-0 bottom-0  '>
        <div className='bg-white h-full w-full md:w-fit md:h-fit md:mx-4 max-w-sm flex flex-col gap-48 md:gap-6 p-10 md:rounded-lg'>
            <div className='flex  items-center justify-between '>
                <h3 className='uppercase hidden md:block text-2xl Darktext font-bold'>rules</h3>
                 <img onClick={()=>setIsopen(!isopen)} className='hidden md:block cursor-pointer ' src={close} alt="" />
            </div>
            <img className='w-full' src={rulesimg} alt="" />
            <img onClick={()=>setIsopen(!isopen)} className='cursor-pointer absolute bottom-10 left-1/2 -translate-x-1/2 md:hidden block ' src={close} alt="" />
            <h3 className='uppercase absolute top-20 left-1/2 -translate-x-1/2 md:hidden block text-2xl Darktext font-bold'>rules</h3>
        </div>
    </div>
  )
}

export default Rules