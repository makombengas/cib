
import { useEffect, useState } from 'react';
import  './scrollBar.scss';
import { CgScrollV } from "react-icons/cg";



const ScrollBar = () => {
  const [topScroll, setTopScroll] = useState(false);
    
   const handleIconClick = () =>{
     window.scrollTo({
       top: 0,
       behavior: 'smooth',
      
     })
    
    }
    
    useEffect(() =>{
      window.addEventListener('scroll', () =>{

        if(window.scrollY > 100){
         setTopScroll(true);
     
      }else{
       setTopScroll(false);
      }
      });
    },[])
  return (
    <div className='scrollBarContainer'>
      {topScroll && <CgScrollV  onClick={handleIconClick}/>}
    </div>
  )
}

export default ScrollBar