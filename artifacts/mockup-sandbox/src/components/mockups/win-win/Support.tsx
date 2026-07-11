import React, { useState } from 'react';
import { 
  Mail, 
  MessageCircle, 
  Plus, 
  Ticket as TicketIcon, 
  ChevronDown, 
  ExternalLink, 
  Clock, 
  CheckCircle, 
  XCircle, 
  ChevronRight 
} from 'lucide-react';

const mockTickets = [
  {
    id: '#TK-8492',
    subject: 'Erreur lors de mon dernier dépôt',
    status: 'Ouvert',
    category: 'Portefeuille',
    date: '12 Oct 2023',
  },
  {
    id: '#TK-8311',
    subject: 'Changement de mon adresse email',
    status: 'Répondu',
    category: 'Technique',
    date: '08 Oct 2023',
  },
  {
    id: '#TK-7904',
    subject: 'Explication sur le plan Hyper Profit',
    status: 'Fermé',
    category: 'Investissement',
    date: '25 Sep 2023',
  }
];

const faqs = [
  {
    q: 'Comment retirer mes gains ?',
    a: 'Pour retirer vos gains, rendez-vous dans la section "Portefeuille", cliquez sur "Retrait", choisissez votre méthode de paiement préférée et suivez les instructions à l\'écran. Les retraits sont généralement traités sous 24 à 48 heures.'
  },
  {
    q: 'Quel est le montant minimum d\'investissement ?',
    a: 'Le montant minimum pour commencer à investir sur Win Win est de 50€. Cela vous permet de tester nos services avec un risque limité.'
  },
  {
    q: 'Comment fonctionne le plan Hyper Profit ?',
    a: 'Le plan Hyper Profit utilise nos algorithmes de trading haute fréquence pour générer des rendements optimisés. Les fonds sont bloqués pendant une période minimale de 30 jours, durant laquelle les intérêts sont composés quotidiennement.'
  },
  {
    q: 'Délais de traitement des retraits ?',
    a: 'Les demandes de retrait sont examinées manuellement pour des raisons de sécurité. Le traitement prend généralement entre 24h et 48h ouvrées. Une fois approuvé, le délai dépend de la blockchain ou de votre banque.'
  }
];

export function Support() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const StatusIcon = ({ status }: { status: string }) => {
    switch(status) {
      case 'Ouvert': return <Clock className="w-4 h-4 text-amber-500" />;
      case 'Répondu': return <CheckCircle className="w-4 h-4 text-emerald-500" />;
      case 'Fermé': return <XCircle className="w-4 h-4 text-slate-400" />;
      default: return null;
    }
  };

  const getStatusClasses = (status: string) => {
    switch(status) {
      case 'Ouvert': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Répondu': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Fermé': return 'bg-slate-100 text-slate-600 border-slate-200';
      default: return 'bg-slate-100 text-slate-600 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 pt-16 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">Centre de Support</h1>
          <p className="text-lg text-slate-500 max-w-2xl">Notre équipe de spécialistes est à votre disposition. Nous nous engageons à vous répondre sous 24h ouvrées.</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Contact Channels */}
        <section>
          <h2 className="text-xl font-semibold text-slate-800 mb-6">Comment pouvons-nous vous aider ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Ticket Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start h-full">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <TicketIcon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Nouveau Ticket</h3>
              <p className="text-slate-500 text-sm mb-6 flex-grow">Pour les questions complexes ou nécessitant un suivi détaillé de votre compte.</p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Créer un ticket
              </button>
            </div>

            {/* Telegram Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start h-full">
              <div className="w-12 h-12 bg-sky-50 text-sky-500 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Telegram</h3>
              <p className="text-slate-500 text-sm mb-6 flex-grow">Idéal pour les questions rapides et générales. Notre communauté peut aussi vous aider.</p>
              <a 
                href="#telegram"
                onClick={(e) => e.preventDefault()}
                className="w-full bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Rejoindre le groupe
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start h-full">
              <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Email direct</h3>
              <p className="text-slate-500 text-sm mb-6 flex-grow">Vous préférez l'email classique ? Envoyez-nous un message directement.</p>
              <a 
                href="#email"
                onClick={(e) => e.preventDefault()}
                className="w-full bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                support@win-win.crypto
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>
        </section>

        {/* My Tickets */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-slate-800">Mes Tickets Récents</h2>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1">
              Voir tout l'historique <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="divide-y divide-slate-100">
              {mockTickets.map((ticket, i) => (
                <div key={i} className="p-4 sm:p-6 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="hidden sm:flex mt-1">
                      <StatusIcon status={ticket.status} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-sm font-medium text-slate-500">{ticket.id}</span>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full border flex items-center gap-1.5 ${getStatusClasses(ticket.status)}`}>
                          <span className="sm:hidden"><StatusIcon status={ticket.status} /></span>
                          {ticket.status}
                        </span>
                        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                          {ticket.category}
                        </span>
                      </div>
                      <h4 className="text-base font-medium text-slate-900">{ticket.subject}</h4>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-auto">
                    <span className="text-sm text-slate-500">{ticket.date}</span>
                    <button className="text-sm font-medium bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg transition-colors">
                      Voir
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl">
          <h2 className="text-xl font-semibold text-slate-800 mb-6">Foire Aux Questions</h2>
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="divide-y divide-slate-100">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-slate-100 last:border-0">
                  <button 
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors focus:outline-none group"
                  >
                    <span className="text-base font-medium text-slate-900 pr-8 group-hover:text-blue-600 transition-colors">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${openFaqIndex === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === i ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Ticket Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-900">Créer un nouveau ticket</h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-md hover:bg-slate-100"
              >
                <XCircle className="w-5 h-5" />
              </button>
            </div>
            
            <form className="p-6 space-y-5" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">Sujet</label>
                <input 
                  type="text" 
                  placeholder="Ex: Problème de connexion" 
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors placeholder:text-slate-400"
                  required
                />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">Catégorie</label>
                <div className="relative">
                  <select 
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-2.5 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                    required
                  >
                    <option value="">Sélectionnez une catégorie</option>
                    <option value="wallet">Portefeuille & Dépôts</option>
                    <option value="invest">Investissement & Plans</option>
                    <option value="tech">Problème Technique</option>
                    <option value="security">Sécurité du Compte</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea 
                  placeholder="Décrivez votre problème en détail..." 
                  rows={5}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors resize-none placeholder:text-slate-400"
                  required
                ></textarea>
              </div>
              
              <div className="pt-2 flex items-center justify-end gap-3">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Annuler
                </button>
                <button 
                  type="submit"
                  className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
                >
                  Envoyer le ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
