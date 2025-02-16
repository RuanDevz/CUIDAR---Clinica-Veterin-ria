import React from 'react';
import { Calendar, Clock, Instagram, PawPrint, MapPin } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/83933369925', '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?ixlib=rb-4.0.3")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div 
            className="mb-8"
            data-aos="fade-up" 
            data-aos-duration="1000"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Amor e Cuidado em Cada Patinha
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
              Onde cada pet é tratado como família, e cada visita é uma experiência de carinho e dedicação. Sua confiança é nossa maior recompensa.
            </p>
          </div>
          


          <button 
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-full flex items-center transition-colors"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <Calendar className="mr-2" />
            Agende uma consulta
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;