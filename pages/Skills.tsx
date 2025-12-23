
import React from 'react';

const Skills: React.FC = () => {
  const technicalSkills = {
    backend: ['Java', 'C#', 'PHP', 'Python', 'Spring Boot', 'ASP.NET', 'Node.js', 'SQL'],
    frontend: ['React', 'Angular', 'Flutter', 'JavaScript', 'HTML/CSS', 'Thymeleaf', 'Mobile (Android)'],
    devops: ['AWS', 'Git', 'Linux', 'UML', 'Design Patterns', 'Scrum']
  };

  const certifications = [
    { title: 'Governo Aberto, Transparência e Dados Abertos', institution: 'Curso Livre', year: '2025', hours: '67,5h', status: 'Concluído', icon: 'policy' },
    { title: 'Fundamentos e Aplicações da IA para o Agente Público', institution: 'Curso Livre', year: '2025', hours: '112h', status: 'Concluído', icon: 'psychology' },
    { title: 'Inteligência Artificial e Machine Learning: O Guia Completo', institution: 'Curso Livre', year: '2024', hours: '25,5h', status: 'Concluído', icon: 'psychology' },
    { title: 'O que é lógica', institution: 'Curso Livre', year: '2022', hours: '5h', status: 'Concluído', icon: 'lightbulb' },
    { title: 'Spring Boot MVC', institution: 'Curso Livre', year: '2023', hours: '13h', status: 'Concluído', icon: 'terminal' },
    { title: 'Aprenda Flutter desenvolva Apps para Android Ios', institution: 'Curso Livre', year: '2023', hours: '60h', status: 'Concluído', icon: 'smartphone' },
    { title: 'FPA Portas Abertas', institution: 'Curso Livre', year: '2023', hours: '8h', status: 'Concluído', icon: 'school' },
    { title: 'Flutter', institution: 'Curso Livre', year: '2023', hours: '13h', status: 'Concluído', icon: 'smartphone' },
    { title: 'Estudos Algoritmos', institution: 'Curso Livre', year: '2023', hours: '21h', status: 'Concluído', icon: 'code' },
    { title: 'Programação BackEnd', institution: 'Curso Livre', year: '2022', hours: '9h', status: 'Concluído', icon: 'terminal' },
    { title: 'Curso de Python 3.0 do Básico ao Avançado', institution: 'Curso Livre', year: '2022', hours: '112,5h', status: 'Concluído', icon: 'terminal' },
    { title: 'Fundamentos da programação moderna com Kotlin', institution: 'Curso Livre', year: '2022', hours: '14h', status: 'Concluído', icon: 'smartphone' },
    { title: 'Spring Boot com Thymeleaf', institution: 'Curso Livre', year: '2022', hours: '9,5h', status: 'Concluído', icon: 'html' },
    { title: 'REACT JS - Formação completa', institution: 'Curso Livre', year: '2021', hours: '100h', status: 'Concluído', icon: 'code' },
    { title: 'FRONT END - Formação Front-End', institution: 'Curso Livre', year: '2021', hours: '160h', status: 'Concluído', icon: 'web' },
    { title: 'ACESSIBILIDADE WEB - Formação', institution: 'Curso Livre', year: '2021', hours: '20h', status: 'Concluído', icon: 'accessibility' },
    { title: 'HTML E CSS - Formação completa', institution: 'Curso Livre', year: '2021', hours: '190h', status: 'Concluído', icon: 'html' },
    { title: 'Certificação Amazon AWS Solution', institution: 'Curso Livre', year: '2021', hours: '26,5h', status: 'Concluído', icon: 'cloud' },
    { title: 'ELECTRON: Crie aplicativos Desktop com tecnologias Web', institution: 'Curso Livre', year: '2021', hours: '15h', status: 'Concluído', icon: 'desktop_windows' },
    { title: 'React js do zero ao avançado na prática', institution: 'Curso Livre', year: '2020', hours: '18h', status: 'Concluído', icon: 'code' },
    { title: 'Curso Completo de MySQL', institution: 'Curso Livre', year: '2020', hours: '50h', status: 'Concluído', icon: 'database' },
    { title: 'Javascript Ninja', institution: 'Curso Livre', year: '2020', hours: '42,5h', status: 'Concluído', icon: 'javascript' },
    { title: 'Curso Completo PHP - 7', institution: 'Curso Livre', year: '2020', hours: '33,5h', status: 'Concluído', icon: 'php' },
    { title: 'Criando aplicações web com Spring Boot', institution: 'Curso Livre', year: '2019', hours: '20h', status: 'Concluído', icon: 'terminal' },
    { title: 'Linguagem de Programação Java Básico', institution: 'Curso Livre', year: '2019', hours: '24h', status: 'Concluído', icon: 'coffee' },
    { title: 'Criando uma Loja Virtual com Android Studio', institution: 'Curso Livre', year: '2019', hours: '120h', status: 'Concluído', icon: 'shop' },
    { title: 'Programação em C#', institution: 'Curso Livre', year: '2018', hours: '117h', status: 'Concluído', icon: 'terminal' },
    { title: 'AngularJS Online', institution: 'Curso Livre', year: '2017', hours: '42h', status: 'Concluído', icon: 'code' },
    { title: 'Atualização em Programação ASP.NET - Avançado', institution: 'Curso Livre', year: '2016', hours: '40h', status: 'Concluído', icon: 'language' },
    { title: 'Curso Online de JSF (Java Server Faces)', institution: 'Curso Livre', year: '2014', hours: '50h', status: 'Concluído', icon: 'coffee' },
    { title: 'Padrões de Projeto com CSharp', institution: 'Curso Livre', year: '2014', hours: '66h', status: 'Concluído', icon: 'architecture' },
    { title: 'Gerenciamento de Servidores Linux', institution: 'Curso Livre', year: '2014', hours: '36h', status: 'Concluído', icon: 'dns' }
  ];

  const education = [
    {
      level: 'Mestrado',
      course: 'Mestrado em Educação',
      institution: 'Centro Universitário Salesiano São Paulo, UNISAL, Brasil',
      period: '2008 - 2009',
      details: [
        'Título: Limites e possibilidades do trabalho educativo voltado ao atendimento de pessoas com deficiência: inclusão no mercado, realidade capitalista e o Projeto Asas de uma ONG da cidade de Mogi Mirim - SP, Ano de Obtenção: 2009.',
        'Orientador: Dr. Marcos Francisco Martins.',
        'Palavras-chave: Terceiro setor; Práxis comunitária; Práxis social; Educação sócio-comunitária.',
        'Grande área: Ciências Humanas',
        'Setores de atividade: Educação.'
      ]
    },
    {
      level: 'Especialização',
      course: 'Especialização em Administração de Sistemas de Informação',
      institution: 'Universidade Federal de Lavras, UFLA, Brasil',
      period: '2004 - 2005',
      details: [
        'Carga Horária: 410h',
        'Título: ESCOLA TÉCNICA ESTADUAL PEDRO FERREIRA ALVES: ANÁLISE DE SUA ESTRUTURA ADMINISTRATIVA E SEUS SISTEMAS DE INFORMAÇÃO.',
        'Orientador: RÊMULO MAIA ALVES.'
      ]
    },
    {
      level: 'Aperfeiçoamento',
      course: 'Aperfeiçoamento em Programa Especial de Formação Pedagógica',
      institution: 'Universidade Metodista de Piracicaba, UNIMEP, Brasil',
      period: '1999 - 1999',
      details: [
        'Título: NÃO HOUVE. Ano de finalização: 1999.'
      ]
    },
    {
      level: 'Graduação',
      course: 'Graduação em Tecnologia Em Processamento de Dados',
      institution: 'Fundação Pinhalense de Ensino, FPE, Brasil',
      period: '1989 - 1995',
      details: []
    }
  ];

  return (
    <div className="w-full">
      <header className="relative w-full bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40 z-10"></div>
          <div className="w-full h-full bg-cover bg-center opacity-40" style={{ backgroundImage: 'url("https://picsum.photos/seed/tech/1200/400")' }}></div>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-10 py-16 md:py-24 flex flex-col justify-end min-h-[400px]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-blue-100 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="material-symbols-outlined text-sm">school</span>
              Formação &amp; Skills
            </div>
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
              Formação Acadêmica e Tecnológica
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              Um resumo técnico das tecnologias dominadas, certificações adquiridas e a jornada de aprendizado contínuo ao longo da carreira.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto w-full px-4 md:px-10 py-12 flex flex-col gap-12">
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined">school</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Formação Acadêmica</h2>
          </div>
          <div className="relative space-y-8">
            <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
            {education.map((item, index) => (
              <div key={index} className="group relative flex flex-col md:flex-row gap-6 md:pl-0">
                <div className={`hidden md:flex absolute left-8 top-6 h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white dark:border-background-dark shadow-sm z-10 ${index === 0 ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600 group-hover:bg-primary'} transition-colors`}></div>
                <div className="md:ml-16 w-full rounded-xl bg-white dark:bg-surface-dark p-6 shadow-sm border border-slate-100 dark:border-border-dark hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                        {item.level}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.course}</h3>
                      <p className="text-base text-slate-600 dark:text-slate-400 font-medium">{item.institution}</p>
                    </div>
                    <span className="text-sm font-bold text-slate-500 dark:text-slate-400 whitespace-nowrap bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-lg self-start">
                      {item.period}
                    </span>
                  </div>
                  {item.details.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                      <ul className="space-y-2">
                        {item.details.map((detail, i) => (
                          <li key={i} className="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2">
                            <span className="material-symbols-outlined text-[18px] text-primary/70 mt-0.5 shrink-0">check_small</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Habilidades Técnicas</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white dark:bg-surface-dark p-6 shadow-sm border border-slate-100 dark:border-border-dark">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Backend &amp; Linguagens</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.backend.map(skill => (
                  <span key={skill} className="inline-flex h-9 items-center rounded-lg bg-slate-100 dark:bg-slate-700 px-4 text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default">{skill}</span>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-white dark:bg-surface-dark p-6 shadow-sm border border-slate-100 dark:border-border-dark">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Frontend &amp; DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.frontend.map(skill => (
                  <span key={skill} className="inline-flex h-9 items-center rounded-lg bg-slate-100 dark:bg-slate-700 px-4 text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Certificações e Cursos</h2>
            </div>
          </div>
          <div className="relative space-y-6">
            <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
            {certifications.map((course, index) => (
              <div key={index} className="group relative flex flex-col md:flex-row gap-6 md:pl-0">
                <div className={`hidden md:flex absolute left-8 top-6 h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white dark:border-background-dark shadow-sm z-10 ${index === 0 ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600 group-hover:bg-primary'} transition-colors`}></div>
                <div className="md:ml-16 w-full rounded-xl bg-white dark:bg-surface-dark p-5 shadow-sm border border-slate-100 dark:border-border-dark transition-all hover:shadow-md hover:border-primary/30">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex gap-4">
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                        <span className="material-symbols-outlined text-3xl text-slate-400">{course.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2 md:line-clamp-none">{course.title}</h3>
                        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{course.institution}</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-900/20 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/20">{course.status}</span>
                          <span className="inline-flex items-center text-xs text-slate-500 dark:text-slate-400">
                            <span className="material-symbols-outlined text-[14px] mr-1">schedule</span>
                            {course.hours}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0 self-start sm:self-auto ml-16 sm:ml-0">
                      <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{course.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Skills;
