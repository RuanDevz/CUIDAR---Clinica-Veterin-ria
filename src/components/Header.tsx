import React, { useState } from 'react';
import { PawPrint as Paw, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Home', 'Serviços', 'Produtos', 'Sobre', 'Contato'];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(item.toLowerCase());
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center" data-aos="fade-right" data-aos-duration="800">
            <img 
              src="https://pps.whatsapp.net/v/t61.24694-24/390326932_1333074764002083_3354302944913010286_n.jpg?ccb=11-4&oh=01_Q5AaIMtLWHOgTEkjvvReBc0DrCeyBU05_OxF1CHtJnZaxACE&oe=67B551D3&_nc_sid=5e03e0&_nc_cat=111" 
              alt="CUIDAR Logo" 
              className="h-12 w-12 rounded-full"
            />
            <span className="ml-2 text-xl font-bold text-primary">CUIDAR</span>
          </div>

          <nav className="hidden md:flex space-x-8" data-aos="fade-left" data-aos-duration="800">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item)}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-out
            ${isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item)}
              className="block py-2 text-gray-600 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
