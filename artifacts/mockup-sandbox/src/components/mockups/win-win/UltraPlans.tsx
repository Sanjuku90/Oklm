import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, Zap, TrendingUp, DollarSign } from 'lucide-react';

export function UltraPlans() {
  const [calcAmount, setCalcAmount] = useState<string>("1000");
  const [calcPlan, setCalcPlan] = useState<"mega" | "hyper">("mega");

  const plans = {
    mega: {
      name: "Mega Booster",
      dailyRate: 0.30,
      duration: 5,
      min: 100,
      max: 3000,
      color: "blue"
    },
    hyper: {
      name: "Hyper Profit",
      dailyRate: 0.60,
      duration: 3,
      min: 150,
      max: 5000,
      color: "amber"
    }
  };

  const currentPlan = plans[calcPlan];
  const amountNum = parseFloat(calcAmount) || 0;
  const dailyProfit = amountNum * currentPlan.dailyRate;
  const totalProfit = dailyProfit * currentPlan.duration;
  const finalAmount = amountNum + totalProfit;

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-amber-500/30">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-sm font-medium text-slate-300 mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Fonds sécurisés et garantis</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Plans Ultra-Rentables
          </h1>
          <p className="text-lg text-slate-400">
            Des rendements quotidiens exceptionnels pour accélérer votre croissance crypto. 
            Sélectionnez le plan adapté à votre stratégie.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          
          {/* Mega Booster Card */}
          <div className="relative group rounded-2xl bg-[#1e293b] border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col">
            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Mega Booster</h3>
                  <p className="text-slate-400 text-sm">Rendement régulier sur 5 jours</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Zap className="w-6 h-6" />
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-black text-white">30%</span>
                  <span className="text-lg text-slate-400 font-medium">/ jour</span>
                </div>
                <div className="inline-flex px-3 py-1 rounded bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700">
                  ROI Total: 150%
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                  <span className="text-slate-400">Durée du contrat</span>
                  <span className="font-semibold text-white">5 Jours</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                  <span className="text-slate-400">Investissement Min</span>
                  <span className="font-semibold text-white">100 USDT</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                  <span className="text-slate-400">Investissement Max</span>
                  <span className="font-semibold text-white">3,000 USDT</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                  <span className="text-slate-400">Retraits</span>
                  <span className="font-semibold text-white">Quotidiens</span>
                </div>
              </div>

              <button className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-colors flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                Investir maintenant
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Hyper Profit Card */}
          <div className="relative group rounded-2xl bg-[#1e293b] border border-amber-500/30 overflow-hidden hover:border-amber-500/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] flex flex-col">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-500"></div>
            
            {/* Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg shadow-lg">
              PLUS POPULAIRE
            </div>

            <div className="p-8 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Hyper Profit</h3>
                  <p className="text-slate-400 text-sm">Croissance agressive sur 3 jours</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">
                    60%
                  </span>
                  <span className="text-lg text-slate-400 font-medium">/ jour</span>
                </div>
                <div className="inline-flex px-3 py-1 rounded bg-amber-500/10 text-amber-400 text-sm font-bold border border-amber-500/20">
                  ROI Total: 180%
                </div>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                  <span className="text-slate-400">Durée du contrat</span>
                  <span className="font-semibold text-white">3 Jours</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                  <span className="text-slate-400">Investissement Min</span>
                  <span className="font-semibold text-white">150 USDT</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                  <span className="text-slate-400">Investissement Max</span>
                  <span className="font-semibold text-white">5,000 USDT</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700/50">
                  <span className="text-slate-400">Retraits</span>
                  <span className="font-semibold text-white">Quotidiens</span>
                </div>
              </div>

              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.2)] group-hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]">
                Investir maintenant
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Calculator Section */}
        <div className="max-w-4xl mx-auto bg-[#1e293b]/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-slate-800 rounded-lg text-slate-300">
              <Calculator className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-white">Simulateur de Profit</h2>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            {/* Inputs */}
            <div className="md:col-span-5 space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Montant de l'investissement (USDT)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <DollarSign className="h-5 w-5 text-slate-500" />
                  </div>
                  <input 
                    type="number" 
                    value={calcAmount}
                    onChange={(e) => setCalcAmount(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors outline-none"
                    placeholder="1000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Plan sélectionné</label>
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => setCalcPlan('mega')}
                    className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all ${
                      calcPlan === 'mega' 
                        ? 'bg-blue-600/10 border-blue-500 text-blue-400' 
                        : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600'
                    }`}
                  >
                    Mega Booster
                  </button>
                  <button 
                    onClick={() => setCalcPlan('hyper')}
                    className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all ${
                      calcPlan === 'hyper' 
                        ? 'bg-amber-500/10 border-amber-500 text-amber-400' 
                        : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-600'
                    }`}
                  >
                    Hyper Profit
                  </button>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="md:col-span-7 bg-slate-900 rounded-xl p-6 border border-slate-800">
              <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                <div>
                  <div className="text-sm text-slate-500 font-medium mb-1">Profit Quotidien</div>
                  <div className={`text-2xl font-bold ${calcPlan === 'hyper' ? 'text-amber-400' : 'text-blue-400'}`}>
                    +${dailyProfit.toFixed(2)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-slate-500 font-medium mb-1">Profit Total ({currentPlan.duration} j)</div>
                  <div className={`text-2xl font-bold ${calcPlan === 'hyper' ? 'text-amber-400' : 'text-blue-400'}`}>
                    +${totalProfit.toFixed(2)}
                  </div>
                </div>
                <div className="col-span-2 pt-6 border-t border-slate-800">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-sm text-slate-500 font-medium mb-1">Retour Final Estimé</div>
                      <div className="text-4xl font-black text-white">
                        ${finalAmount.toFixed(2)} <span className="text-lg text-slate-500 font-medium ml-1">USDT</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
