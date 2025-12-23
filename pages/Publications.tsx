
import React from 'react';

const Publications: React.FC = () => {
  const stats = [
    { label: 'Artigos', value: '4', icon: 'article', color: 'text-primary', bg: 'bg-blue-50 dark:bg-blue-900/30' },
    { label: 'Livros', value: '8', icon: 'library_books', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-900/30' },
    { label: 'Projetos', value: '0', icon: 'engineering', color: 'text-green-600 dark:text-green-400', bg: 'bg-green-50 dark:bg-green-900/30' },
    { label: 'Citações', value: '450+', icon: 'format_quote', color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-50 dark:bg-orange-900/30' },
  ];

  const articles = [
    {
      year: '2025',
      journal: 'Artigo',
      title: 'CogniLens: Uma plataforma para Coordenação e Análise Automatizada de Tarefas',
      description: 'Publicação recente sobre plataforma de automação e análise de tarefas.'
    },
    {
      year: '2019',
      journal: 'Artigo',
      title: 'Aplicativo mobile para o controle de assiduidade em monitorias',
      description: 'Desenvolvimento de solução móvel para gestão educacional.'
    },
    {
      year: '2019',
      journal: 'Artigo',
      title: 'Desenvolvimento de um protótipo de software de reconhecimento facial',
      description: 'Pesquisa e implementação de protótipo utilizando tecnologias de visão computacional.'
    },
    {
      year: '2012',
      journal: 'Artigo',
      title: 'Testes Automatizados',
      description: 'Estudo sobre práticas e metodologias de testes automatizados de software.'
    }
  ];

  const books = [
    { year: '2024', title: 'Fundamentos da lógica e programação: um guia prático para iniciante', type: 'Livro' },
    { year: '2021', title: 'Electron: um guia prático: desenvolvendo aplicativos desktop', type: 'Livro' },
    { year: '2021', title: 'Programação Web II PHP 7.4', type: 'Livro' },
    { year: '2019', title: 'Universitas - Caderno de Estudos e Pesquisa (Protótipo Reconhecimento Facial)', type: 'Capítulo de Livro' },
    { year: '2012', title: 'Universitas - Caderno de Estudos e Pesquisas (Testes Automatizados)', type: 'Capítulo de Livro' },
    { year: '2010', title: 'Universitas - Caderno de Estudos e Pesquisas (Tabelas de Dispersão)', type: 'Capítulo de Livro' },
    { year: '2009', title: '3 - Informática', type: 'Livro' },
    { year: '2008', title: 'Informática e Contabilidade', type: 'Livro' }
  ];

  return (
    <div className="w-full">
      <header className="relative w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40 z-10"></div>
          <div className="w-full h-full bg-cover bg-center opacity-40" style={{ backgroundImage: 'url("https://picsum.photos/1200/400")' }}></div>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-10 py-16 md:py-24 flex flex-col justify-end min-h-[400px]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-blue-100 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="material-symbols-outlined text-sm">history_edu</span>
              Produção Acadêmica
            </div>
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
              Produção Bibliográfica e Projetos
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              Um compêndio de artigos publicados, livros, capítulos e a trajetória completa em projetos de pesquisa e desenvolvimento tecnológico.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto w-full px-4 md:px-10 py-12 flex flex-col lg:flex-row gap-10">
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24 space-y-8">
            <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
              <h3 className="text-xs font-bold text-text-secondary-light uppercase tracking-wider mb-3">Filtrar</h3>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-2.5 text-gray-400 text-[20px]">search</span>
                <input className="w-full pl-10 pr-4 py-2 bg-background-light dark:bg-background-dark border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/50 text-text-main-light dark:text-text-main-dark placeholder-gray-500" placeholder="Buscar..." type="text" />
              </div>
            </div>
            <nav className="flex flex-col space-y-1">
              {[
                { label: 'Resumo Geral', id: 'resumo-geral', icon: 'dashboard' },
                { label: 'Livros e Capítulos', id: 'livros-e-capitulos', icon: 'menu_book' },
                { label: 'Artigos em Periódicos', id: 'artigos-em-periodicos', icon: 'description' },
                { label: 'Projetos de Pesquisa', id: 'projetos-de-pesquisa', icon: 'biotech' }
              ].map((item, i) => (
                <button
                  key={item.label}
                  onClick={() => {
                    const element = document.getElementById(item.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left ${i === 0 ? 'bg-primary/10 text-primary font-bold' : 'text-text-secondary-light dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium'}`}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <div className="flex-1 flex flex-col gap-12">
          <section id="resumo-geral" className="scroll-mt-28">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map(stat => (
                <div key={stat.label} className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm flex flex-col items-start gap-2">
                  <div className={`p-2 ${stat.bg} rounded-lg ${stat.color} mb-1`}>
                    <span className="material-symbols-outlined">{stat.icon}</span>
                  </div>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs font-bold uppercase tracking-wide">{stat.label}</p>
                  <p className="text-3xl font-bold text-text-main-light dark:text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="livros-e-capitulos" className="scroll-mt-28">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-border-light dark:border-border-dark">
              <h2 className="text-2xl font-bold text-text-main-light dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-purple-600">menu_book</span>
                Livros e Capítulos
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-1">
              {books.map((book, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-center w-12 h-16 bg-purple-100 dark:bg-purple-900/30 rounded text-purple-600 dark:text-purple-400 shrink-0">
                    <span className="material-symbols-outlined">book</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">{book.type} — {book.year}</span>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-tight mt-1">{book.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="artigos-em-periodicos" className="scroll-mt-28">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-border-light dark:border-border-dark">
              <h2 className="text-2xl font-bold text-text-main-light dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">description</span>
                Artigos Publicados
              </h2>
            </div>
            <div className="space-y-4">
              {articles.map((article, i) => (
                <article key={i} className="group bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary group-hover:w-1.5 transition-all"></div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark">
                      <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{article.year}</span>
                      <span>•</span>
                      <span className="uppercase tracking-wide">{article.journal}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-text-main-light dark:text-white mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-text-secondary-light dark:text-gray-400 mb-4 line-clamp-2">
                      {article.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="projetos-de-pesquisa" className="scroll-mt-28">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-border-light dark:border-border-dark">
              <h2 className="text-2xl font-bold text-text-main-light dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600">biotech</span>
                Projetos de Pesquisa
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-text-secondary-light dark:text-gray-300 italic">Nenhum projeto de pesquisa ativo no momento.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Publications;
