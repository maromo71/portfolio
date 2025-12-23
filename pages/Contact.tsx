
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Dúvida Acadêmica',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const encode = (data: any) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', subject: 'Dúvida Acadêmica', message: '' });
      })
      .catch(error => {
        console.error(error);
        setStatus('error');
      });
  };

  return (
    <div className="flex-1 w-full max-w-[1200px] mx-auto px-4 lg:px-10 py-10 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-primary font-bold tracking-wider text-sm uppercase">Fale Conosco</span>
            <h1 className="text-text-main-light dark:text-text-main-dark text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">Contato</h1>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-lg font-normal leading-relaxed">
              Tem alguma dúvida acadêmica, interesse em pesquisa ou proposta de colaboração? Entre em contato pelos canais abaixo ou utilize o formulário.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            {[
              { label: 'Endereço Profissional', value: 'Rua Ariovaldo Silveira Franco, 567 – Fatec Mogi Mirim', icon: 'location_on' },
              { label: 'Telefone Comercial', value: '(19) 3915-3900', icon: 'call' },
              { label: 'Homepage FATEC', value: 'http://www.fatecmm.cps.sp.gov.br/', icon: 'language', isLink: true },
              { label: 'Homepage Santa Lúcia', value: 'https://santalucia.br', icon: 'school', isLink: true },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark shadow-sm">
                <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-text-secondary-light dark:text-text-secondary-dark text-xs font-semibold uppercase tracking-wider mb-1">{item.label}</h3>
                  {item.isLink ? (
                    <a className="text-primary hover:underline font-medium leading-normal break-all" href={item.value} target="_blank" rel="noopener noreferrer">{item.value}</a>
                  ) : (
                    <p className="text-text-main-light dark:text-text-main-dark font-medium leading-normal whitespace-pre-line">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-border-light dark:border-border-dark mt-2">
            <p className="text-text-main-light dark:text-text-main-dark font-medium mb-4">Perfis Acadêmicos</p>
            <div className="flex flex-wrap gap-4">
              {[
                { label: 'Currículo Lattes', url: 'http://lattes.cnpq.br/6840992477372419', icon: 'description' },
                { label: 'ORCID', url: 'https://orcid.org/0000-0002-3632-247X', icon: 'fingerprint' }
              ].map((profile) => (
                <a key={profile.label} className="flex items-center gap-2 px-5 py-3 rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary/50 hover:bg-primary/5 transition-all group" href={profile.url} target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark group-hover:text-primary transition-colors">{profile.icon}</span>
                  <span className="text-text-main-light dark:text-text-main-dark font-semibold text-sm group-hover:text-primary transition-colors">{profile.label}</span>
                  <span className="material-symbols-outlined text-sm text-text-secondary-light dark:text-text-secondary-dark ml-1">open_in_new</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-surface-light dark:bg-surface-dark rounded-2xl p-6 lg:p-8 shadow-lg border border-border-light dark:border-border-dark">
            <h3 className="text-xl font-bold text-text-main-light dark:text-text-main-dark mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">mail</span>
              Enviar Mensagem
            </h3>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in">
                <div className="size-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h4 className="text-lg font-bold text-text-main-light dark:text-white mb-2">Mensagem Enviada!</h4>
                <p className="text-text-secondary-light dark:text-slate-400">Obrigado pelo contato. Retornarei em breve.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-primary font-bold hover:underline"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form
                className="flex flex-col gap-5"
                onSubmit={handleSubmit}
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden><label>Don’t fill this out if you’re human: <input name="bot-field" /></label></p>

                <label className="flex flex-col gap-2">
                  <span className="text-text-main-light dark:text-text-main-dark text-sm font-medium">Nome Completo</span>
                  <input
                    className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-4 py-3 text-text-main-light dark:text-text-main-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark transition-all"
                    placeholder="Seu nome"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-text-main-light dark:text-text-main-dark text-sm font-medium">E-mail Profissional</span>
                  <input
                    className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-4 py-3 text-text-main-light dark:text-text-main-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark transition-all"
                    placeholder="exemplo@dominio.com"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-text-main-light dark:text-text-main-dark text-sm font-medium">Assunto</span>
                  <select
                    className="w-full rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-4 py-3 text-text-main-light dark:text-text-main-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option>Dúvida Acadêmica</option>
                    <option>Proposta de Pesquisa</option>
                    <option>Convite para Evento</option>
                    <option>Outros</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-text-main-light dark:text-text-main-dark text-sm font-medium">Mensagem</span>
                  <textarea
                    className="w-full resize-y rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-4 py-3 text-text-main-light dark:text-text-main-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark transition-all"
                    placeholder="Digite sua mensagem aqui..."
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </label>

                {status === 'error' && (
                  <p className="text-red-500 text-sm text-center">Ocorreu um erro ao enviar. Tente novamente.</p>
                )}

                <button
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-primary-hover hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="material-symbols-outlined text-lg animate-spin">refresh</span>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar Mensagem</span>
                      <span className="material-symbols-outlined text-lg">send</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          <div className="absolute -z-10 -top-6 -right-6 size-24 rounded-full bg-primary/10 blur-2xl"></div>
          <div className="absolute -z-10 -bottom-6 -left-6 size-32 rounded-full bg-primary/5 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
