import { HiMail, HiOutlineClock } from 'react-icons/hi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { CgMenuRightAlt } from 'react-icons/cg';
import { TfiClose } from 'react-icons/tfi';
import logoecv from '../assets/logoecv.png';
import { NavLinks } from '../constants';
import { useState } from 'react';

function Navbar() {

    const [toggle, setToggle] = useState(false);

    



  return (
    <div className='back-header h-[100vh]'>
        <div className='background-overlay'></div>
        <div className=' flex sm:text-base justify-between p-4 text-white max-w-7xl m-auto text-sm relative md:flex-row-reverse'>
            <div className='sm:flex items-end'>
                <div className='sm:flex justify-center mr-4 items-center hidden'>
                    <span className='mr-2'><><HiMail /></></span>
                    <p>email@driveschool.com</p>
                </div>
                <div className='flex mt-2 justify-center items-center'>
                    <span className='mr-2'><BsFillTelephoneFill /></span>
                    <p>+33 344886056</p>
                </div>
            </div>
            <div className='flex mt-2 justify-center items-center'>
                <span className='mr-2'><><HiOutlineClock /></></span>
                <p>Mar - Sam : 8am - 9pm</p>
            </div>
        </div>
        <div className='border-b border-gray-200/50 w-[80%] m-auto max-w-6xl relative'/>
        <div className='flex p-4 justify-between items-center text-white max-w-7xl m-auto relative'>
            <img src={logoecv} alt="logo ecv" className='sm:w-[150px] w-[130px]'/>

            <nav className={`w-[60%]`}>
                <ul className='md:flex hidden justify-between w-full uppercase'>
                    {NavLinks.map((nav, index) => (

                        <li 
                        key={nav.id} 
                        className='first:text-primary first:border-b-2 first:border-primary border-hov'>
                            
                            <a href={`#${nav.id}`}>
                                {nav.title}
                            </a>
                            
                        </li>

                    ))}
                </ul>
                
            </nav>

            <div className='md:hidden'>
                {toggle ? 
                <TfiClose className='w-[28px] h-[25px] object-contain' onClick={() => setToggle(false)} /> 
                : 
                <CgMenuRightAlt className='w-[28px] h-[28px] object-contain' onClick={() => setToggle(true)} 
                />}

                    <div >
                        <nav className={`${toggle ? "flex" : "hidden"} bg-gray-900/90 absolute top-200 right-0 mx-4 my-4 min-w-[140px] rounded-xl sidebar justify-center z-[10]`}>

                        <ul className='flex flex-col justify-end items-center uppercase'>
                            {NavLinks.map((nav, index) => (
                                
                                <li 
                                key={nav.id} 
                                className='first:text-primary first:border-b-2 first:border-primary border-hov m-2'>
                                
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                                
                            </li>

))}
                        </ul>
                    </nav>
                    </div>
            </div>
                {/* {!toggle ?
                <span className='' onClick={handleMobileMenu}>
                    <CgMenuRightAlt />
                </span>
                :
                <span>
                    <GrClose onClick={handleMobileMenu}/>
                </span>    
                } */}
        </div>
    </div>
  )
}

export default Navbar