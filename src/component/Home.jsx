import React,{useState,useEffect} from 'react'
import Score from './Score'
import img from '../images/bg-triangle.svg'
import rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'
import scissor from '../images/icon-scissors.svg'
import Rules from './Rules'
const Home = () => {
  const [isopen,setIsopen] = useState(false)
  return (
   
     
      <div className='h-screen homebacground '>
      <Score/>
      <div className='flex items-center justify-center'>
      <div className='relative mx-16 mt-36 md:mt-16 justify-center flex flex-col items-center'>
        <img className='w-full' src={img} alt="" />
       <div className='bg-white cursor-pointer absolute flex items-center border-[15px] border-blue-500  justify-center -top-10  -left-6 w-32 h-32 rounded-full  '>
              <img className='' src={paper} alt="" />
       </div>

        <div className=' bottom-0 cursor-pointer bg-white absolute flex items-center border-[15px] border-red-500 justify-center  w-32 h-32 rounded-full'>
        <img  src={rock} alt="" />

        </div>
          <div className=' -top-10 cursor-pointer -right-6 bg-white absolute flex items-center border-[15px] border-yellow-500 justify-center  w-32 h-32 rounded-full'>
              <img  src={scissor} alt="" />
            </div>         
      </div>
      </div>
        <div className='absolute md:z-20 left-1/2 -translate-x-1/2  bottom-10  md:left-[90%]'>
           <button onClick={()=>setIsopen(!isopen)} className='border uppercase text-sm rounded-md px-7  py-1 text-white'>Rules</button>
        </div>
        {
          isopen &&
          <Rules isopen={isopen} setIsopen={setIsopen}/>

        }
        
    </div>
   
  )
}

export default Home