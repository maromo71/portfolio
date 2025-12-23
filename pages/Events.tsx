
import React from 'react';

const Events: React.FC = () => {
  return (
    <div className="w-full">
      <header className="relative w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40 z-10"></div>
          <div className="w-full h-full bg-cover bg-center opacity-40" style={{ backgroundImage: 'url("https://picsum.photos/seed/university/1200/400")' }}></div>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-10 py-16 md:py-24 flex flex-col justify-end min-h-[400px]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-blue-100 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="material-symbols-outlined text-sm">history_edu</span>
              Trajetória Acadêmica
            </div>
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
              Trajetória em Avaliação e Orientação
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              Uma atuação contínua na formação de novos profissionais desde 2010.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto w-full px-4 md:px-10 py-12 flex justify-center">
        <div className="w-full max-w-4xl">
          <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
            <div className="flex flex-col gap-6 text-slate-700 dark:text-slate-300 text-lg leading-relaxed text-justify">
              <p>
                Mais do que um requisito acadêmico, as bancas de Trabalho de Conclusão de Curso (TCC) representam o momento de consolidação do conhecimento. Desde 2010, mantenho uma atuação ininterrupta como membro avaliador e orientador nas Instituições de Ensino Superior onde leciono.
              </p>
              <p>
                Minha agenda inclui participações semestrais nas bancas de Análise e Desenvolvimento de Sistemas e anuais nos cursos de Engenharia de Computação. Essa constância reflete meu compromisso não apenas com o rigor técnico, mas com a oportunidade privilegiada de orientar e testemunhar a evolução dos alunos na reta final de sua graduação.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;
