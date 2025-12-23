
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Publications from './pages/Publications';
import Experience from './pages/Experience';
import Events from './pages/Events';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/formacao', label: 'Formação' },
    { path: '/producao', label: 'Produção' },
    { path: '/atuacao', label: 'Atuação' },
    { path: '/bancas', label: 'Bancas' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-border-light dark:border-border-dark bg-surface-light/80 dark:bg-surface-dark/90 backdrop-blur-md">
      <div className="layout-container flex justify-center w-full">
        <div className="px-4 md:px-10 py-3 flex items-center justify-between w-full max-w-7xl">
          <Link to="/" className="flex items-center gap-4 text-text-main-light dark:text-white">
            <div className="flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Marcos R. Moraes</h2>
          </Link>

          <div className="hidden md:flex flex-1 justify-end items-center gap-8">
            <nav className="flex items-center gap-6 lg:gap-9">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium leading-normal transition-colors ${location.pathname === link.path
                    ? 'text-primary'
                    : 'text-text-main-light dark:text-slate-200 hover:text-primary'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link to="/contato">
              <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary-hover transition-colors shadow-sm hover:shadow-md">
                <span className="truncate">Fale Comigo</span>
              </button>
            </Link>
          </div>

          <button
            className="md:hidden text-text-main-light dark:text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-base font-medium ${location.pathname === link.path ? 'text-primary' : 'text-text-main-light dark:text-slate-200'
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contato" onClick={() => setIsMenuOpen(false)}>
            <button className="w-full bg-primary text-white py-3 rounded-lg font-bold">Fale Comigo</button>
          </Link>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="w-full border-t border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
    <div className="layout-container flex flex-col items-center justify-center w-full px-4 md:px-10 lg:px-40 py-10">
      <div className="flex flex-col gap-6 text-center max-w-7xl w-full">
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: 'work', url: 'https://www.linkedin.com/in/maromo/' },
            { icon: 'school', url: 'http://lattes.cnpq.br/6840992477372419' },
            { icon: 'code', url: 'https://github.com/maromo71' },
            { icon: 'mail', url: 'mailto:marcos.moraes6@fatec.sp.gov.br' }
          ].map((item) => (
            <a
              key={item.icon}
              href={item.url}
              target={item.icon === 'mail' ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group"
            >
              <div className="text-text-secondary-light dark:text-slate-400 group-hover:text-primary transition-colors flex items-center justify-center bg-slate-100 dark:bg-slate-800 p-3 rounded-full">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
            </a>
          ))}
        </div>
        <div className="h-px w-full bg-border-light dark:bg-border-dark my-2"></div>
        <p className="text-text-secondary-light dark:text-slate-500 text-sm font-normal leading-normal">
          © 2026 Marcos Roberto de Moraes. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <Header />
        <main className="flex-grow flex flex-col items-center w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formacao" element={<Skills />} />
            <Route path="/producao" element={<Publications />} />
            <Route path="/atuacao" element={<Experience />} />
            <Route path="/bancas" element={<Events />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
