import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import {
    Database,
    Cpu,
    Archive,
    Globe,
    Activity,
    ArrowRight,
    ShieldCheck,
    Zap,
    Search,
    Github
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const pipelineStages = [
    {
        id: "etl",
        icon: Database,
        title: "ETL & Qualité",
        businessValue: "Fiabilité des données",
        description: "Nettoyage et validation automatique. Garantit que les décisions se basent sur des données intègres.",
        guarantee: "Élimination des erreurs de saisie et de corruption."
    },
    {
        id: "train",
        icon: Cpu,
        title: "Entraînement",
        businessValue: "Optimisation continue",
        description: "Recherche automatique des meilleurs paramètres. Maximise la performance prédictive.",
        guarantee: "Modèle toujours à la pointe de l'état de l'art."
    },
    {
        id: "register",
        icon: Archive,
        title: "Registre MLflow",
        businessValue: "Auditabilité complète",
        description: "Historisation de chaque version du modèle. Traçabilité totale exigée en finance.",
        guarantee: "Conformité réglementaire et historique des tests."
    },
    {
        id: "serve",
        icon: Globe,
        title: "API FastAPI",
        businessValue: "Agilité métier",
        description: "Accès instantané aux prédictions via API. Intégration fluide dans vos outils existants.",
        guarantee: "Réduction massive du temps de mise sur le marché."
    },
    {
        id: "monitor",
        icon: Activity,
        title: "Monitoring",
        businessValue: "Sécurité opérationnelle",
        description: "Détection de dérive (Data Drift). Alerte si le comportement du marché change.",
        guarantee: "Prévention proactive des erreurs de prédiction."
    }
];

export default function MLOpsPipeline() {
    const [activeStage, setActiveStage] = useState<string | null>(null);
    const [threshold, setThreshold] = useState(7); // Objectif de rendement PEA (%)
    const [probSuccess, setProbSuccess] = useState(68);

    // Simulation simple de l'impact du seuil sur la probabilité
    const handleThresholdChange = (val: number[]) => {
        const newThreshold = val[0];
        setThreshold(newThreshold);
        // Plus le seuil est haut, plus la proba baisse (simulation simple)
        const baseProb = 85;
        const calculatedProb = Math.max(10, baseProb - (newThreshold * 2.5));
        setProbSuccess(Math.round(calculatedProb));
    };

    return (
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mt-6 shadow-inner text-left">
            <div className="flex items-center justify-between mb-8">
                <h4 className="text-sm font-bold text-navy uppercase tracking-tight">Cycle de Vie du Modèle (MLOps)</h4>
            </div>

            {/* Visual Pipeline */}
            <div className="flex items-center justify-between mb-10 relative">
                {/* Connection lines */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

                <TooltipProvider>
                    {pipelineStages.map((stage, index) => {
                        const Icon = stage.icon;
                        const isActive = activeStage === stage.id;
                        return (
                            <div key={stage.id} className="relative z-10 flex flex-col items-center">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <button
                                            onClick={() => setActiveStage(isActive ? null : stage.id)}
                                            onMouseEnter={() => setActiveStage(stage.id)}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border-2 cursor-pointer ${isActive
                                                ? "bg-performance-blue border-performance-blue text-white scale-110 shadow-lg"
                                                : "bg-white border-slate-200 text-slate-400 hover:border-performance-blue hover:text-performance-blue hover:scale-110 hover:shadow-md"
                                                }`}
                                        >
                                            <Icon size={18} />
                                        </button>
                                    </TooltipTrigger>
                                    <TooltipContent side="top" className="max-w-[200px] p-3 text-xs leading-relaxed">
                                        <p className="font-bold mb-1 text-performance-blue uppercase tracking-wider">{stage.title}</p>
                                        <p className="text-slate-600 italic mb-1">{stage.businessValue}</p>
                                        <p>{stage.description}</p>
                                    </TooltipContent>
                                </Tooltip>
                                <span className={`mt-2 text-[10px] font-bold uppercase transition-colors ${isActive ? "text-performance-blue" : "text-slate-400"}`}>
                                    {stage.id}
                                </span>
                            </div>
                        );
                    })}
                </TooltipProvider>
            </div>

            {/* Stage Detail Box */}
            <div className="min-h-[100px] mb-8 p-4 bg-white border border-slate-100 rounded-lg shadow-sm transition-all animate-in fade-in slide-in-from-top-1">
                {activeStage ? (
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <ShieldCheck size={16} className="text-performance-green" />
                            <p className="text-xs font-bold text-navy uppercase">{pipelineStages.find(s => s.id === activeStage)?.businessValue}</p>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            {pipelineStages.find(s => s.id === activeStage)?.guarantee}
                        </p>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full text-slate-400 text-sm text-center">
                        <p><Search size={14} className="inline mr-2" />Cliquez sur un stage pour voir sa valeur métier et ce qu'il garantit</p>
                    </div>
                )}
            </div>

            {/* Mini Simulation */}
            <div className="pt-6 border-t border-slate-200">
                <h5 className="text-xs font-bold text-navy uppercase mb-2 flex items-center gap-2">
                    <Zap size={14} className="text-performance-blue" />
                    Simulateur de Performance ETF
                </h5>
                <p className="text-[10px] text-slate-500 mb-4 italic">
                    Plus votre objectif de rendement est ambitieux, plus la probabilité de succès calculée baisse (simulation).
                </p>

                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between text-xs font-medium text-slate-500 mb-2">
                            <span>Objectif de rendement : {threshold}% / an</span>
                            <span className="font-bold text-navy">Probabilité ML : {probSuccess}%</span>
                        </div>
                        <Slider
                            value={[threshold]}
                            max={20}
                            min={0}
                            step={0.5}
                            onValueChange={handleThresholdChange}
                            className="cursor-pointer"
                        />
                    </div>

                    <div className={`p-3 rounded-lg border flex items-center justify-between ${probSuccess > 50 ? "bg-green-50 border-green-100" : "bg-orange-50 border-orange-100"}`}>
                        <div>
                            <p className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">Statut Pipeline</p>
                            <p className="text-xs font-bold text-navy">
                                {probSuccess > 50 ? "Modèle Validé - Conforme" : "Modèle Alerte - Drift Suspecté"}
                            </p>
                        </div>
                        <Badge
                            className={`shadow-none ${probSuccess > 50
                                ? "bg-performance-green text-white hover:bg-performance-green/90"
                                : "bg-orange-500 text-white hover:bg-orange-500/90"
                                }`}
                        >
                            {probSuccess > 50 ? "Prêt" : "Action Req."}
                        </Badge>
                    </div>

                    <p className="text-[11px] text-slate-500 italic leading-relaxed">
                        Un changement d'objectif client déclenche automatiquement une ré-évaluation du risque via les pipelines Prefect et Evidently.
                    </p>
                </div>
            </div>
        </div>
    );
}
