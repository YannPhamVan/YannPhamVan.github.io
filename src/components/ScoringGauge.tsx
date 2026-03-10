import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";

interface ScoringGaugeProps {
    initialScore?: number;
    threshold?: number;
}

export default function ScoringGauge({ initialScore = 0.32, threshold = 0.52 }: ScoringGaugeProps) {
    const [score, setScore] = useState(initialScore);
    const isAccepted = score < threshold;

    // Calcul du "coût métier" simulé
    // Dans le projet, FN (Mauvais prédit Bon) coûte 10x plus cher que FP (Bon prédit Mauvais)
    // On simule ici un indicateur de confiance/coût simple
    const businessCostRisk = score > threshold ? (score - threshold) * 10 : 0;

    return (
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mt-6 shadow-inner">
            <div className="flex items-center justify-between mb-6">
                <h4 className="text-sm font-bold text-navy uppercase tracking-tight">Simulateur de Décision</h4>
                <Badge
                    className={isAccepted ? "bg-green-100 text-green-700 hover:bg-green-100 border-green-200" : "bg-red-100 text-red-700 hover:bg-red-100 border-red-200"}
                >
                    {isAccepted ? (
                        <span className="flex items-center gap-1"><CheckCircle2 size={14} /> Crédit Accordé</span>
                    ) : (
                        <span className="flex items-center gap-1"><XCircle size={14} /> Crédit Refusé</span>
                    )}
                </Badge>
            </div>

            {/* Gauge Visualization */}
            <div className="relative h-4 bg-slate-200 rounded-full mb-8 overflow-hidden flex">
                <div
                    className="h-full bg-green-500 transition-all duration-300"
                    style={{ width: `${threshold * 100}%` }}
                />
                <div
                    className="h-full bg-red-500 transition-all duration-300"
                    style={{ width: `${(1 - threshold) * 100}%` }}
                />
                {/* Needle/Marker */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-navy shadow-lg transition-all duration-300 z-10"
                    style={{ left: `${score * 100}%`, transform: 'translateX(-50%)' }}
                />
            </div>

            <div className="space-y-6">
                <div>
                    <div className="flex justify-between text-xs font-medium text-slate-500 mb-2">
                        <span>Probabilité de défaut : {(score * 100).toFixed(1)}%</span>
                        <span>Seuil de risque : {(threshold * 100).toFixed(0)}%</span>
                    </div>
                    <Slider
                        value={[score * 100]}
                        max={100}
                        step={1}
                        onValueChange={(val) => setScore(val[0] / 100)}
                        className="cursor-pointer"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-3 bg-white rounded-lg border border-slate-100">
                        <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Impact Financier</p>
                        <p className="text-sm font-semibold text-navy">
                            {isAccepted ? "Revenu généré" : "Risque écarté"}
                        </p>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-slate-100">
                        <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Coût d'Incertitude</p>
                        <p className={`text-sm font-semibold ${businessCostRisk > 5 ? 'text-red-600' : 'text-slate-600'}`}>
                            {businessCostRisk.toFixed(1)} pts
                        </p>
                    </div>
                </div>

                <p className="text-[11px] text-slate-500 italic leading-relaxed">
                    <AlertCircle size={12} className="inline mr-1 mb-0.5" />
                    La fonction de coût métier pondère les pertes 10x plus que les manques à gagner pour sécuriser la rentabilité.
                </p>
            </div>
        </div>
    );
}
