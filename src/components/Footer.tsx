'use client';

export const Footer = () => {
  return (
    <footer className="bg-hakari-black border-t border-hakari-gold/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-hakari-gold rounded-full flex items-center justify-center">
                <span className="text-hakari-black font-bold">🥷</span>
              </div>
              <span className="text-hakari-gold font-orbitron font-bold">HAKARI CODE</span>
            </div>
            <p className="text-hakari-gray text-sm">Tecnología al servicio de tu visión</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-hakari-gold font-bold mb-4">Servicios</h4>
            <ul className="space-y-2 text-hakari-gray text-sm">
              <li>
                <a href="#" className="hover:text-hakari-gold transition">
                  Desarrollo Web
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-hakari-gold transition">
                  Software Empresarial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-hakari-gold transition">
                  Desarrollo Móvil
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-hakari-gold font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-hakari-gray text-sm">
              <li>
                <a href="#" className="hover:text-hakari-gold transition">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-hakari-gold transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-hakari-gold transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-hakari-gold font-bold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-hakari-gray hover:text-hakari-gold transition">
                LinkedIn
              </a>
              <a href="#" className="text-hakari-gray hover:text-hakari-gold transition">
                Twitter
              </a>
              <a href="#" className="text-hakari-gray hover:text-hakari-gold transition">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-hakari-gold/20 pt-8 text-center text-hakari-gray text-sm">
          <p>© 2024 HAKARI CODE. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
