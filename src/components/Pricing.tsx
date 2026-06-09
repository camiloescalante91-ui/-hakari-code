'use client';

export const Pricing = () => {
  const plans = [
    {
      name: 'Landing Page',
      price: '$499',
      description: 'Página de conversión profesional',
      features: ['Diseño responsivo', 'SEO básico', 'Formulario de contacto', 'Hosting incluido'],
    },
    {
      name: 'Página Web Empresarial',
      price: '$1,299',
      description: 'Sitio completo con múltiples páginas',
      features: [
        'Hasta 10 páginas',
        'Blog integrado',
        'SEO avanzado',
        'Hosting + dominio',
        'Email empresarial',
      ],
      featured: true,
    },
    {
      name: 'Tienda Virtual',
      price: '$2,499',
      description: 'E-commerce completo con pagos',
      features: [
        'Catálogo ilimitado',
        'Pasarela de pagos',
        'Inventario automatizado',
        'Sistema de órdenes',
        'Análiticas avanzadas',
      ],
    },
  ];

  return (
    <section className="py-20 bg-hakari-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-hakari-gold mb-4">
            Planes y Precios
          </h2>
          <p className="text-hakari-gray text-lg">Selecciona el plan que se adapte a tu negocio</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg border-2 transition transform hover:scale-105 ${
                plan.featured
                  ? 'border-hakari-gold bg-hakari-dark shadow-lg shadow-hakari-gold/30 -translate-y-4'
                  : 'border-hakari-gold/30 bg-hakari-black hover:border-hakari-gold'
              }`}
            >
              {plan.featured && (
                <div className="text-center mb-4">
                  <span className="bg-hakari-red text-white px-4 py-1 rounded-full text-sm font-bold">
                    Más Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-hakari-gold mb-2">{plan.name}</h3>
              <p className="text-hakari-gray mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-hakari-gray">/proyecto</span>
              </div>

              <button
                className={`w-full py-2 rounded font-bold transition mb-6 ${
                  plan.featured
                    ? 'bg-hakari-gold text-hakari-black hover:bg-hakari-red'
                    : 'border-2 border-hakari-gold text-hakari-gold hover:bg-hakari-gold hover:text-hakari-black'
                }`}
              >
                Solicitar Cotización
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-hakari-gray flex items-center">
                    <span className="text-hakari-gold mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
