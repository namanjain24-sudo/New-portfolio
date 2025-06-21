import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../constants';

const NavItems = ({ onClick = () => {}, isMobile = false }) => (
  <ul className={`flex ${isMobile ? 'flex-col space-y-6' : 'flex-row space-x-8'}`}>
    {navLinks.map((item, index) => (
      <li 
        key={item.id} 
        className={`${isMobile ? 'opacity-0 animate-slide-down' : ''}`}
        style={isMobile ? { animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' } : {}}
      >
        <a
          href={item.href}
          target={item.target}
          rel={item.target === '_blank' ? 'noopener noreferrer' : ''}
          className={`
            relative font-medium transition-all duration-300 group
            ${isMobile 
              ? 'text-lg text-white hover:text-blue-400 block py-2' 
              : 'text-gray-300 hover:text-white text-sm'
            }
          `}
          onClick={onClick}
        >
          {item.name}
          <span className={`
            absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 
            transition-all duration-300 group-hover:w-full
            ${isMobile ? 'hidden' : 'block'}
          `} />
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <header className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
        }
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a 
              href="/" 
              className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
              Naman Jain
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex">
              <NavItems />
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`
                md:hidden p-2 rounded-lg transition-all duration-300
                hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400/50
                ${isOpen ? 'text-white' : 'text-gray-300 hover:text-white'}
              `}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 z-40 transition-opacity duration-300 md:hidden
        ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeMenu}
        />
        
        {/* Menu Panel */}
        <div className={`
          absolute top-0 right-0 h-full w-80 max-w-[85vw]
          bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl
          border-l border-white/10 shadow-2xl
          transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <span className="text-white font-semibold text-lg">Menu</span>
              <button
                onClick={closeMenu}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 px-6 py-8">
              <NavItems onClick={closeMenu} isMobile={true} />
            </nav>

            {/* Menu Footer */}
            <div className="p-6 border-t border-white/10">
              <p className="text-gray-400 text-sm text-center">
                © 2024 Naman Jain
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
