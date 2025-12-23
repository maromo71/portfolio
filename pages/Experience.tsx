
import React from 'react';

const Experience: React.FC = () => {
  return (
    <div className="w-full">
      <header className="relative w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40 z-10"></div>
          <div className="w-full h-full bg-cover bg-center opacity-40" style={{ backgroundImage: 'url("https://picsum.photos/seed/work/1200/400")' }}></div>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-10 py-16 md:py-24 flex flex-col justify-end min-h-[400px]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-blue-100 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="material-symbols-outlined text-sm">work</span>
              Carreira Profissional
            </div>
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
              Atuação Profissional Detalhada
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              Histórico completo de vínculos, enquadramentos funcionais e disciplinas ministradas na Santa Lúcia, Fatec e CEETEPS.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto w-full px-4 md:px-10 py-12">
        <div className="flex flex-col gap-12">
          {/* Faculdade Santa Lúcia */}
          <section className="flex flex-col gap-6" id="santa-lucia">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white dark:bg-surface-dark rounded-lg shadow-sm border border-slate-200 dark:border-border-dark">
                <span className="material-symbols-outlined text-primary text-2xl">school</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Faculdade Santa Lúcia de Mogi Mirim</h2>
            </div>

            <div className="relative pl-4 md:pl-0">
              <div className="absolute left-[27px] top-3 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 hidden md:block"></div>

              <div className="relative grid grid-cols-1 md:grid-cols-[60px_1fr] gap-6 mb-8 group">
                <div className="hidden md:flex flex-col items-center pt-1 z-10">
                  <div className="flex items-center justify-center size-14 rounded-full bg-white dark:bg-background-dark border-[3px] border-slate-100 dark:border-slate-800 shadow-sm group-hover:border-primary/30 transition-colors">
                    <span className="material-symbols-outlined text-primary">menu_book</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">Professor Titular</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Departamento de Engenharia da Computação</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1 text-xs font-bold text-green-700 dark:text-green-300 ring-1 ring-inset ring-green-600/20">2007 - Presente</span>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">book</span> Disciplinas Ministradas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Programação Orientada a Objetos', 'Aplicações e Teoria de Grafos', 'Laboratório de Programação I e II', 'Programação de Dispositivos Móveis', 'Sistemas Distribuídos'].map(d => (
                        <span key={d} className="px-3 py-1.5 rounded bg-slate-100 dark:bg-slate-700 text-sm border border-slate-200 dark:border-slate-600 dark:text-slate-300">{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Fatec Mogi Mirim */}
          <section className="flex flex-col gap-6" id="fatec">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white dark:bg-surface-dark rounded-lg shadow-sm border border-slate-200 dark:border-border-dark">
                <span className="material-symbols-outlined text-red-600 text-2xl">account_balance</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Fatec Mogi Mirim</h2>
            </div>

            <div className="relative pl-4 md:pl-0">
              <div className="absolute left-[27px] top-3 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 hidden md:block"></div>

              <div className="relative grid grid-cols-1 md:grid-cols-[60px_1fr] gap-6 mb-8 group">
                <div className="hidden md:flex flex-col items-center pt-1 z-10">
                  <div className="flex items-center justify-center size-14 rounded-full bg-white dark:bg-background-dark border-[3px] border-slate-100 dark:border-slate-800 shadow-sm group-hover:border-red-600/30 transition-colors">
                    <span className="material-symbols-outlined text-red-600">school</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">Professor Titular</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Departamento de Análise e Desenvolvimento de Sistemas</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1 text-xs font-bold text-green-700 dark:text-green-300 ring-1 ring-inset ring-green-600/20">2010 - Presente</span>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">book</span> Disciplinas Ministradas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Algoritmos e Lógica de Programação', 'Linguagem de Programação', 'Programação Orientada a Objetos', 'Programação Web', 'CI/CD Integração e Entrega contínua'].map(d => (
                        <span key={d} className="px-3 py-1.5 rounded bg-slate-100 dark:bg-slate-700 text-sm border border-slate-200 dark:border-slate-600 dark:text-slate-300">{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative grid grid-cols-1 md:grid-cols-[60px_1fr] gap-6 mb-8 group">
                <div className="hidden md:flex flex-col items-center pt-1 z-10">
                  <div className="flex items-center justify-center size-14 rounded-full bg-white dark:bg-background-dark border-[3px] border-slate-100 dark:border-slate-800 shadow-sm group-hover:border-red-600/30 transition-colors">
                    <span className="material-symbols-outlined text-red-400">supervisor_account</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">Coordenador de Curso</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Coordenador do Departamento de Análise e Desenvolvimento de Sistemas</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-700 px-3 py-1 text-xs font-bold text-slate-600 dark:text-slate-300">2015 - 2018</span>
                  </div>
                  <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1 ml-1">
                    <li>Reestruturação da grade curricular conforme diretrizes do MEC.</li>
                    <li>Gestão do corpo docente e alocação de disciplinas.</li>
                    <li>Organização da Semana de Tecnologia anual.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CEETEPS */}
          <section className="flex flex-col gap-6" id="ceeteps">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white dark:bg-surface-dark rounded-lg shadow-sm border border-slate-200 dark:border-border-dark">
                <span className="material-symbols-outlined text-blue-500 text-2xl">account_balance</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">CEETEPS</h2>
            </div>
            <div className="relative pl-4 md:pl-0">
              <div className="absolute left-[27px] top-3 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 hidden md:block"></div>
              <div className="relative grid grid-cols-1 md:grid-cols-[60px_1fr] gap-6 group">
                <div className="hidden md:flex flex-col items-center pt-1 z-10">
                  <div className="flex items-center justify-center size-14 rounded-full bg-white dark:bg-background-dark border-[3px] border-slate-100 dark:border-slate-800 shadow-sm group-hover:border-blue-500/30 transition-colors">
                    <span className="material-symbols-outlined text-blue-500">code</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">Professor de Ensino Médio e Técnico</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">ETEC - Componente Curricular Técnico</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-3 py-1 text-xs font-bold text-green-700 dark:text-green-300 ring-1 ring-inset ring-green-600/20">1999 - presente</span>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">Disciplinas</p>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                      <li>Programação Web I e II</li>
                      <li>Desenvolvimento Mobile</li>
                      <li>Análise e Projeto de Sistemas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Experience;
