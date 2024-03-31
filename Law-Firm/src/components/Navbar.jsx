import React, { useState } from 'react';
import img1 from "../assets/images/logo.png";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import  {Link} from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full flex z-10 justify-between items-center shadow-lg bg-white p-4'>
      <div className='flex items-center gap-4'>
        <img className='w-[53px]' src={img1} alt="Logo" />
        <h2 className='text-[25px]'>RHS Law Chambers</h2>
      </div>
      <div className='hidden md:flex items-center pr-16'>
      <Link to="/"><h2 className='text-[19px] hover:bg-black hover:text-white p-2 hover:rounded-lg'>About</h2></Link>
          <Link to="/services"><h2 className='text-[19px] hover:bg-black hover:text-white p-2 hover:rounded-lg'>Services</h2></Link>
          <Link to="/contact"><h2 className='text-[19px] hover:bg-black hover:text-white p-2 hover:rounded-lg'>Contact</h2></Link>
      </div>
      {isMenuOpen ? (
        <IoMdClose className='block md:hidden text-[28px] font-semibold mr-8 cursor-pointer' onClick={toggleMenu} />
      ) : (
        <CiMenuFries className='block md:hidden text-[28px] font-semibold mr-8 cursor-pointer' onClick={toggleMenu} />
      )}
      {isMenuOpen && (
        <div className="md:hidden z-30 absolute right-5 top-16 bg-white shadow-md rounded-lg p-4">
          <Link to="/"><h2 className='text-[19px] hover:bg-black hover:text-white p-2 hover:rounded-lg'>About</h2></Link>
          <Link to="/services"><h2 className='text-[19px] hover:bg-black hover:text-white p-2 hover:rounded-lg'>Services</h2></Link>
          <Link to="/contact"><h2 className='text-[19px] hover:bg-black hover:text-white p-2 hover:rounded-lg'>Contact</h2></Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
