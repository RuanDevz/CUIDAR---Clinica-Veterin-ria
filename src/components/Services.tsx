import React from 'react';
import { Syringe, Stethoscope, Pill, Scissors, FlaskRound as Flask, ShowerHead } from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'Cirurgias',
    description: 'Procedimentos cirúrgicos realizados por especialistas',
  },
  {
    icon: Flask,
    title: 'Exames',
    description: 'Diagnósticos precisos e rápidos',
  },
  {
    icon: Pill,
    title: 'Farmácia',
    description: 'Medicamentos e produtos veterinários',
  },
  {
    icon: Syringe,
    title: 'Vacinação',
    description: 'Proteção completa para seu pet',
  },
  {
    icon: ShowerHead,
    title: 'Banho',
    description: 'Higiene e cuidados especiais',
  },
  {
    icon: Scissors,
    title: 'Tosa',
    description: 'Estética profissional para seu pet',
  },
];

const Services = () => {
  return (
    <section id="serviços" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-12 text-primary"
          data-aos="fade-up"
        >
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <service.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;