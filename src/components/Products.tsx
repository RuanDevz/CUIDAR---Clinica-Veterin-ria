import React from 'react';

const products = [
  {
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1',
    name: 'Ração Premium',
    price: 'R$ 89,90',
  },
  {
    image: 'https://vetpaiol.com.br/wp-content/uploads/2023/05/golden-retriever-dog-puppy-playing-with-toy-PHFQKHE-e1561580790384-1024x1024.jpg',
    name: 'Brinquedos',
    price: 'A partir de R$ 19,90',
  },
  {
    image: 'https://cdn0.peritoanimal.com.br/pt/posts/8/8/3/acessorios_para_cachorro_guia_completo_23388_orig.jpg',
    name: 'Acessórios',
    price: 'A partir de R$ 29,90',
  },
];

const Products = () => {
  return (
    <section id="produtos" className="py-20">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold text-center mb-12 text-primary"
          data-aos="fade-up"
        >
          Produtos em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group relative overflow-hidden rounded-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;