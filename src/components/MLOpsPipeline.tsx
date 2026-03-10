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
    const [selectedStage, setSelectedStage] = useState<string | null>(null);
    const [hoveredStage, setHoveredStage] = useState<string | null>(null);
    const [threshold, setThreshold] = useState(7); // Objectif de rendement PEA (%)
    const [probSuccess, setProbSuccess] = useState(68);

    const isDrifted = probSuccess <= 50;

    // Simulation simple de l'impact du seuil sur la probabilité
    const handleThresholdChange = (val: number[]) => {
        const newThreshold = val[0];
        setThreshold(newThreshold);
        // Plus le seuil est haut, plus la proba baisse (simulation simple)
        const baseProb = 85;
        const calculatedProb = Math.max(10, baseProb - (newThreshold * 2.5));
        setProbSuccess(Math.round(calculatedProb));
    };

    const activeStageId = hoveredStage || selectedStage;

    return (
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mt-6 shadow-inner text-left">
            <div className="flex items-center justify-between mb-8">
                <h4 className="text-sm font-bold text-navy uppercase tracking-tight">Cycle de Vie du Modèle (MLOps)</h4>
            </div>

            {/* Visual Pipeline */}
            <div className="flex items-center justify-between mb-10 relative px-2">
                {/* Connection lines */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

                <TooltipProvider>
                    {pipelineStages.map((stage) => {
                        const Icon = stage.icon;
                        const isSelected = selectedStage === stage.id;
                        const isHovered = hoveredStage === stage.id;
                        const isActive = isSelected || isHovered;

                        // Monitoring stage is special: it turns orange if drift is detected in the simulator
                        const isMonitor = stage.id === "monitor";
                        const showWarning = isMonitor && isDrifted;

                        return (
                            <div key={stage.id} className="relative z-10 flex flex-col items-center">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <button
                                            onClick={() => setSelectedStage(isSelected ? null : stage.id)}
                                            onMouseEnter={() => setHoveredStage(stage.id)}
                                            onMouseLeave={() => setHoveredStage(null)}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border-2 cursor-pointer relative ${isSelected
                                                    ? "bg-performance-blue border-performance-blue text-white scale-110 shadow-lg ring-4 ring-performance-blue/20"
                                                    : showWarning
                                                        ? "bg-white border-orange-500 text-orange-500 animate-pulse"
                                                        : isHovered
                                                            ? "bg-white border-performance-blue text-performance-blue scale-110 shadow-md"
                                                            : "bg-white border-slate-200 text-slate-400"
                                                }`}
                                        >
                                            <Icon size={18} />
                                            {showWarning && (
                                                <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full border-2 border-white" />
                                            )}
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
            <div className="min-h-[110px] mb-8 p-4 bg-white border border-slate-100 rounded-lg shadow-sm transition-all duration-300 ring-1 ring-black/5 overflow-hidden">
                {activeStageId ? (
                    <div className="animate-in fade-in slide-in-from-left-2 duration-300">
                        <div className="flex items-center gap-2 mb-2">
                            <ShieldCheck size={16} className="text-performance-green" />
                            <p className="text-xs font-bold text-navy uppercase">
                                {pipelineStages.find(s => s.id === activeStageId)?.businessValue}
                                {selectedStage === activeStageId && <span className="ml-2 text-[10px] text-performance-blue lowercase italic font-normal">(épinglé)</span>}
                            </p>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            {pipelineStages.find(s => s.id === activeStageId)?.guarantee}
                        </p>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full text-slate-400 text-sm text-center py-4">
                        <p className="animate-pulse">
                            <Search size={14} className="inline mr-2" />
                            Cliquez sur une étape pour fixer les détails métier
                        </p>
                    </div>
                )}
            </div>

            {/* Mini Simulation */}
            <div className="pt-6 border-t border-slate-200 relative">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xs font-bold text-navy uppercase flex items-center gap-2">
                        <Zap size={14} className="text-performance-blue" />
                        Aide à la Décision (Live SIM)
                    </h5>
                    {isDrifted && (
                        <Badge variant="outline" className="border-orange-500 text-orange-600 text-[10px] bg-orange-50 animate-bounce">
                            Drift détecté
                        </Badge>
                    )}
                </div>

                <p className="text-[10px] text-slate-500 mb-6 italic leading-snug">
                    Modifiez vos objectifs de rendement : le pipeline MLOps réévalue instantanément la faisabilité et surveille la "dérive" du modèle.
                </p>

                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between text-xs font-medium text-slate-500 mb-2">
                            <span>Objectif de rendement : <span className="text-navy font-bold">{threshold}% / an</span></span>
                            <span className={`transition-colors font-bold ${isDrifted ? "text-orange-600" : "text-performance-green"}`}>
                                {probSuccess}% de réussite
                            </span>
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

                    <div className={`p-4 rounded-lg border flex items-center justify-between transition-colors duration-500 ${!isDrifted ? "bg-green-50 border-green-100" : "bg-orange-50 border-orange-100"}`}>
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-full ${!isDrifted ? "bg-performance-green/10 text-performance-green" : "bg-orange-100 text-orange-600"}`}>
                                <Activity size={16} />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">Statut Production</p>
                                <p className={`text-xs font-bold ${!isDrifted ? "text-navy" : "text-orange-600"}`}>
                                    {!isDrifted ? "Modèle Optimal & Robuste" : "Alerte : Limites du modèle atteintes"}
                                </p>
                            </div>
                        </div>
                        <Badge
                            className={`shadow-none font-bold ${!isDrifted
                                ? "bg-performance-green text-white"
                                : "bg-orange-500 text-white"
                                }`}
                        >
                            {!isDrifted ? "OK" : "CHECK"}
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    );
}
