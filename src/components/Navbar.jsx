
import logoImg from '../assets/logoImg.svg'
import { close,menu } from '../assets'
import {navLinks} from '../constants/index'
import { useState } from 'react'

const Navbar = () => {
  const [active , setActive] = useState(false)
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
         <div className='flex items-end'>
            <img src={logoImg} className='w-[32px] h-[32px]' />
            <div className='flex space-x-0 text-[18px] font-semibold pl-1 font-poppins'>
                <h1 className='text-white'>Hoo</h1>
                <h1 className='text-lightBlue'>Bank</h1>
            </div>
         </div>
         <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((nav,index) => (
                <li key={nav.id} 
                    className={`font-poppins font-normal cursor-pointer text-[16px]
                    ${index === navLinks.length -1 ? "mr-0" : "mr-[56px]"}
                    ${active === nav.title ? "text-white" : "text-dimWhite"}`}
                    onClick={() => setActive(nav.title)}>
                        <a>{nav.title}</a>
                </li>
            ))}
         </ul>
         <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={toggle ? close : menu} alt='menuLogo'
              className='cursor-pointer w-[28px] h-[28px] object-contain' 
              onClick={() => setToggle((prev) => !prev)}
            />
            
            <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-xl sidebar z-[10]`}>
                <ul className='list-none flex  justify-end items-start flex-1 flex-col'>
                  {navLinks.map((nav,index) => (
                    <li key={nav.id} 
                      className={`font-poppins font-normal cursor-pointer text-[16px]
                      ${index === navLinks.length -1 ? "mb-0" : "mb-10"}
                      ${active === nav.title ? "text-white" : "text-dimWhite"}`}
                      onClick={() => setActive(nav.title)}>
                        <a>{nav.title}</a>
                    </li>
                  ))}
                </ul>
            </div>
         </div>
    </nav>
  )
}

export default Navbar