
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <section className="w-full max-w-[1280px] px-4 md:px-10 lg:px-40 py-12 md:py-20 flex flex-col justify-center grow">
      <div className="container-queries">
        <div className="flex flex-col-reverse gap-8 md:gap-12 lg:gap-20 md:flex-row items-center">
          <div className="flex flex-col gap-6 flex-1 text-center md:text-left items-center md:items-start">
            <div className="flex flex-col gap-3">
              <h2 className="text-primary text-sm font-bold uppercase tracking-wider">
                Mestre e Professor
              </h2>
              <h1 className="text-text-main-light dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
                Marcos Roberto de Moraes
              </h1>
              <p className="text-text-secondary-light dark:text-slate-300 text-base md:text-lg font-normal leading-relaxed max-w-[600px]">
                Com vasta experiência acadêmica e prática na área de Engenharia da Compuação, dedico minha carreira ao ensino
                e à gestão educacional, formando a próxima geração de tecnólogos e engenheiros.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start w-full mt-2">
              <Link to="/atuacao">
                <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary-hover transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                  <span className="truncate">Ver Trajetória</span>
                </button>
              </Link>
              <a
                href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4255814Y9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-main-light dark:text-slate-200 text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">description</span>
                  <span className="truncate">Acessar Lattes</span>
                </span>
              </a>
            </div>
          </div>
          <div className="w-full max-w-[400px] md:max-w-[480px] flex-1 flex justify-center">
            <div
              className="w-full aspect-square bg-top bg-no-repeat bg-cover rounded-2xl shadow-2xl relative overflow-hidden group bg-primary/20 dark:bg-primary/30"
              style={{ backgroundImage: "url('/images/profile.png')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
