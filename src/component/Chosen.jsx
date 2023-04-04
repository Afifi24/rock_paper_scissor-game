import React,{useState,useEffect} from 'react'
import scissorimg from '../images/icon-scissors.svg'
import rockimg from '../images/icon-rock.svg'
import paperimg from '../images/icon-paper.svg'
import Rules from './Rules'
import LoseWin from './LoseWin'
const Chosen = ({rock,paper,scissor}) => {
  const [isopen,setIsopen] = useState(false)
  const options = ['rock','scissor','paper']
  const [player,setPlayer] = useState(scissorimg)
  const [Computer,setComputer] = useState()
  const [result,setResult] = useState()

  const handlegame = (option)=>{
    const randomIndex = Math.floor(Math.random()*options.length)
    const computerChoice = options[randomIndex]
    setPlayer(option)
    setComputer(computerChoice)
    setResult(option,computerChoice)
  }
  const getResult =(player,Computer)=>{
   if(player === Computer){
    return 'tie'
   }else if(
    (player ==='rock' && Computer=='scissor') ||
    (player === 'paper' && Computer === 'rock' ) ||
    (player === 'scissor' && Computer === 'paper' ) 
   ){
    return 'player win'
   } else {
    return 'computer win'
   }
  }
  

  return (
   
     
      <div>
      <div className='flex items-center justify-center'>
      <div className='relative mx-10 w-full max-w-xl  mt-16 justify-between flex  items-center'>
            <div className='flex flex-col gap-10 items-center'>
                <h3 className='text-white font-bold uppercase tracking-[2px] text-[11px] md:text-[18px] text-center'>you picked</h3>
                 { paper && <div className='bg-white cursor-pointer  flex items-center border-[10px] md:border-[20px] border-blue-500  justify-center w-24 h-24 md:w-48 md:h-48 rounded-full  '>
                  <img src={paperimg} alt="" />
                  </div>}
                 { rock && <div className='bg-white cursor-pointer  flex items-center border-[10px] md:border-[20px] border-red-500  justify-center w-24 h-24 md:w-48 md:h-48 rounded-full  '>
                  <img src={rockimg} alt="" />
                  </div>}
                 { scissor && <div className='bg-white cursor-pointer  flex items-center border-[10px] md:border-[20px] border-yellow-500  justify-center w-24 h-24 md:w-48 md:h-48 rounded-full  '>
                  <img src={scissorimg} alt="" />
                  </div>}
            </div> 
            {/* <LoseWin/> */}
            <div className='flex flex-col gap-10 items-center'>
                <h3 className='font-bold text-white uppercase tracking-[2px]  text-[11px] md:text-[18px] text-center'>the house picked</h3>
                  <div className='bg-white cursor-pointer  flex items-center w-24 h-24   justify-center md:w-44 md:h-44 rounded-full  '>
                  
                  </div>
            </div>    
      </div>
      </div>
        <div className='absolute md:z-20 left-1/2 -translate-x-1/2  bottom-10  md:left-[90%]'>
           <button onClick={()=>setIsopen(!isopen)} className='border uppercase text-sm rounded-md px-5  py-1 tracking-[3px] text-white'>Rules</button>
        </div>
        {
          isopen &&
          <Rules isopen={isopen} setIsopen={setIsopen}/>

        }
        
    </div>
   
  )
}

export default Chosen