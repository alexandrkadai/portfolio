import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../style';
import { navLinks } from '../Constants';
import { socLinks } from '../Constants';
import { logowhite, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logowhite}
            alt="logo"
            className="w-10 h-10 object-contain rounded-full scale-200"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">Alex Kaday</p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          <ul className="list-none flex flex-row justify-end gap-10" >
          {socLinks.map((item) => (
            <li key={item.id} className='mt-5px'> <a href={item.link} ><img className='w-[25px] h-[25px] bg-white rounded'  src={item.icon}/></a></li>
          ))}
          
          </ul>
          {navLinks.map((item) => (
            <li
              key={item.id}
              className={`${
                active === item.title ? 'text-white' : 'text-secondary'
              } hover: text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(item.title);
              }}>
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />


          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-gradient-to-b from-purple-500 to-green-500 absolute top-4 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl flex flex-col`}>
            <ul className="list-none flex flex-col justify-end items-start gap-4">
            <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer absolute top-2 right-2"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
           
              {navLinks.map((item) => (
                <li
                  key={item.id}
                  className={`${
                    active === item.title ? 'text-white' : 'text-secondary'
                  } font-poppins  hover: text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(item.title);
                    setToggle(!toggle);
                  }}>
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              ))}
            </ul>
            <ul className="list-none flex flex-row justify-end gap-10 pt-10" key="Murchaka">
      
            {socLinks.map((item) => (
              <li key={item.id} className='mt-5px'> <a href={item.link} ><img className='w-[25px] h-[25px] bg-white rounded'  src={item.icon}/></a></li>
            ))}
            
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
