import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaBars, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const hideMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav>
        <div className='border-b-2 border-dashed border-[#a1724e] p-4 md:p-8'>
          <div className='flex items-center justify-between'>
            <div>
              <Link
                to='/'
                className='p-2 text-2xl font-extrabold hover:rounded hover:bg-[#a1724e] hover:text-white'
                onClick={hideMobileMenu}
              >
                animanga
              </Link>
            </div>
            {/* desktop menu */}
            <ul className='hidden md:flex md:gap-2'>
              <li>
                <Link
                  to='/seasonal-anime'
                  className='p-2 font-semibold hover:rounded hover:bg-[#a1724e] hover:text-white'
                >
                  seasonal
                </Link>
              </li>
              <li>
                <Link
                  to='/top-anime'
                  className='p-2 font-semibold hover:rounded hover:bg-[#a1724e] hover:text-white'
                >
                  top anime
                </Link>
              </li>
              <li>
                <Link
                  to='/top-manga'
                  className='p-2 font-semibold hover:rounded hover:bg-[#a1724e] hover:text-white'
                >
                  top manga
                </Link>
              </li>
            </ul>
            {/* burger button */}
            <button
              className='p-2 text-[#482307] hover:rounded hover:bg-[#a1724e] hover:text-white md:hidden'
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </div>
        {/* mobile menu */}
        {isMobileMenuOpen && (
          <div className='border-b-2 border-dashed border-[#a1724e] px-4 py-2 md:hidden'>
            <ul>
              <li>
                <Link
                  className='block p-2 font-semibold hover:rounded hover:bg-[#a1724e] hover:text-white'
                  to='/seasonal'
                  onClick={hideMobileMenu}
                >
                  seasonal
                </Link>
              </li>
              <li>
                <Link
                  className='block p-2 font-semibold hover:rounded hover:bg-[#a1724e] hover:text-white'
                  to='/top-anime'
                  onClick={hideMobileMenu}
                >
                  top anime
                </Link>
              </li>
              <li>
                <Link
                  className='block p-2 font-semibold hover:rounded hover:bg-[#a1724e] hover:text-white'
                  to='/top-manga'
                  onClick={hideMobileMenu}
                >
                  top manga
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
