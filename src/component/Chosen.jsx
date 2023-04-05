
import React, { useState, useEffect } from 'react';
import scissorimg from '../images/icon-scissors.svg';
import rockimg from '../images/icon-rock.svg';
import paperimg from '../images/icon-paper.svg';
import Rules from './Rules';
import LoseWin from './LoseWin';

const Chosen = ({ player, Computer, winlose }) => {
  const [isopen, setIsopen] = useState(false);
  const [computerImage, setComputerImage] = useState(null);

  useEffect(() => {
    // Define a function to update computerImage state based on Computer prop
    const updateComputerImage = () => {
      let image = null;
      if (Computer === 'rock') {
        image =  <div className='bg-white  z-10  cursor-pointer flex items-center w-24 h-24 justify-center md:w-44 md:h-44 rounded-full border-[10px] md:border-[20px] border-red-500'>
          <img src={rockimg} alt="" />
        </div>
      } else if (Computer === 'paper') {
        image =  <div className='bg-white  z-10 cursor-pointer flex items-center w-24 h-24 justify-center md:w-44 md:h-44 rounded-full border-[10px] md:border-[20px] border-blue-500'>
          <img src={paperimg} alt="" />
        </div>
      } else if (Computer === 'scissor') {
        image =  <div className='bg-white z-10  cursor-pointer flex items-center w-24 h-24 justify-center md:w-44 md:h-44 rounded-full border-[10px] md:border-[20px] border-yellow-500'>
          {/* <img src={scissorimg} alt="" /> */}
          <img src={scissorimg} alt="" />
        </div>
      }
      setComputerImage(image);
    };

    // Call the updateComputerImage function after 3 seconds
    const timeoutId = setTimeout(() => {
      updateComputerImage();
    }, 1000);

    // Clean up the timeout on component unmount or when Computer prop changes
    return () => {
      clearTimeout(timeoutId);
    };
  }, [Computer]);

  return (
    <div>
      <div className='flex items-center justify-center'>
        <div className='relative mx-10 w-full max-w-xl mt-16 justify-between flex items-center'>
          <div className='flex flex-col gap-10 items-center'>
            <h3 className='text-white font-bold uppercase tracking-[2px] text-[11px] md:text-[18px] text-center'>you picked</h3>
            <div className={`bg-white cursor-pointer flex items-center  border-[7px] md:border-[20px]   ${player.title ==='paper' ?  'border-blue-500 ': player.title === 'rock'? 'border-red-500':'border-yellow-500'}  justify-center  w-24 h-24 md:w-48 md:h-48 rounded-full ` }  >
              <img src={player.image} alt="" />
                   
                 </div>
          </div>
          { computerImage &&
            <LoseWin winlose={winlose} />}
          <div className='flex flex-col gap-10 items-center'>
            <h3 className='font-bold text-white uppercase tracking-[2px] text-[11px] md:text-[18px] text-center'>the house picked</h3>
              {computerImage}
              { !computerImage && <div className='bg-black  z-0  cursor-pointer flex items-center w-24 h-24 justify-center md:w-44 md:h-44 rounded-full '/>}
      
          </div>
        </div>
      </div>
      <div className='absolute md:z-20 left-1/2 -translate-x-1/2  bottom-10 md:left-[90%]'>
        <button onClick={() => setIsopen(!isopen)} className='border uppercase text-sm rounded-md px-5 py-1 tracking-[3px] text-white'>Rules</button>
      </div>
      {isopen && <Rules isopen={isopen} setIsopen={setIsopen} />}
    </div>
  );
}

export default Chosen
