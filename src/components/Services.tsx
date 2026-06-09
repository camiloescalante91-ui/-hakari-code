'use client';

export const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Desarrollo Web',
      description: 'Landing pages, sitios corporativos y e-commerce de alto rendimiento',
    },
    {
      icon: '💻',
      title: 'Software Empresarial',
      description: 'ERP, CRM, sistemas de inventario y facturación personalizados',
    },
    {
      icon: '📱',
      title: 'Desarrollo Móvil',
      description: 'Aplicaciones nativas y multiplataforma con Flutter y React Native',
    },
    {
      icon: '🎨',
      title: 'UX/UI Design',
      description: 'Diseño de interfaces modernas y experiencias de usuario excepcionales',
    },
    {
      icon: '🏗️',
      title: 'Infraestructura',
      description: 'Hosting, dominios, seguridad y mantenimiento de servidores',
    },
    {
      icon: '📊',
      title: 'Marketing Digital',
      description: 'SEO, redes sociales, Google Ads y estrategias de crecimiento',
    },
  ];

  return (
    <section className="py-20 bg-hakari-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-hakari-gold mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-hakari-gray text-lg">Soluciones tecnológicas completas para tu negocio</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-hakari-black border border-hakari-gold/30 rounded-lg hover:border-hakari-gold hover:shadow-lg hover:shadow-hakari-gold/30 transition transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-hakari-gold mb-2">{service.title}</h3>
              <p className="text-hakari-gray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
