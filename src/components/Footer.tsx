import React from 'react';
import { PawPrint as Paw, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="https://pps.whatsapp.net/v/t61.24694-24/390326932_1333074764002083_3354302944913010286_n.jpg?ccb=11-4&oh=01_Q5AaIMtLWHOgTEkjvvReBc0DrCeyBU05_OxF1CHtJnZaxACE&oe=67B551D3&_nc_sid=5e03e0&_nc_cat=111" 
              alt="CUIDAR Logo" 
              className="h-12 w-12 rounded-full"
            />
            <span className="ml-2 text-xl font-bold">CUIDAR</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="#serviços" className="hover:text-gray-300 transition-colors">
              Serviços
            </a>
            <a href="#produtos" className="hover:text-gray-300 transition-colors">
              Produtos
            </a>
            <a href="#sobre" className="hover:text-gray-300 transition-colors">
              Sobre
            </a>
            <a href="#contato" className="hover:text-gray-300 transition-colors">
              Contato
            </a>
          </nav>
          <a 
            href="https://instagram.com/cuidarveterinaria" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-300 transition-colors mt-4 md:mt-0"
          >
            <Instagram className="w-6 h-6 mr-2" />
            @cuidarveterinaria
          </a>
        </div>
        <div className="border-t border-white border-opacity-20 pt-8 text-center">
          <p>&copy; {currentYear} CUIDAR - Clínica Veterinária. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;